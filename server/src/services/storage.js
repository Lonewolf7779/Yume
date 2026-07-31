import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCAL_STORAGE_DIR = path.resolve(__dirname, '../../storage/uploads');

const isProduction = process.env.NODE_ENV === 'production';
const storageProvider = (process.env.STORAGE_PROVIDER || 'local').toLowerCase();

if (isProduction && storageProvider === 'local') {
  console.warn(
    'WARNING [STORAGE]: STORAGE_PROVIDER is set to "local" in production environment. ' +
      'Deployed cloud instances usually have ephemeral disks. Configure Cloudflare R2 or S3 (STORAGE_PROVIDER=s3) for production persistence.'
  );
}

let S3Client = null;
let PutObjectCommand = null;
let GetObjectCommand = null;
let DeleteObjectCommand = null;
let getSignedUrl = null;

if (storageProvider === 's3') {
  try {
    const s3Module = await import('@aws-sdk/client-s3');
    const presignerModule = await import('@aws-sdk/s3-request-presigner');
    S3Client = s3Module.S3Client;
    PutObjectCommand = s3Module.PutObjectCommand;
    GetObjectCommand = s3Module.GetObjectCommand;
    DeleteObjectCommand = s3Module.DeleteObjectCommand;
    getSignedUrl = presignerModule.getSignedUrl;
  } catch (err) {
    console.warn('NOTICE [STORAGE]: AWS S3 SDK packages not installed locally.');
  }
}

let s3Client = null;
if (storageProvider === 's3' && S3Client) {
  const endpoint = process.env.STORAGE_ENDPOINT;
  const region = process.env.STORAGE_REGION || 'auto';
  const accessKeyId = process.env.STORAGE_ACCESS_KEY_ID;
  const secretAccessKey = process.env.STORAGE_SECRET_ACCESS_KEY;

  if (!accessKeyId || !secretAccessKey || !process.env.STORAGE_BUCKET) {
    console.error('ERROR [STORAGE]: S3 storage configured but missing required credentials or bucket name.');
  }

  s3Client = new S3Client({
    region,
    endpoint,
    credentials: {
      accessKeyId: accessKeyId || '',
      secretAccessKey: secretAccessKey || ''
    }
  });
}

export async function saveFile(storageKey, buffer, mimeType) {
  if (storageProvider === 's3' && s3Client && PutObjectCommand) {
    const bucket = process.env.STORAGE_BUCKET;
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: storageKey,
      Body: buffer,
      ContentType: mimeType
    });
    await s3Client.send(command);
    return { provider: 's3', key: storageKey };
  }

  // Fallback to local disk storage (dev/CI only)
  await fs.mkdir(LOCAL_STORAGE_DIR, { recursive: true });
  const filePath = path.join(LOCAL_STORAGE_DIR, storageKey);
  await fs.writeFile(filePath, buffer);
  return { provider: 'local', key: storageKey };
}

export async function getFileBuffer(storageKey) {
  if (storageProvider === 's3' && s3Client && GetObjectCommand) {
    const bucket = process.env.STORAGE_BUCKET;
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: storageKey
    });
    const response = await s3Client.send(command);
    const byteArray = await response.Body.transformToByteArray();
    return Buffer.from(byteArray);
  }

  const filePath = path.join(LOCAL_STORAGE_DIR, storageKey);
  return await fs.readFile(filePath);
}

export async function deleteFile(storageKey) {
  if (storageProvider === 's3' && s3Client && DeleteObjectCommand) {
    const bucket = process.env.STORAGE_BUCKET;
    const command = new DeleteObjectCommand({
      Bucket: bucket,
      Key: storageKey
    });
    await s3Client.send(command);
    return;
  }

  const filePath = path.join(LOCAL_STORAGE_DIR, storageKey);
  try {
    await fs.unlink(filePath);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
}

export async function getPresignedOrProxyUrl(req, uploadId, storageKey, expiresIn = 3600) {
  if (storageProvider === 's3' && s3Client && getSignedUrl && GetObjectCommand && process.env.STORAGE_PRESIGNED_URLS === 'true') {
    const bucket = process.env.STORAGE_BUCKET;
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: storageKey
    });
    return await getSignedUrl(s3Client, command, { expiresIn });
  }

  // Default secure proxy URL endpoint served by Yume backend
  const protocol = req ? req.protocol : 'http';
  const host = req ? req.get('host') : 'localhost:3000';
  return `${protocol}://${host}/api/uploads/${uploadId}/view`;
}

export function getActiveStorageProvider() {
  return storageProvider;
}
