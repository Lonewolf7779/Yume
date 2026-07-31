import { Router } from 'express';
import { pgPool } from '../app.js';
import { requireRole } from '../middleware/auth.js';
import { effectiveRole, isConfiguredAdminEmail } from '../services/roles.js';

const router = Router();
const MANAGEABLE_ROLES = new Set(['user', 'moderator']);

router.use(requireRole(['admin']));

function readLimit(value, fallback = 24, maximum = 100) {
  const limit = Number(value);
  return Number.isSafeInteger(limit) ? Math.min(Math.max(limit, 1), maximum) : fallback;
}

function numberValue(value) {
  return Number(value || 0);
}

function toAdminUser(row) {
  return {
    id: row.id,
    username: row.username,
    email: row.email,
    role: effectiveRole(row),
    storedRole: row.role,
    generatedCount: numberValue(row.generated_count),
    createdAt: row.created_at,
    isConfiguredAdmin: isConfiguredAdminEmail(row.email)
  };
}

function toAdminGeneration(row) {
  return {
    id: row.id,
    status: row.status,
    prompt: row.prompt,
    imageSize: row.image_size,
    model: row.model,
    error: row.error_message,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    user: {
      id: row.user_id,
      username: row.username,
      email: row.email
    }
  };
}

router.get('/overview', async (req, res) => {
  try {
    const [metricsResult, recentGenerationsResult, recentAuditResult] = await Promise.all([
      pgPool.query(`
        SELECT
          (SELECT COUNT(*) FROM users) AS total_users,
          (SELECT COUNT(*) FROM users WHERE created_at >= NOW() - INTERVAL '7 days') AS new_users_7d,
          (SELECT COUNT(DISTINCT user_id) FROM generations WHERE created_at >= NOW() - INTERVAL '24 hours') AS active_creators_24h,
          (SELECT COUNT(*) FROM generations) AS total_generations,
          (SELECT COUNT(*) FROM generations WHERE created_at >= CURRENT_DATE) AS generations_today,
          (SELECT COUNT(*) FROM generations WHERE status = 'completed') AS completed_generations,
          (SELECT COUNT(*) FROM generations WHERE status = 'failed') AS failed_generations,
          (SELECT COUNT(*) FROM generations WHERE status IN ('queued', 'processing')) AS processing_generations
      `),
      pgPool.query(`
        SELECT
          g.id, g.status, g.prompt, g.image_size, g.model, g.error_message, g.created_at, g.updated_at,
          u.id AS user_id, u.username, u.email
        FROM generations g
        JOIN users u ON u.id = g.user_id
        ORDER BY g.created_at DESC
        LIMIT 12
      `),
      pgPool.query(`
        SELECT
          l.id, l.action, l.target_type, l.target_id, l.metadata, l.created_at,
          actor.username AS actor_username, actor.email AS actor_email,
          target.username AS target_username, target.email AS target_email
        FROM admin_audit_logs l
        LEFT JOIN users actor ON actor.id = l.actor_user_id
        LEFT JOIN users target ON target.id = l.target_user_id
        ORDER BY l.created_at DESC
        LIMIT 8
      `)
    ]);

    const metrics = metricsResult.rows[0];
    return res.json({
      metrics: {
        totalUsers: numberValue(metrics.total_users),
        newUsers7d: numberValue(metrics.new_users_7d),
        activeCreators24h: numberValue(metrics.active_creators_24h),
        totalGenerations: numberValue(metrics.total_generations),
        generationsToday: numberValue(metrics.generations_today),
        completedGenerations: numberValue(metrics.completed_generations),
        failedGenerations: numberValue(metrics.failed_generations),
        processingGenerations: numberValue(metrics.processing_generations)
      },
      latestGenerations: recentGenerationsResult.rows.map(toAdminGeneration),
      recentActivity: recentAuditResult.rows.map((row) => ({
        id: row.id,
        action: row.action,
        targetType: row.target_type,
        targetId: row.target_id,
        metadata: row.metadata || {},
        createdAt: row.created_at,
        actor: row.actor_username ? { username: row.actor_username, email: row.actor_email } : null,
        target: row.target_username ? { username: row.target_username, email: row.target_email } : null
      }))
    });
  } catch (error) {
    console.error('Failed to load admin overview', error);
    return res.status(500).json({ error: 'Unable to load admin overview' });
  }
});

router.get('/users', async (req, res) => {
  const limit = readLimit(req.query.limit, 30, 100);

  try {
    const result = await pgPool.query(
      `
        SELECT
          u.id, u.username, u.email, u.role, u.created_at,
          COUNT(g.id) AS generated_count
        FROM users u
        LEFT JOIN generations g ON g.user_id = u.id
        GROUP BY u.id
        ORDER BY u.created_at DESC
        LIMIT $1
      `,
      [limit]
    );
    return res.json({ users: result.rows.map(toAdminUser) });
  } catch (error) {
    console.error('Failed to load admin users', error);
    return res.status(500).json({ error: 'Unable to load users' });
  }
});

router.get('/generations', async (req, res) => {
  const limit = readLimit(req.query.limit, 30, 100);
  const status = typeof req.query.status === 'string' ? req.query.status : '';
  const supportedStatuses = new Set(['queued', 'processing', 'completed', 'failed']);

  if (status && !supportedStatuses.has(status)) {
    return res.status(400).json({ error: 'Invalid generation status filter' });
  }

  try {
    const result = await pgPool.query(
      `
        SELECT
          g.id, g.status, g.prompt, g.image_size, g.model, g.error_message, g.created_at, g.updated_at,
          u.id AS user_id, u.username, u.email
        FROM generations g
        JOIN users u ON u.id = g.user_id
        WHERE ($1 = '' OR g.status = $1)
        ORDER BY g.created_at DESC
        LIMIT $2
      `,
      [status, limit]
    );
    return res.json({ generations: result.rows.map(toAdminGeneration) });
  } catch (error) {
    console.error('Failed to load admin generations', error);
    return res.status(500).json({ error: 'Unable to load generations' });
  }
});

router.patch('/users/:userId/role', async (req, res) => {
  const userId = Number(req.params.userId);
  const role = typeof req.body?.role === 'string' ? req.body.role : '';

  if (!Number.isSafeInteger(userId) || userId < 1) {
    return res.status(400).json({ error: 'Invalid user id' });
  }

  if (!MANAGEABLE_ROLES.has(role)) {
    return res.status(400).json({ error: 'Role must be user or moderator' });
  }

  if (userId === req.session.userId) {
    return res.status(400).json({ error: 'You cannot change your own role here' });
  }

  try {
    const targetResult = await pgPool.query(
      'SELECT id, username, email, role FROM users WHERE id = $1 LIMIT 1',
      [userId]
    );
    const target = targetResult.rows[0];
    if (!target) return res.status(404).json({ error: 'User not found' });

    if (isConfiguredAdminEmail(target.email)) {
      return res.status(409).json({ error: 'Configured admins are managed through ADMIN_EMAILS' });
    }

    const result = await pgPool.query(
      `
        UPDATE users
        SET role = $1
        WHERE id = $2
        RETURNING id, username, email, role, created_at
      `,
      [role, userId]
    );

    await pgPool.query(
      `
        INSERT INTO admin_audit_logs (actor_user_id, action, target_type, target_id, target_user_id, metadata)
        VALUES ($1, 'user.role_updated', 'user', $2::bigint, $2::integer, $3::jsonb)
      `,
      [
        req.session.userId,
        userId,
        JSON.stringify({
          previousRole: target.role,
          nextRole: role
        })
      ]
    );

    return res.json({ user: toAdminUser({ ...result.rows[0], generated_count: 0 }) });
  } catch (error) {
    console.error('Failed to update user role', error);
    return res.status(500).json({ error: 'Unable to update user role' });
  }
});

export default router;
