import express from 'express';
import { pgPool } from '../app.js';
import { processAndSanitizeImage } from '../services/imageProcessor.js';
import { saveFile, getFileBuffer, deleteFile, getActiveStorageProvider } from '../services/storage.js';
import { uploadIpRateLimiter, checkDailyUploadQuota } from '../services/rateLimiter.js';

let multer = null;
try {
  const multerModule = await import('multer');
  multer = multerModule.default || multerModule;
} catch {
  console.warn('NOTICE [UPLOADS]: multer package not installed locally; using fallback multipart body parser.');
}

const router = express.Router();

let uploadMiddleware;
if (multer) {
  uploadMiddleware = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }
  }).single('photo');
} else {
  // Simple fallback multipart buffer parser for dev/testing when multer binary package is absent
  uploadMiddleware = async (req, res, next) => {
    if (req.file || !req.headers['content-type']?.includes('multipart/form-data')) return next();
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const str = buffer.toString('binary');
      const boundaryMatch = req.headers['content-type'].match(/boundary=(.+)$/);
      if (boundaryMatch) {
        const boundary = boundaryMatch[1];
        const parts = str.split(`--${boundary}`);
        req.body = req.body || {};
        for (const part of parts) {
          if (part.includes('name="consent"')) {
            const val = part.split('\r\n\r\n')[1]?.split('\r\n')[0]?.trim();
            req.body.consent = val;
          }
          if (part.includes('name="photo"') && part.includes('filename=')) {
            const headersAndBody = part.split('\r\n\r\n');
            if (headersAndBody.length >= 2) {
              const fileContentBinary = headersAndBody.slice(1).join('\r\n\r\n').replace(/\r\n--$/, '').replace(/\r\n$/, '');
              const filenameMatch = headersAndBody[0].match(/filename="([^"]+)"/);
              req.file = {
                fieldname: 'photo',
                originalname: filenameMatch ? filenameMatch[1] : 'uploaded_photo.png',
                mimetype: 'image/png',
                buffer: Buffer.from(fileContentBinary, 'binary')
              };
            }
          }
        }
      }
      next();
    });
  };
}

function requireAuth(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
}

/**
 * POST /api/uploads
 * Upload personal photo with explicit consent check, rate limit, quota check, and image sanitization
 */
router.post(
  '/',
  requireAuth,
  uploadIpRateLimiter,
  uploadMiddleware,
  async (req, res) => {
    try {
      // 1. Explicit consent verification (MUST BE explicitly passed as true)
      const consentProvided = req.body?.consent === 'true' || req.body?.consent === true;
      if (!consentProvided) {
        return res.status(400).json({
          error: 'Explicit user consent is required before uploading personal photos. You must confirm that you own or have explicit permission to use this photo.'
        });
      }

      if (!req.file || !req.file.buffer) {
        return res.status(400).json({ error: 'No image file provided in upload request.' });
      }

      // 2. Daily quota check
      await checkDailyUploadQuota(pgPool, req.session.userId);

      // 3. Process, sanitize, strip EXIF metadata, and re-encode image
      const processed = await processAndSanitizeImage(
        req.file.buffer,
        req.file.originalname,
        req.file.mimetype
      );

      // 4. Save to object storage or local storage driver
      const storageResult = await saveFile(
        processed.storageKey,
        processed.sanitizedBuffer,
        processed.mimeType
      );

      // 5. Save metadata into PostgreSQL user_uploads table
      const insertResult = await pgPool.query(
        `INSERT INTO user_uploads (
          user_id, original_filename, storage_key, storage_provider,
          mime_type, file_size_bytes, width, height, is_private,
          consent_given, consent_at, consent_version
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true, true, NOW(), 'v1.0')
        RETURNING id, original_filename, mime_type, file_size_bytes, width, height, is_private, consent_given, consent_at, created_at`,
        [
          req.session.userId,
          processed.originalFilename,
          processed.storageKey,
          storageResult.provider,
          processed.mimeType,
          processed.fileSizeBytes,
          processed.width,
          processed.height
        ]
      );

      const uploadRecord = insertResult.rows[0];

      return res.status(201).json({
        ok: true,
        upload: {
          id: uploadRecord.id,
          original_filename: uploadRecord.original_filename,
          mime_type: uploadRecord.mime_type,
          file_size_bytes: uploadRecord.file_size_bytes,
          width: uploadRecord.width,
          height: uploadRecord.height,
          created_at: uploadRecord.created_at,
          view_url: `/api/uploads/${uploadRecord.id}/view`,
          notice: 'Uploaded photo stored privately. Selected photo will be processed securely and may be sent to Fal AI for transformation.'
        }
      });
    } catch (err) {
      console.error('Upload endpoint error:', err);
      const statusCode = err.message.includes('limit') || err.message.includes('boundary') ? 400 : 500;
      return res.status(statusCode).json({ error: err.message || 'Failed to process image upload.' });
    }
  }
);

/**
 * GET /api/uploads
 * List current user's uploaded personal photos
 */
router.get('/', requireAuth, async (req, res) => {
  try {
    const result = await pgPool.query(
      `SELECT id, original_filename, mime_type, file_size_bytes, width, height, is_private, consent_given, consent_at, created_at
       FROM user_uploads
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [req.session.userId]
    );

    const uploads = result.rows.map((row) => ({
      ...row,
      view_url: `/api/uploads/${row.id}/view`
    }));

    return res.json({ uploads });
  } catch (err) {
    console.error('Get uploads error:', err);
    return res.status(500).json({ error: 'Failed to retrieve uploaded photos.' });
  }
});

/**
 * GET /api/uploads/:id/view
 * Authorized private image streaming endpoint with ownership check
 */
router.get('/:id/view', requireAuth, async (req, res) => {
  try {
    const uploadId = req.params.id;
    const result = await pgPool.query(
      `SELECT id, user_id, storage_key, mime_type FROM user_uploads WHERE id = $1`,
      [uploadId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Uploaded photo not found.' });
    }

    const upload = result.rows[0];

    // Enforce private ownership check (only owner, moderator, or admin may access)
    const isOwner = upload.user_id === req.session.userId;
    const isStaff = ['admin', 'moderator'].includes(req.session.role);
    if (!isOwner && !isStaff) {
      return res.status(403).json({ error: 'Forbidden: You do not have permission to view this private photo.' });
    }

    const fileBuffer = await getFileBuffer(upload.storage_key);

    res.setHeader('Content-Type', upload.mime_type || 'image/webp');
    res.setHeader('Cache-Control', 'private, max-age=3600');
    return res.send(fileBuffer);
  } catch (err) {
    console.error('View upload error:', err);
    return res.status(500).json({ error: 'Failed to access private image.' });
  }
});

/**
 * DELETE /api/uploads/:id
 * Delete photo metadata & underlying storage object
 */
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const uploadId = req.params.id;
    const result = await pgPool.query(
      `SELECT id, user_id, storage_key FROM user_uploads WHERE id = $1`,
      [uploadId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Uploaded photo not found.' });
    }

    const upload = result.rows[0];
    const isOwner = upload.user_id === req.session.userId;
    const isAdmin = req.session.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ error: 'Forbidden: You cannot delete another user photo.' });
    }

    // Delete from storage driver
    await deleteFile(upload.storage_key);

    // Delete DB record
    await pgPool.query(`DELETE FROM user_uploads WHERE id = $1`, [uploadId]);

    return res.json({ ok: true, message: 'Upload removed successfully.' });
  } catch (err) {
    console.error('Delete upload error:', err);
    return res.status(500).json({ error: 'Failed to delete photo upload.' });
  }
});

export default router;
