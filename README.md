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

The repository contains the Yume frontend, PostgreSQL-backed authentication, and a Flux 1.1 Pro generation flow. Personal-photo uploads, permanent storage, and social-content persistence are still in development.

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

## Generate with fal Flux 1.1 Pro

1. Create a fal API key in your fal account.
2. In `server/.env`, set `FAL_KEY` to that value. It must remain on the server—never put it in frontend JavaScript or GitHub.
3. Keep `FAL_IMAGE_MODEL=fal-ai/flux-pro/v1.1` (the default).
4. Start the server, sign in, and open **Create**.

Yume creates a private queued generation record and polls its own backend for the result. Generated images can be revisited, re-used as prompts, opened, downloaded, or removed from the library. No fal request is made until a real server-side key is configured.

The current library stores the provider's returned image URL. Before accepting real-person uploads or promising long-term storage, add an object-storage provider, moderation, consent controls, and deletion handling.

## Next product milestones

The following needs a deliberate provider choice and credentials before it can be built safely:

- Object storage for uploads and permanent generated-image archives
- Content moderation, consent, and reporting for real-person uploads
- Persistent posts, feed, likes, saves, follows, profiles, and activity

Until those milestones are implemented, the gallery and social interactions remain a frontend prototype with mock data.


## Admin control centre

After you create your own account, add its email address to the server-only `ADMIN_EMAILS` environment variable (for example, `ADMIN_EMAILS=you@example.com`). Restart the server, then sign out and in again. Your account can then open `/#/admin`.

The admin centre is server-protected and shows user, generation, queue/failure, and recent privileged-action information. It can grant or remove the `moderator` role. It deliberately cannot create another admin account through the browser; administrator access is controlled by the private server setting.
