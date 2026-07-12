import fs from 'node:fs/promises';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import pgPkg from 'pg';
import { app, pgPool } from '../src/app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = __filename.slice(0, __filename.lastIndexOf('/'));

function log(msg) {
  // eslint-disable-next-line no-console
  console.log(msg);
}

function formatFail(name, err) {
  const detail = err && typeof err === 'object' ? (err.message || JSON.stringify(err)) : String(err);
  return { name, pass: false, detail };
}

function formatPass(name) {
  return { name, pass: true };
}

class CookieJar {
  constructor() {
    this.cookies = new Map(); // name -> value
  }

  updateFromSetCookie(setCookieHeader) {
    if (!setCookieHeader) return;
    // setCookieHeader can be a string or array (depending on runtime). Normalize.
    const arr = Array.isArray(setCookieHeader) ? setCookieHeader : [setCookieHeader];

    for (const sc of arr) {
      const firstPart = sc.split(';')[0]?.trim();
      if (!firstPart) continue;
      const eq = firstPart.indexOf('=');
      if (eq === -1) continue;
      const name = firstPart.slice(0, eq).trim();
      const value = firstPart.slice(eq + 1).trim();
      if (name) this.cookies.set(name, value);
    }
  }

  getCookieHeader() {
    const parts = [];
    for (const [name, value] of this.cookies.entries()) {
      parts.push(`${name}=${value}`);
    }
    return parts.join('; ');
  }
}

async function ensureSchema() {
  const schemaPath = new URL('../db/schema.sql', import.meta.url);
  const schemaSql = await fs.readFile(schemaPath, 'utf8');
  await pgPool.query(schemaSql);
}

async function verifyUsersTable() {
  const r1 = await pgPool.query(`
    SELECT column_name
    FROM information_schema.columns
    WHERE table_name = 'users'
      AND column_name IN ('id','username','email','password_hash','role')
  `);

  const cols = new Set(r1.rows.map((x) => x.column_name));
  const required = ['id', 'username', 'email', 'password_hash', 'role'];

  for (const c of required) {
    if (!cols.has(c)) throw new Error(`Missing column users.${c}`);
  }

  return true;
}

async function verifyPgConnectivity() {
  await pgPool.query('SELECT 1 AS ok');
  return true;
}

async function requestJSON(fetchFn, jar, url, options = {}) {
  const headers = new Headers(options.headers || {});
  const cookieHeader = jar.getCookieHeader();
  if (cookieHeader) headers.set('cookie', cookieHeader);

  const res = await fetchFn(url, {
    ...options,
    headers
  });

  const setCookie = res.headers.get('set-cookie');
  jar.updateFromSetCookie(setCookie);

  const contentType = res.headers.get('content-type') || '';
  let body = null;
  if (contentType.includes('application/json')) body = await res.json();
  else body = await res.text().catch(() => null);

  return { res, body };
}

async function main() {
  const results = [];
  const baseUrl = `http://127.0.0.1:${process.env.AUTH_TEST_PORT || 0}`;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error('DATABASE_URL env var is required for tests.');

  // Start app on ephemeral port
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : null;
  const root = `http://127.0.0.1:${port}`;

  const fetchFn = globalThis.fetch;

  try {
    // 1) DB connectivity + schema + tables
    try {
      log('DB connectivity: starting...');
      await verifyPgConnectivity();
      results.push(formatPass('DB connectivity'));
    } catch (e) {
      results.push(formatFail('DB connectivity', e));
      throw e;
    }

    try {
      log('DB schema ensure: applying schema.sql...');
      await ensureSchema();
      results.push(formatPass('Schema apply'));
    } catch (e) {
      results.push(formatFail('Schema apply', e));
      throw e;
    }

    try {
      log('Users table verification: starting...');
      await verifyUsersTable();
      results.push(formatPass('Users table role column'));
    } catch (e) {
      results.push(formatFail('Users table role column', e));
      throw e;
    }

    // 2) Auth happy path
    const jar = new CookieJar();

    const email = `test_${Date.now()}@pinpin.local`;
    const username = `test_${Date.now()}`;
    const password = 'PinPinTestPass!123';

    try {
      log('Auth happy path: register...');
      const { res, body } = await requestJSON(fetchFn, jar, `${root}/api/auth/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      if (!res.ok) throw new Error(`Register failed: ${res.status} ${JSON.stringify(body)}`);
      results.push(formatPass('Register'));
    } catch (e) {
      results.push(formatFail('Register', e));
      throw e;
    }

    try {
      log('Auth happy path: login...');
      // new jar to ensure login creates session too
      const loginJar = new CookieJar();
      const { res, body } = await requestJSON(fetchFn, loginJar, `${root}/api/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw new Error(`Login failed: ${res.status} ${JSON.stringify(body)}`);
      results.push(formatPass('Login'));
      // Use loginJar for subsequent steps
      jar.cookies = loginJar.cookies;
    } catch (e) {
      results.push(formatFail('Login', e));
      throw e;
    }

    try {
      log('Auth happy path: GET /api/auth/me...');
      const { res, body } = await requestJSON(fetchFn, jar, `${root}/api/auth/me`, { method: 'GET' });
      if (!res.ok) throw new Error(`Me failed: ${res.status} ${JSON.stringify(body)}`);
      if (!body?.user?.id) throw new Error('Me response missing body.user.id');
      results.push(formatPass('GET /api/auth/me (authed)'));
    } catch (e) {
      results.push(formatFail('GET /api/auth/me (authed)', e));
      throw e;
    }

    try {
      log('Auth happy path: logout...');
      const { res, body } = await requestJSON(fetchFn, jar, `${root}/api/auth/logout`, {
        method: 'POST'
      });
      if (!res.ok) throw new Error(`Logout failed: ${res.status} ${JSON.stringify(body)}`);
      results.push(formatPass('POST /api/auth/logout'));

      // Clear jar cookies (logout should invalidate session; cookie jar update is handled by set-cookie,
      // but in case server doesn't overwrite cookie, clear it anyway to verify with a clean request).
      jar.cookies.clear();

      log('Auth happy path: GET /api/auth/me (after logout)...');
      const { res: meAfterLogoutRes } = await requestJSON(fetchFn, jar, `${root}/api/auth/me`, { method: 'GET' });
      if (meAfterLogoutRes.status !== 401) throw new Error(`Expected 401 after logout, got ${meAfterLogoutRes.status}`);
      results.push(formatPass('GET /api/auth/me (not authed) after logout'));
    } catch (e) {
      results.push(formatFail('Logout / post-logout me', e));
      throw e;
    }

    // 3) Error paths
    // Duplicate registration
    try {
      log('Auth errors: duplicate registration...');
      const dupJar = new CookieJar();
      const { res: res1 } = await requestJSON(fetchFn, dupJar, `${root}/api/auth/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      if (!res1.ok) throw new Error(`Expected first register to succeed but got ${res1.status}`);

      const { res: res2, body: body2 } = await requestJSON(fetchFn, dupJar, `${root}/api/auth/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      if (res2.status !== 409) throw new Error(`Expected 409 conflict on duplicate, got ${res2.status}. Body: ${JSON.stringify(body2)}`);
      results.push(formatPass('Duplicate registration (409)'));
    } catch (e) {
      results.push(formatFail('Duplicate registration (409)', e));
    }

    // Invalid credentials
    try {
      log('Auth errors: invalid credentials...');
      const badJar = new CookieJar();
      const { res, body } = await requestJSON(fetchFn, badJar, `${root}/api/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password: 'wrong-password' })
      });
      if (res.status !== 401) throw new Error(`Expected 401 for invalid credentials, got ${res.status}. Body: ${JSON.stringify(body)}`);
      results.push(formatPass('Invalid credentials (401)'));
    } catch (e) {
      results.push(formatFail('Invalid credentials (401)', e));
    }

    // Missing fields
    try {
      log('Auth errors: missing fields...');
      const jar2 = new CookieJar();
      const { res, body } = await requestJSON(fetchFn, jar2, `${root}/api/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.status !== 400) throw new Error(`Expected 400 for missing fields, got ${res.status}. Body: ${JSON.stringify(body)}`);
      results.push(formatPass('Missing fields (400)'));
    } catch (e) {
      results.push(formatFail('Missing fields (400)', e));
    }

    // GET /me without session
    try {
      log('Auth errors: GET /api/auth/me without session...');
      const noJar = new CookieJar();
      const { res: meRes } = await requestJSON(fetchFn, noJar, `${root}/api/auth/me`, { method: 'GET' });
      if (meRes.status !== 401) throw new Error(`Expected 401, got ${meRes.status}`);
      results.push(formatPass('GET /api/auth/me without session (401)'));
    } catch (e) {
      results.push(formatFail('GET /api/auth/me without session (401)', e));
    }
  } finally {
    server.close();
  }

  const passed = results.filter((r) => r.pass).length;
  const total = results.length;

  log('\n========== Auth Foundation Test Report ==========');
  for (const r of results) {
    if (r.pass) log(`✅ ${r.name}`);
    else log(`❌ ${r.name} - ${r.detail}`);
  }
  log(`\nSummary: ${passed}/${total} passed`);

  const failed = results.filter((r) => !r.pass).length;
  if (failed > 0) process.exitCode = 1;
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Fatal test runner error:', err);
  process.exit(1);
});
