import { runUploadTests } from './uploads.test-runner.mjs';
import { pgPool } from '../src/app.js';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'postgresql://yume:yume_test_password@localhost:5432/yume_test';
}
if (!process.env.SESSION_SECRET) {
  process.env.SESSION_SECRET = 'github-actions-test-secret-not-for-production';
}

async function runAll() {
  console.log('=== Running Yume Auth & Admin Integration Tests ===');
  const authRunnerPath = path.join(__dirname, 'auth.test-runner.mjs');
  const nodeBinary = process.execPath;
  execSync(`"${nodeBinary}" "${authRunnerPath}"`, {
    stdio: 'inherit',
    env: { ...process.env }
  });

  console.log('\n=== Running Yume Private Media Storage & Photo Upload Integration Tests ===');
  await runUploadTests();
  await pgPool.end();
  console.log('\nAll Yume server tests completed successfully!');
}

runAll().catch((err) => {
  console.error('Test suite execution failed:', err);
  pgPool.end();
  process.exit(1);
});
