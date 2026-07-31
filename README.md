# Yume

Yume is an AI image creation and discovery platform in active development.

## Vision

Create and share high-quality AI images—from anime characters and original prompt-based creations to enhanced personal photos.

## Planned experience

- Generate images from prompts
- Create original characters and visual styles
- Upload personal photos for AI-assisted transformations
- Publish creations and explore the community
- Like, save, and follow creators

## Current status

The repository currently contains the Yume frontend prototype and an early authentication backend foundation. Image generation, uploads, storage, and social-content persistence are still in development.

## Project direction

Yume is being built as a place to dream, create, publish, and discover visual ideas.

## Development setup

The current runnable foundation includes the frontend shell, PostgreSQL-backed authentication, sessions, and a health check.

1. Install Node.js 20 or later and PostgreSQL.
2. Copy `server/.env.example` to `server/.env` and set a unique `SESSION_SECRET` plus your database URL.
3. Apply `server/db/schema.sql` to the database.
4. Run `npm install` and `npm start` from `server/`.
5. Run `npm test` from `server/` after the database is configured.

Never commit `server/.env`. Rotate any credential that was previously committed.

## Next product milestones

The following needs a deliberate provider choice and credentials before it can be built safely:

- AI image-generation provider and model selection
- Object storage for uploads and generated images
- Content moderation, consent, and reporting for real-person uploads
- Persistent posts, feed, likes, saves, follows, profiles, and activity

Until those milestones are implemented, the gallery and social interactions remain a frontend prototype with mock data.
