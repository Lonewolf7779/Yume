import { Router } from 'express';
import { pgPool } from '../app.js';
import { requireAuth } from '../middleware/auth.js';
import {
  getFalGenerationResult,
  getFalGenerationStatus,
  getFalModel,
  getFalTransformModel,
  isFalConfigured,
  submitFalGeneration,
  submitFalTransformation
} from '../services/fal.js';
import { generationIpRateLimiter, checkDailyGenerationQuota } from '../services/rateLimiter.js';
import { getPresignedOrProxyUrl } from '../services/storage.js';

const router = Router();

const IMAGE_SIZES = new Set([
  'square',
  'portrait_4_3',
  'portrait_16_9',
  'landscape_4_3',
  'landscape_16_9'
]);

function toGeneration(row) {
  return {
    id: row.id,
    prompt: row.prompt,
    imageSize: row.image_size,
    seed: row.seed,
    model: row.model,
    status: row.status,
    sourceUploadId: row.source_upload_id || null,
    images: Array.isArray(row.images) ? row.images : [],
    error: row.error_message,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function readPrompt(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function readSeed(value) {
  if (value === '' || value === undefined || value === null) return null;
  const seed = Number(value);
  return Number.isSafeInteger(seed) && seed >= 0 && seed <= 4_294_967_295 ? seed : null;
}

async function fetchOwnedGeneration(userId, generationId) {
  const result = await pgPool.query(
    `SELECT * FROM generations WHERE id = $1 AND user_id = $2 LIMIT 1`,
    [generationId, userId]
  );
  return result.rows[0] || null;
}

async function markGenerationFailed(generation, message) {
  const result = await pgPool.query(
    `
      UPDATE generations
      SET status = 'failed', error_message = $1, updated_at = NOW()
      WHERE id = $2
      RETURNING *
    `,
    [message.slice(0, 500), generation.id]
  );
  return result.rows[0];
}

async function refreshGeneration(generation) {
  if (!generation.provider_status_url || !generation.provider_response_url) return generation;
  if (!['queued', 'processing'].includes(generation.status)) return generation;

  try {
    const providerStatus = await getFalGenerationStatus(generation.provider_status_url);

    if (providerStatus.status === 'IN_QUEUE' || providerStatus.status === 'IN_PROGRESS') {
      const result = await pgPool.query(
        `UPDATE generations SET status = 'processing', updated_at = NOW() WHERE id = $1 RETURNING *`,
        [generation.id]
      );
      return result.rows[0];
    }

    if (providerStatus.status === 'COMPLETED' && providerStatus.error) {
      return markGenerationFailed(generation, 'fal could not complete this generation');
    }

    if (providerStatus.status === 'COMPLETED') {
      const providerResult = await getFalGenerationResult(generation.provider_response_url);
      const images = Array.isArray(providerResult?.images)
        ? providerResult.images
            .filter((image) => image?.url)
            .map((image) => ({
              url: image.url,
              width: image.width || null,
              height: image.height || null,
              contentType: image.content_type || null
            }))
        : [];

      if (images.length === 0) {
        return markGenerationFailed(generation, 'fal completed without returning an image');
      }

      const result = await pgPool.query(
        `
          UPDATE generations
          SET status = 'completed',
              images = $1::jsonb,
              provider_metadata = $2::jsonb,
              error_message = NULL,
              updated_at = NOW()
          WHERE id = $3
          RETURNING *
        `,
        [
          JSON.stringify(images),
          JSON.stringify({
            requestId: providerStatus.request_id || generation.provider_request_id,
            inferenceTime: providerStatus.metrics?.inference_time || null
          }),
          generation.id
        ]
      );
      return result.rows[0];
    }

    return markGenerationFailed(generation, 'fal returned an unknown generation state');
  } catch (error) {
    console.error('Unable to refresh fal generation', error);
    return generation;
  }
}

router.get('/public', async (req, res) => {
  const requestedLimit = Number(req.query.limit || 24);
  const limit = Number.isSafeInteger(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), 50) : 24;

  try {
    // Fetch recent successful generations. In a real app, you might filter by 'is_public' or similar,
    // but here we just fetch recent completed ones for the showcase.
    const result = await pgPool.query(
      `
        SELECT id, prompt, image_size, model, status, images, created_at, user_id
        FROM generations
        WHERE status = 'completed' AND jsonb_array_length(images) > 0
        ORDER BY created_at DESC
        LIMIT $1
      `,
      [limit]
    );

    const publicGenerations = result.rows.map(row => {
      // Map to safe public structure (hiding sensitive info if any)
      return {
        id: row.id,
        prompt: row.prompt,
        imageSize: row.image_size,
        model: row.model,
        images: Array.isArray(row.images) ? row.images : [],
        createdAt: row.created_at,
        userId: row.user_id // Used to match creator info if needed
      };
    });

    return res.status(200).json({ generations: publicGenerations });
  } catch (error) {
    console.error('Failed to fetch public generations', error);
    return res.status(500).json({ error: 'Failed to fetch public generations' });
  }
});

router.get('/', requireAuth, async (req, res) => {
  const requestedLimit = Number(req.query.limit || 24);
  const limit = Number.isSafeInteger(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), 50) : 24;

  try {
    const result = await pgPool.query(
      `
        SELECT * FROM generations
        WHERE user_id = $1
        ORDER BY created_at DESC
        LIMIT $2
      `,
      [req.session.userId, limit]
    );

    return res.json({ generations: result.rows.map(toGeneration) });
  } catch (error) {
    console.error('Failed to list generations', error);
    return res.status(500).json({ error: 'Unable to load your creations' });
  }
});

/**
 * POST /api/generations
 * Text-to-Image AI generation endpoint with rate limits and quota enforcement
 */
router.post('/', requireAuth, generationIpRateLimiter, async (req, res) => {
  if (!isFalConfigured()) {
    return res.status(503).json({
      error: 'Image generation is not configured yet. Add FAL_KEY to the server environment.'
    });
  }

  try {
    await checkDailyGenerationQuota(pgPool, req.session.userId);
  } catch (quotaError) {
    return res.status(429).json({ error: quotaError.message });
  }

  const prompt = readPrompt(req.body?.prompt);
  const imageSize = typeof req.body?.imageSize === 'string' ? req.body.imageSize : 'portrait_4_3';
  const size = IMAGE_SIZES.has(imageSize);
  const seed = readSeed(req.body?.seed);

  if (prompt.length < 3 || prompt.length > 1600) {
    return res.status(400).json({ error: 'Prompt must be between 3 and 1600 characters' });
  }

  if (!size) {
    return res.status(400).json({ error: 'Choose a valid image size' });
  }

  if (req.body?.seed !== '' && req.body?.seed !== undefined && req.body?.seed !== null && seed === null) {
    return res.status(400).json({ error: 'Seed must be a whole number between 0 and 4294967295' });
  }

  try {
    const created = await pgPool.query(
      `
        INSERT INTO generations (user_id, prompt, image_size, seed, model, status)
        VALUES ($1, $2, $3, $4, $5, 'queued')
        RETURNING *
      `,
      [req.session.userId, prompt, imageSize, seed, getFalModel()]
    );

    let generation = created.rows[0];

    try {
      const submission = await submitFalGeneration({
        prompt,
        imageSize,
        seed
      });

      const updated = await pgPool.query(
        `
          UPDATE generations
          SET status = 'processing',
              provider_request_id = $1,
              provider_status_url = $2,
              provider_response_url = $3,
              updated_at = NOW()
          WHERE id = $4
          RETURNING *
        `,
        [submission.requestId, submission.statusUrl, submission.responseUrl, generation.id]
      );
      generation = updated.rows[0];
    } catch (error) {
      console.error('fal submission failed', error);
      generation = await markGenerationFailed(generation, 'The image provider could not start this generation');
      return res.status(502).json({ error: 'The image provider could not start this generation', generation: toGeneration(generation) });
    }

    return res.status(202).json({ generation: toGeneration(generation) });
  } catch (error) {
    console.error('Failed to create generation', error);
    return res.status(500).json({ error: 'Unable to create this generation' });
  }
});

/**
 * POST /api/generations/transform
 * Dedicated Personal Photo Transformation endpoint using Fal Image-to-Image / Redux model
 */
router.post('/transform', requireAuth, generationIpRateLimiter, async (req, res) => {
  if (!isFalConfigured()) {
    return res.status(503).json({
      error: 'Image transformation is not configured yet. Add FAL_KEY to the server environment.'
    });
  }

  try {
    await checkDailyGenerationQuota(pgPool, req.session.userId);
  } catch (quotaError) {
    return res.status(429).json({ error: quotaError.message });
  }

  const sourceUploadId = Number(req.body?.sourceUploadId);
  const prompt = readPrompt(req.body?.prompt);
  const imageSize = typeof req.body?.imageSize === 'string' ? req.body.imageSize : 'portrait_4_3';
  const size = IMAGE_SIZES.has(imageSize);
  const seed = readSeed(req.body?.seed);

  if (!Number.isSafeInteger(sourceUploadId) || sourceUploadId < 1) {
    return res.status(400).json({ error: 'Valid source photo upload ID is required for photo transformation' });
  }

  if (prompt.length < 3 || prompt.length > 1600) {
    return res.status(400).json({ error: 'Prompt must be between 3 and 1600 characters' });
  }

  if (!size) {
    return res.status(400).json({ error: 'Choose a valid image size' });
  }

  try {
    // 1. Verify user owns the source photo upload
    const uploadResult = await pgPool.query(
      `SELECT id, user_id, storage_key FROM user_uploads WHERE id = $1 AND user_id = $2`,
      [sourceUploadId, req.session.userId]
    );

    if (uploadResult.rows.length === 0) {
      return res.status(404).json({ error: 'Source uploaded photo not found or access denied.' });
    }

    const upload = uploadResult.rows[0];

    // 2. Generate short-lived view URL for Fal worker access
    const imageUrl = await getPresignedOrProxyUrl(req, upload.id, upload.storage_key);

    // 3. Create queued generation record
    const created = await pgPool.query(
      `
        INSERT INTO generations (user_id, prompt, image_size, seed, model, status, source_upload_id)
        VALUES ($1, $2, $3, $4, $5, 'queued', $6)
        RETURNING *
      `,
      [req.session.userId, prompt, imageSize, seed, getFalTransformModel(), upload.id]
    );

    let generation = created.rows[0];

    try {
      const submission = await submitFalTransformation({
        prompt,
        imageUrl,
        imageSize,
        seed
      });

      const updated = await pgPool.query(
        `
          UPDATE generations
          SET status = 'processing',
              provider_request_id = $1,
              provider_status_url = $2,
              provider_response_url = $3,
              updated_at = NOW()
          WHERE id = $4
          RETURNING *
        `,
        [submission.requestId, submission.statusUrl, submission.responseUrl, generation.id]
      );
      generation = updated.rows[0];
    } catch (error) {
      console.error('fal photo transformation submission failed', error);
      generation = await markGenerationFailed(generation, 'The image provider could not start photo transformation');
      return res.status(502).json({ error: 'The image provider could not start photo transformation', generation: toGeneration(generation) });
    }

    return res.status(202).json({ generation: toGeneration(generation) });
  } catch (error) {
    console.error('Failed to create photo transformation', error);
    return res.status(500).json({ error: 'Unable to create photo transformation' });
  }
});

router.get('/:generationId', requireAuth, async (req, res) => {
  const generationId = Number(req.params.generationId);
  if (!Number.isSafeInteger(generationId) || generationId < 1) {
    return res.status(400).json({ error: 'Invalid generation id' });
  }

  try {
    const generation = await fetchOwnedGeneration(req.session.userId, generationId);
    if (!generation) return res.status(404).json({ error: 'Generation not found' });

    const refreshed = await refreshGeneration(generation);
    return res.json({ generation: toGeneration(refreshed) });
  } catch (error) {
    console.error('Failed to fetch generation', error);
    return res.status(500).json({ error: 'Unable to load this generation' });
  }
});

router.delete('/:generationId', requireAuth, async (req, res) => {
  const generationId = Number(req.params.generationId);
  if (!Number.isSafeInteger(generationId) || generationId < 1) {
    return res.status(400).json({ error: 'Invalid generation id' });
  }

  try {
    const result = await pgPool.query(
      `DELETE FROM generations WHERE id = $1 AND user_id = $2 RETURNING id`,
      [generationId, req.session.userId]
    );

    if (!result.rows[0]) return res.status(404).json({ error: 'Generation not found' });
    return res.json({ ok: true });
  } catch (error) {
    console.error('Failed to delete generation', error);
    return res.status(500).json({ error: 'Unable to delete this generation' });
  }
});

export default router;
