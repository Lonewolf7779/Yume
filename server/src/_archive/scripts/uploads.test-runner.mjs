import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import crypto from 'node:crypto';

import { app, pgPool } from '../src/app.js';

let sharp = null;
try {
  const sharpModule = await import('sharp');
  sharp = sharpModule.default || sharpModule;
} catch {}

class CookieJar {
  constructor() {
    this.cookies = new Map();
  }

  update(setCookieHeaders) {
    for (const header of setCookieHeaders || []) {
      const firstPart = header.split(';')[0]?.trim();
      const separator = firstPart?.indexOf('=');
      if (separator === undefined || separator < 1) continue;
      this.cookies.set(firstPart.slice(0, separator), firstPart.slice(separator + 1));
    }
  }

  header() {
    return [...this.cookies.entries()].map(([name, value]) => `${name}=${value}`).join('; ');
  }
}

async function requestJSON(jar, url, options = {}) {
  const headers = new Headers(options.headers || {});
  const cookie = jar.header();
  if (cookie) headers.set('cookie', cookie);

  const response = await fetch(url, { ...options, headers });
  const setCookies = response.headers.getSetCookie?.() || [response.headers.get('set-cookie')].filter(Boolean);
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

// Generate a valid tiny PNG image buffer for test uploads
async function createTestImageBuffer() {
  if (sharp) {
    return await sharp({
      create: {
        width: 100,
        height: 100,
        channels: 4,
        background: { r: 120, g: 80, b: 200, alpha: 1 }
      }
    })
      .png()
      .toBuffer();
  }

  // 1x1 valid red PNG pixel buffer fallback
  return Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    'base64'
  );
}

export async function runUploadTests() {
  await pgPool.query('SELECT 1');
  await applySchema();

  const server = http.createServer(app);
  const baseUrl = await listen(server);
  const runId = crypto.randomBytes(8).toString('hex');

  const user1 = {
    username: `uploader1_${runId}`,
    email: `uploader1_${runId}@yume.local`,
    password: 'YumeUploadPass!123'
  };

  const user2 = {
    username: `uploader2_${runId}`,
    email: `uploader2_${runId}@yume.local`,
    password: 'YumeUploadPass!123'
  };

  try {
    const jar1 = new CookieJar();
    const jar2 = new CookieJar();

    // Register User 1
    const reg1 = await requestJSON(jar1, `${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user1)
    });
    assert.equal(reg1.response.status, 201);

    // Register User 2
    const reg2 = await requestJSON(jar2, `${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user2)
    });
    assert.equal(reg2.response.status, 201);

    const testImgBuffer = await createTestImageBuffer();

    // Test 1: Uploading without explicit consent MUST fail (HTTP 400)
    const boundary = '----WebKitFormBoundary' + runId;
    const bodyPartsNoConsent = [
      `--${boundary}\r\nContent-Disposition: form-data; name="photo"; filename="test_photo.png"\r\nContent-Type: image/png\r\n\r\n`,
      testImgBuffer,
      `\r\n--${boundary}--\r\n`
    ];

    const payloadNoConsent = Buffer.concat([
      Buffer.from(bodyPartsNoConsent[0]),
      bodyPartsNoConsent[1],
      Buffer.from(bodyPartsNoConsent[2])
    ]);

    const resNoConsent = await fetch(`${baseUrl}/api/uploads`, {
      method: 'POST',
      headers: {
        'content-type': `multipart/form-data; boundary=${boundary}`,
        cookie: jar1.header()
      },
      body: payloadNoConsent
    });
    const bodyNoConsent = await resNoConsent.json();
    assert.equal(resNoConsent.status, 400, 'Upload without consent must return 400 Bad Request');
    assert.match(bodyNoConsent.error, /consent is required/i);

    // Test 2: Uploading WITH explicit consent (consent=true) MUST succeed (HTTP 201)
    const bodyPartsConsent = [
      `--${boundary}\r\nContent-Disposition: form-data; name="consent"\r\n\r\ntrue\r\n`,
      `--${boundary}\r\nContent-Disposition: form-data; name="photo"; filename="my_personal_portrait.png"\r\nContent-Type: image/png\r\n\r\n`,
      testImgBuffer,
      `\r\n--${boundary}--\r\n`
    ];

    const payloadConsent = Buffer.concat([
      Buffer.from(bodyPartsConsent[0]),
      Buffer.from(bodyPartsConsent[1]),
      bodyPartsConsent[2],
      Buffer.from(bodyPartsConsent[3])
    ]);

    const resConsent = await fetch(`${baseUrl}/api/uploads`, {
      method: 'POST',
      headers: {
        'content-type': `multipart/form-data; boundary=${boundary}`,
        cookie: jar1.header()
      },
      body: payloadConsent
    });
    const bodyConsent = await resConsent.json();
    assert.equal(resConsent.status, 201, 'Upload with consent must return 201 Created');
    assert.ok(bodyConsent.upload.id);
    assert.equal(bodyConsent.upload.mime_type, 'image/webp');
    assert.ok(bodyConsent.upload.notice.includes('stored privately'));

    const uploadId = bodyConsent.upload.id;

    // Test 3: List user uploads
    const listUploads = await requestJSON(jar1, `${baseUrl}/api/uploads`);
    assert.equal(listUploads.response.status, 200);
    assert.equal(listUploads.body.uploads.length, 1);
    assert.equal(listUploads.body.uploads[0].id, uploadId);

    // Test 4: Private view authorization (Owner gets 200 OK, User2 gets 403 Forbidden)
    const viewOwner = await fetch(`${baseUrl}/api/uploads/${uploadId}/view`, {
      headers: { cookie: jar1.header() }
    });
    assert.equal(viewOwner.status, 200, 'Owner can access private view endpoint');

    const viewOtherUser = await fetch(`${baseUrl}/api/uploads/${uploadId}/view`, {
      headers: { cookie: jar2.header() }
    });
    assert.equal(viewOtherUser.status, 403, 'Non-owner receives 403 Forbidden on private photo');

    // Test 5: Photo transformation route with source upload ID
    const transformReq = await requestJSON(jar1, `${baseUrl}/api/generations/transform`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        sourceUploadId: uploadId,
        prompt: 'Transform into a celestial anime character with glowing wings',
        imageSize: 'portrait_4_3'
      })
    });
    // If FAL_KEY is not configured, expect 503 Service Unavailable with message
    if (!process.env.FAL_KEY) {
      assert.equal(transformReq.response.status, 503);
      assert.match(transformReq.body.error, /not configured/i);
    } else {
      assert.equal(transformReq.response.status, 202);
    }

    // Test 6: Delete upload (Owner can delete, user 2 cannot)
    const deleteOther = await requestJSON(jar2, `${baseUrl}/api/uploads/${uploadId}`, {
      method: 'DELETE'
    });
    assert.equal(deleteOther.response.status, 403);

    const deleteOwner = await requestJSON(jar1, `${baseUrl}/api/uploads/${uploadId}`, {
      method: 'DELETE'
    });
    assert.equal(deleteOwner.response.status, 200);
    assert.equal(deleteOwner.body.ok, true);

    // Confirm deletion
    const viewAfterDelete = await fetch(`${baseUrl}/api/uploads/${uploadId}/view`, {
      headers: { cookie: jar1.header() }
    });
    assert.equal(viewAfterDelete.status, 404);

    console.log('Media storage & photo upload tests passed cleanly.');
  } finally {
    await close(server);
  }
}

if (process.argv[1]?.endsWith('uploads.test-runner.mjs')) {
  if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = 'postgresql://yume:yume_test_password@localhost:5432/yume_test';
  }
  if (!process.env.SESSION_SECRET) {
    process.env.SESSION_SECRET = 'test-session-secret-local-dev';
  }
  runUploadTests()
    .then(() => {
      pgPool.end();
    })
    .catch((err) => {
      console.error('Upload tests failed:', err);
      pgPool.end();
      process.exitCode = 1;
    });
}
