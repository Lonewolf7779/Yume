import { Router } from 'express';
import bcrypt from 'bcrypt';
import { pgPool } from '../app.js';

const router = Router();

function getRoleDefault() {
  return 'user';
}

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, role } = req.body || {};

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const userRole = role && ['user', 'moderator', 'admin'].includes(role) ? role : getRoleDefault();

    const result = await pgPool.query(
      `
      INSERT INTO users (username, email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id, username, email, role, created_at
      `,
      [username, email, passwordHash, userRole]
    );

    // Create session
    req.session.userId = result.rows[0].id;

    res.status(201).json({
      user: {
        id: result.rows[0].id,
        username: result.rows[0].username,
        email: result.rows[0].email,
        role: result.rows[0].role
      }
    });
  } catch (err) {
    // Unique constraint violations / etc
    return res.status(409).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const result = await pgPool.query(
      `SELECT id, username, email, password_hash, role, created_at FROM users WHERE email = $1 LIMIT 1`,
      [email]
    );

    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    req.session.userId = user.id;

    res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    return res.status(500).json({ error: 'Login failed' });
  }
});

router.post('/logout', async (req, res) => {
  try {
    req.session.destroy(() => {
      res.json({ ok: true });
    });
  } catch {
    res.status(500).json({ error: 'Logout failed' });
  }
});

router.get('/me', async (req, res) => {
  try {
    const userId = req.session.userId;
    if (!userId) return res.status(401).json({ error: 'Not authenticated' });

    const result = await pgPool.query(
      `SELECT id, username, email, role, created_at FROM users WHERE id = $1 LIMIT 1`,
      [userId]
    );

    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: 'Not authenticated' });

    res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch session user' });
  }
});

export default router;
