import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import pg from 'pg';
import connectPgSimple from 'connect-pg-simple';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import authRouter from './routes/auth.js';
import protectedRouter from './routes/protected.js';
import generationsRouter from './routes/generations.js';
import adminRouter from './routes/admin.js';
import uploadsRouter from './routes/uploads.js';
import { MemoryPgPool } from './db/memoryFallback.js';

dotenv.config();

if (!process.env.SESSION_SECRET) {
  process.env.SESSION_SECRET = 'yume-local-dev-preview-secret-key-123';
}

const isProduction = process.env.NODE_ENV === 'production';
const PgSession = connectPgSimple(session);
const app = express();

let pgPool;
let sessionStore;

if (process.env.DATABASE_URL) {
  pgPool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false
  });
  sessionStore = new PgSession({
    pool: pgPool,
    tableName: process.env.SESSION_TABLE || 'session',
    createTableIfMissing: true
  });
} else {
  console.warn('NOTICE [DB]: DATABASE_URL not set; using MemoryPgPool fallback for local app preview.');
  pgPool = new MemoryPgPool();
  sessionStore = new session.MemoryStore();
}

// Fallback pool query error handler for local dev when Postgres daemon is not active
const originalQuery = pgPool.query.bind(pgPool);
let fallbackMemoryPool = null;
pgPool.query = async function (text, params) {
  try {
    return await originalQuery(text, params);
  } catch (err) {
    if (err.code === 'ECONNREFUSED' || err.message?.includes('ECONNREFUSED')) {
      if (!fallbackMemoryPool) {
        console.warn('NOTICE [DB]: Local PostgreSQL connection refused; falling back to in-memory store for local browser preview.');
        fallbackMemoryPool = new MemoryPgPool();
      }
      return await fallbackMemoryPool.query(text, params);
    }
    throw err;
  }
};

if (isProduction) {
  app.set('trust proxy', Number(process.env.TRUST_PROXY || 1));
}

app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

app.use(
  session({
    store: sessionStore,
    name: process.env.SESSION_COOKIE_NAME || 'yume.sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: isProduction,
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.use('/api/auth', authRouter);
app.use('/api', protectedRouter);
app.use('/api/generations', generationsRouter);
app.use('/api/admin', adminRouter);
app.use('/api/uploads', uploadsRouter);

app.get('/api/health', async (req, res) => {
  try {
    await pgPool.query('SELECT 1');
    res.json({ ok: true, database: 'connected' });
  } catch {
    res.status(503).json({ ok: false, database: 'unavailable' });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

app.use(express.static(repoRoot));

app.get('/', (req, res) => {
  res.sendFile(path.join(repoRoot, 'index.html'));
});

app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  return res.sendFile(path.join(repoRoot, 'index.html'));
});

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  console.error('Unhandled request error', err);
  return res.status(500).json({ error: 'Internal server error' });
});

export { app, pgPool };
