import { Router } from 'express';
import bcrypt from 'bcrypt';
import { pgPool } from '../app.js';
import { effectiveRole } from '../services/roles.js';

const router = Router();
const USER_ROLE = 'user';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_PATTERN = /^[A-Za-z0-9_]{3,64}$/;

function publicUser(row) {
  return {
    id: row.id,
    username: row.username,
    email: row.email,
    role: effectiveRole(row)
  };
}

function validateRegistration({ username, email, password }) {
  if (!USERNAME_PATTERN.test(username)) {
    return 'Username must be 3–64 characters and use only letters, numbers, or underscores';
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 255) {
    return 'Enter a valid email address';
  }

  if (password.length < 8 || password.length > 128) {
    return 'Password must be between 8 and 128 characters';
  }

  return null;
}

function regenerateSession(req) {
  return new Promise((resolve, reject) => {
    req.session.regenerate((err) => (err ? reject(err) : resolve()));
  });
}

async function establishSession(req, user) {
  await regenerateSession(req);
  req.session.userId = user.id;
  req.session.user = user;
}

router.post('/register', async (req, res) => {
  const rawUsername = typeof req.body?.username === 'string' ? req.body.username : '';
  const rawEmail = typeof req.body?.email === 'string' ? req.body.email : '';
  const password = typeof req.body?.password === 'string' ? req.body.password : '';

  const username = rawUsername.trim();
  const email = rawEmail.trim().toLowerCase();
  const validationError = validateRegistration({ username, email, password });
  if (validationError) return res.status(400).json({ error: validationError });

  try {
    const passwordHash = await bcrypt.hash(password, 12);
    const result = await pgPool.query(
      `
        INSERT INTO users (username, email, password_hash, role)
        VALUES ($1, $2, $3, $4)
        RETURNING id, username, email, role, created_at
      `,
      [username, email, passwordHash, USER_ROLE]
    );

    const user = publicUser(result.rows[0]);
    await establishSession(req, user);
    return res.status(201).json({ user });
  } catch (err) {
    if (err?.code === '23505') {
      return res.status(409).json({ error: 'Username or email is already in use' });
    }

    console.error('Registration failed', err);
    return res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const rawEmail = typeof req.body?.email === 'string' ? req.body.email : '';
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  const email = rawEmail.trim().toLowerCase();

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const result = await pgPool.query(
      'SELECT id, username, email, password_hash, role FROM users WHERE email = $1 LIMIT 1',
      [email]
    );

    const account = result.rows[0];
    if (!account || !(await bcrypt.compare(password, account.password_hash))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = publicUser(account);
    await establishSession(req, user);
    return res.json({ user });
  } catch (err) {
    console.error('Login failed', err);
    return res.status(500).json({ error: 'Login failed' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout failed', err);
      return res.status(500).json({ error: 'Logout failed' });
    }

    res.clearCookie(process.env.SESSION_COOKIE_NAME || 'yume.sid');
    return res.json({ ok: true });
  });
});

router.get('/me', async (req, res) => {
  const userId = req.session?.userId;
  if (!userId) return res.status(401).json({ error: 'Not authenticated' });

  try {
    const result = await pgPool.query(
      'SELECT id, username, email, role FROM users WHERE id = $1 LIMIT 1',
      [userId]
    );

    if (!result.rows[0]) {
      req.session.destroy(() => {});
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const user = publicUser(result.rows[0]);
    req.session.user = user;
    return res.json({ user });
  } catch (err) {
    console.error('Failed to fetch session user', err);
    return res.status(500).json({ error: 'Failed to fetch session user' });
  }
});

export default router;
