-- PinPin Auth Foundation (roles-ready)
-- Run this in PostgreSQL.

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role VARCHAR(16) NOT NULL DEFAULT 'user' CHECK (
        role IN ('user', 'moderator', 'admin')
    ),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_role ON users (role);

-- Each request belongs to one user. Provider queue URLs and results remain server-side.
CREATE TABLE IF NOT EXISTS generations (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    prompt TEXT NOT NULL,
    image_size VARCHAR(32) NOT NULL DEFAULT 'portrait_4_3',
    seed BIGINT,
    model VARCHAR(128) NOT NULL,
    status VARCHAR(16) NOT NULL DEFAULT 'queued' CHECK (
        status IN ('queued', 'processing', 'completed', 'failed')
    ),
    provider_request_id TEXT,
    provider_status_url TEXT,
    provider_response_url TEXT,
    images JSONB NOT NULL DEFAULT '[]'::jsonb,
    provider_metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_generations_user_created
    ON generations (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_generations_pending
    ON generations (status)
    WHERE status IN ('queued', 'processing');


-- A small append-only record of privileged actions for operational accountability.
CREATE TABLE IF NOT EXISTS admin_audit_logs (
    id BIGSERIAL PRIMARY KEY,
    actor_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(80) NOT NULL,
    target_type VARCHAR(40) NOT NULL,
    target_id BIGINT,
    target_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_created
    ON admin_audit_logs (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_target_user
    ON admin_audit_logs (target_user_id, created_at DESC);

-- User personal photo uploads for AI transformation and creation
CREATE TABLE IF NOT EXISTS user_uploads (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    original_filename VARCHAR(255) NOT NULL,
    storage_key VARCHAR(255) NOT NULL UNIQUE,
    storage_provider VARCHAR(32) NOT NULL DEFAULT 'local',
    mime_type VARCHAR(64) NOT NULL,
    file_size_bytes BIGINT NOT NULL,
    width INTEGER,
    height INTEGER,
    is_private BOOLEAN NOT NULL DEFAULT true,
    consent_given BOOLEAN NOT NULL DEFAULT false,
    consent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    consent_version VARCHAR(32) NOT NULL DEFAULT 'v1.0',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_uploads_user_created
    ON user_uploads (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_uploads_storage_key
    ON user_uploads (storage_key);

-- Add optional reference to source upload photo in generations
ALTER TABLE generations ADD COLUMN IF NOT EXISTS source_upload_id BIGINT REFERENCES user_uploads(id) ON DELETE SET NULL;

