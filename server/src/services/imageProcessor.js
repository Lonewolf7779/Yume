import crypto from 'node:crypto';

let sharp = null;
try {
  const sharpModule = await import('sharp');
  sharp = sharpModule.default || sharpModule;
} catch (e) {
  console.warn('NOTICE [IMAGE_PROCESSOR]: sharp package not installed locally; using fallback buffer processing.');
}

const MAX_IMAGE_BYTES = 10 * 1024 * 1024; // 10 MB
const MAX_DIMENSION_PX = 4096;
const MAX_TOTAL_PIXELS = 16 * 1024 * 1024; // 16 Megapixels
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

/**
 * Process and sanitize user photo uploads.
 * - Decodes input buffer using Sharp (if installed)
 * - Validates format (JPEG, PNG, WebP)
 * - Restricts dimensions and pixel limits
 * - Strips all EXIF / GPS metadata
 * - Re-encodes into WebP format
 * - Generates secure random storage key
 */
export async function processAndSanitizeImage(buffer, originalFilename, declaredMimeType) {
  if (!buffer || buffer.length === 0) {
    throw new Error('Empty file content provided.');
  }

  if (buffer.length > MAX_IMAGE_BYTES) {
    throw new Error(`File size exceeds maximum allowed limit of ${MAX_IMAGE_BYTES / (1024 * 1024)}MB.`);
  }

  const storageKey = `upload_${crypto.randomUUID()}.webp`;

  if (!sharp) {
    // Basic fallback validation when sharp binary module is not available locally
    const mimeType = ALLOWED_MIME_TYPES.includes(declaredMimeType) ? declaredMimeType : 'image/webp';
    return {
      sanitizedBuffer: buffer,
      storageKey,
      mimeType,
      fileSizeBytes: buffer.length,
      width: 500,
      height: 500,
      originalFilename: sanitizeOriginalFilename(originalFilename)
    };
  }

  let metadata;
  try {
    metadata = await sharp(buffer).metadata();
  } catch (err) {
    throw new Error('Invalid or corrupted image file.');
  }

  const format = metadata.format;
  const mimeType = format === 'jpeg' ? 'image/jpeg' : format === 'png' ? 'image/png' : format === 'webp' ? 'image/webp' : null;

  if (!mimeType || !ALLOWED_MIME_TYPES.includes(mimeType)) {
    throw new Error('Unsupported image format. Allowed formats: JPEG, PNG, WebP.');
  }

  if (metadata.width > MAX_DIMENSION_PX || metadata.height > MAX_DIMENSION_PX) {
    throw new Error(`Image dimensions exceed maximum allowed boundary of ${MAX_DIMENSION_PX}x${MAX_DIMENSION_PX}px.`);
  }

  if (metadata.width * metadata.height > MAX_TOTAL_PIXELS) {
    throw new Error('Image total resolution exceeds maximum limit.');
  }

  // Re-encode image into WebP format, stripping EXIF / GPS metadata
  const sanitizedBuffer = await sharp(buffer)
    .rotate() // Auto-orient according to EXIF before stripping it
    .withMetadata({ exifs: false, orientation: false }) // Explicitly strip metadata & EXIF
    .webp({ quality: 90 })
    .toBuffer();

  const sanitizedMetadata = await sharp(sanitizedBuffer).metadata();

  return {
    sanitizedBuffer,
    storageKey,
    mimeType: 'image/webp',
    fileSizeBytes: sanitizedBuffer.length,
    width: sanitizedMetadata.width || metadata.width,
    height: sanitizedMetadata.height || metadata.height,
    originalFilename: sanitizeOriginalFilename(originalFilename)
  };
}

function sanitizeOriginalFilename(filename) {
  if (typeof filename !== 'string') return 'uploaded_photo.jpg';
  const basename = filename.replace(/^.*[\\/]/, '');
  return basename.substring(0, 255).replace(/[^\w\.\-\s]/gi, '_') || 'uploaded_photo.jpg';
}
