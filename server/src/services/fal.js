const DEFAULT_FAL_MODEL = 'fal-ai/flux-pro/v1.1';
const DEFAULT_FAL_TRANSFORM_MODEL = 'fal-ai/flux-pro/v1.1/redux';

export function isFalConfigured() {
  return Boolean(process.env.FAL_KEY);
}

export function getFalModel() {
  return process.env.FAL_IMAGE_MODEL || DEFAULT_FAL_MODEL;
}

export function getFalTransformModel() {
  return process.env.FAL_TRANSFORM_MODEL || DEFAULT_FAL_TRANSFORM_MODEL;
}

function falHeaders() {
  if (!isFalConfigured()) {
    const error = new Error('FAL_KEY is not configured');
    error.code = 'FAL_NOT_CONFIGURED';
    throw error;
  }

  return {
    Authorization: `Key ${process.env.FAL_KEY}`,
    'Content-Type': 'application/json'
  };
}

function assertFalQueueUrl(url) {
  if (!url || !url.startsWith('https://queue.fal.run/')) {
    throw new Error('fal returned an invalid queue URL');
  }
}

async function falRequest(url, options = {}) {
  assertFalQueueUrl(url);
  const response = await fetch(url, {
    ...options,
    headers: {
      ...falHeaders(),
      ...(options.headers || {})
    }
  });

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(body?.detail || `fal request failed with status ${response.status}`);
    error.status = response.status;
    error.code = body?.error_type || 'FAL_REQUEST_FAILED';
    throw error;
  }

  return body;
}

export async function submitFalGeneration({ prompt, imageSize, seed }) {
  const body = {
    prompt,
    image_size: imageSize,
    num_images: 1,
    output_format: 'jpeg'
  };

  if (Number.isSafeInteger(seed)) body.seed = seed;

  const submission = await falRequest(`https://queue.fal.run/${getFalModel()}`, {
    method: 'POST',
    body: JSON.stringify(body)
  });

  if (!submission?.request_id || !submission?.status_url || !submission?.response_url) {
    throw new Error('fal returned an incomplete generation request');
  }

  return {
    requestId: submission.request_id,
    statusUrl: submission.status_url,
    responseUrl: submission.response_url
  };
}

/**
 * Submit personal photo transformation to dedicated image-to-image Fal endpoint (flux-pro/v1.1/redux)
 */
export async function submitFalTransformation({ prompt, imageUrl, imageSize, seed }) {
  if (!imageUrl) {
    throw new Error('Image URL is required for photo transformation');
  }

  const body = {
    prompt,
    image_url: imageUrl,
    image_size: imageSize,
    num_images: 1,
    output_format: 'jpeg'
  };

  if (Number.isSafeInteger(seed)) body.seed = seed;

  const submission = await falRequest(`https://queue.fal.run/${getFalTransformModel()}`, {
    method: 'POST',
    body: JSON.stringify(body)
  });

  if (!submission?.request_id || !submission?.status_url || !submission?.response_url) {
    throw new Error('fal returned an incomplete transformation request');
  }

  return {
    requestId: submission.request_id,
    statusUrl: submission.status_url,
    responseUrl: submission.response_url
  };
}

export function getFalGenerationStatus(statusUrl) {
  return falRequest(statusUrl);
}

export function getFalGenerationResult(responseUrl) {
  return falRequest(responseUrl);
}
