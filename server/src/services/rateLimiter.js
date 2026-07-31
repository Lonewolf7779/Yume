let rateLimit = null;
try {
  const rateLimitModule = await import('express-rate-limit');
  rateLimit = rateLimitModule.default || rateLimitModule;
} catch {
  console.warn('NOTICE [RATE_LIMITER]: express-rate-limit package not installed locally; using pass-through middleware.');
}

const MAX_DAILY_UPLOADS = Number(process.env.MAX_DAILY_UPLOADS_PER_USER || 20);
const MAX_DAILY_GENERATIONS = Number(process.env.MAX_DAILY_GENERATIONS_PER_USER || 30);

const passThroughMiddleware = (req, res, next) => next();

/**
 * IP-based rate limiter for photo uploads (15 requests per 15 mins per IP)
 */
export const uploadIpRateLimiter = rateLimit
  ? rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 15,
      standardHeaders: true,
      legacyHeaders: false,
      message: { error: 'Too many upload requests from this IP address. Please try again later.' }
    })
  : passThroughMiddleware;

/**
 * IP-based rate limiter for generation requests (20 requests per 15 mins per IP)
 */
export const generationIpRateLimiter = rateLimit
  ? rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 20,
      standardHeaders: true,
      legacyHeaders: false,
      message: { error: 'Too many generation requests from this IP address. Please try again later.' }
    })
  : passThroughMiddleware;

/**
 * DB check for daily user upload quota
 */
export async function checkDailyUploadQuota(pgPool, userId) {
  const result = await pgPool.query(
    `SELECT COUNT(*)::int AS count 
     FROM user_uploads 
     WHERE user_id = $1 AND created_at >= NOW() - INTERVAL '24 hours'`,
    [userId]
  );
  const count = result.rows[0]?.count || 0;
  if (count >= MAX_DAILY_UPLOADS) {
    throw new Error(`Daily upload limit of ${MAX_DAILY_UPLOADS} photos reached. Please try again tomorrow.`);
  }
  return { remaining: MAX_DAILY_UPLOADS - count - 1 };
}

/**
 * DB check for daily user generation quota
 */
export async function checkDailyGenerationQuota(pgPool, userId) {
  const result = await pgPool.query(
    `SELECT COUNT(*)::int AS count 
     FROM generations 
     WHERE user_id = $1 AND created_at >= NOW() - INTERVAL '24 hours'`,
    [userId]
  );
  const count = result.rows[0]?.count || 0;
  if (count >= MAX_DAILY_GENERATIONS) {
    throw new Error(`Daily generation limit of ${MAX_DAILY_GENERATIONS} creations reached. Please try again tomorrow.`);
  }
  return { remaining: MAX_DAILY_GENERATIONS - count - 1 };
}
