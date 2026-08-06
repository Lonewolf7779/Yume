import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import crypto from 'node:crypto';

import { app, pgPool } from '../src/app.js';

class CookieJar {
  constructor() {
    this.cookies = new Map();
  }

  update(setCookieHeaders) {
    for (const header of setCookieHeaders) {
      const firstPart = header.split(';')[0]?.trim();
      const separator = firstPart?.indexOf('=');
      if (separator === undefined || separator < 1) continue;
      this.cookies.set(firstPart.slice(0, separator), firstPart.slice(separator + 1));
    }
  }

  header() {
    return [...this.cookies.entries()].map(([name, value]) => `${name}=${value}`).join('; ');
  }

  clear() {
    this.cookies.clear();
  }
}

async function requestJSON(jar, url, options = {}) {
  const headers = new Headers(options.headers || {});
  const cookie = jar.header();
  if (cookie) headers.set('cookie', cookie);

  const response = await fetch(url, { ...options, headers });
  const setCookies = response.headers.getSetCookie?.()
    || [response.headers.get('set-cookie')].filter(Boolean);
  jar.update(setCookies);

  const contentType = response.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  return { response, body };
}

async function listen(server) {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('Unable to determine test server port');
  return `http://127.0.0.1:${address.port}`;
}

async function close(server) {
  await new Promise((resolve, reject) => server.close((err) => (err ? reject(err) : resolve())));
}

async function applySchema() {
  const schema = await fs.readFile(new URL('../db/schema.sql', import.meta.url), 'utf8');
  await pgPool.query(schema);
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required. Copy server/.env.example to server/.env before testing.');
  }

  await pgPool.query('SELECT 1');
  await applySchema();

  const server = http.createServer(app);
  const baseUrl = await listen(server);
  const runId = crypto.randomBytes(8).toString('hex');
  const user = {
    username: `test_${runId}`,
    email: `test_${runId}@yume.local`,
    password: 'YumeTestPass!123'
  };

  try {
    const jar = new CookieJar();

    const health = await requestJSON(jar, `${baseUrl}/api/health`);
    assert.equal(health.response.status, 200);
    assert.equal(health.body.ok, true);

    const register = await requestJSON(jar, `${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...user, role: 'admin' })
    });
    assert.equal(register.response.status, 201);
    assert.equal(register.body.user.role, 'user', 'clients must not self-assign elevated roles');

    const me = await requestJSON(jar, `${baseUrl}/api/auth/me`);
    assert.equal(me.response.status, 200);
    assert.equal(me.body.user.email, user.email);

    const protectedRoute = await requestJSON(jar, `${baseUrl}/api/auth-protected`);
    assert.equal(protectedRoute.response.status, 200);

    const duplicate = await requestJSON(new CookieJar(), `${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    });
    assert.equal(duplicate.response.status, 409);

    const invalidRegistration = await requestJSON(new CookieJar(), `${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ username: 'x', email: 'not-an-email', password: 'short' })
    });
    assert.equal(invalidRegistration.response.status, 400);

    const logout = await requestJSON(jar, `${baseUrl}/api/auth/logout`, { method: 'POST' });
    assert.equal(logout.response.status, 200);

    jar.clear();
    const unauthenticatedMe = await requestJSON(jar, `${baseUrl}/api/auth/me`);
    assert.equal(unauthenticatedMe.response.status, 401);

    const loginJar = new CookieJar();
    const login = await requestJSON(loginJar, `${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: user.email.toUpperCase(), password: user.password })
    });
    assert.equal(login.response.status, 200);

    const generationList = await requestJSON(loginJar, `${baseUrl}/api/generations`);
    assert.equal(generationList.response.status, 200);
    assert.deepEqual(generationList.body.generations, []);

    const unconfiguredGeneration = await requestJSON(loginJar, `${baseUrl}/api/generations`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ prompt: 'A quiet moonlit garden', imageSize: 'portrait_4_3' })
    });
    assert.equal(unconfiguredGeneration.response.status, 503);
    assert.match(unconfiguredGeneration.body.error, /not configured/i);

    const nonAdminOverview = await requestJSON(loginJar, `${baseUrl}/api/admin/overview`);
    assert.equal(nonAdminOverview.response.status, 403);

    const member = {
      username: `member_${runId}`,
      email: `member_${runId}@yume.local`,
      password: 'YumeTestPass!123'
    };
    const memberRegistration = await requestJSON(new CookieJar(), `${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(member)
    });
    assert.equal(memberRegistration.response.status, 201);

    await pgPool.query('UPDATE users SET role = $1 WHERE id = $2', ['admin', register.body.user.id]);

    const adminJar = new CookieJar();
    const adminLogin = await requestJSON(adminJar, `${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: user.email, password: user.password })
    });
    assert.equal(adminLogin.response.status, 200);
    assert.equal(adminLogin.body.user.role, 'admin');

    const adminOverview = await requestJSON(adminJar, `${baseUrl}/api/admin/overview`);
    assert.equal(adminOverview.response.status, 200);
    assert.equal(adminOverview.body.metrics.totalUsers >= 2, true);

    const adminUsers = await requestJSON(adminJar, `${baseUrl}/api/admin/users`);
    assert.equal(adminUsers.response.status, 200);
    const memberRecord = adminUsers.body.users.find((candidate) => candidate.email === member.email);
    assert.ok(memberRecord);

    const roleUpdate = await requestJSON(adminJar, `${baseUrl}/api/admin/users/${memberRecord.id}/role`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ role: 'moderator' })
    });
    assert.equal(roleUpdate.response.status, 200);
    assert.equal(roleUpdate.body.user.role, 'moderator');

    const overviewWithAudit = await requestJSON(adminJar, `${baseUrl}/api/admin/overview`);
    assert.equal(overviewWithAudit.response.status, 200);
    assert.equal(overviewWithAudit.body.recentActivity.some((entry) => entry.action === 'user.role_updated'), true);

    const wrongPassword = await requestJSON(new CookieJar(), `${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: user.email, password: 'wrong-password' })
    });
    assert.equal(wrongPassword.response.status, 401);

    const protectedStub = await requestJSON(loginJar, `${baseUrl}/api/pins/1/like`, {
      method: 'POST'
    });
    assert.equal(protectedStub.response.status, 501);

    console.log('Auth foundation checks passed.');
  } finally {
    await close(server);
    await pgPool.end();
  }
}

main().catch((err) => {
  console.error('Auth foundation checks failed:', err);
  process.exitCode = 1;
});
