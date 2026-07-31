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
