import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import pg from 'pg';
import connectPgSimple from 'connect-pg-simple';
import dotenv from 'dotenv';

dotenv.config();

const PgSession = connectPgSimple(session);

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false
});

app.set('trust proxy', 1);

app.use(
  session({
    store: new PgSession({
      pool: pgPool,
      tableName: process.env.SESSION_TABLE || 'session',
      createTableIfMissing: true
    }),
    name: process.env.SESSION_COOKIE_NAME || 'pinpin.sid',
    secret: process.env.SESSION_SECRET || 'dev_session_secret_change_me',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  })
);

// Routes
import authRouter from './routes/auth.js';
import protectedRouter from './routes/protected.js';
app.use('/api/auth', authRouter);

// Public/protected split for future expansion.
// For now, just mount protected placeholder routes.
app.use('/api', protectedRouter);

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

/**
 * Static frontend hosting (client-side router fallback)
 * Serves index.html, script.js, styles.css, and common static dirs from repo root.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// repo root = /server/src -> /server -> /repo root
const repoRoot = path.resolve(__dirname, '../..');

// Serve static assets from repo root (index.html, script.js, styles.css, and any folders like /assets, /images, /fonts)
app.use(express.static(repoRoot));

// Explicit route for the homepage (avoid relying solely on wildcard handlers)
app.get('/', (req, res) => {
  res.sendFile(path.join(repoRoot, 'index.html'));
});

// Client-side routing fallback: return index.html for non-API routes
app.get(/.*/, (req, res, next) => {
  if (req.path === '/api/health') return next();
  if (req.path.startsWith('/api/')) return next();
  if (req.path.startsWith('/api')) return next();
  return res.sendFile(path.join(repoRoot, 'index.html'));
});


// Helpful one-time startup log for verification (debugging static paths)
// eslint-disable-next-line no-console
import fs from 'node:fs';

const indexExists = fs.existsSync(path.join(repoRoot, 'index.html'));
const scriptExists = fs.existsSync(path.join(repoRoot, 'script.js'));
const stylesExists = fs.existsSync(path.join(repoRoot, 'styles.css'));

console.log('\n----------------------------------------');
console.log('Express startup diagnostics\n');
console.log('__dirname:\n', __dirname, '\n');
console.log('repoRoot:\n', repoRoot, '\n');
console.log('index.html:', indexExists ? '✓ FOUND' : '✗ MISSING');
console.log('script.js:', scriptExists ? '✓ FOUND' : '✗ MISSING');
console.log('styles.css:', stylesExists ? '✓ FOUND' : '✗ MISSING');
console.log('----------------------------------------\n');

export { app, pgPool };
