# Authentication foundation

## Setup

1. Copy `server/.env.example` to `server/.env`.
2. Replace `SESSION_SECRET` with a unique, high-entropy value.
3. Configure `DATABASE_URL` for PostgreSQL.
4. Apply `server/db/schema.sql`.
5. From `server/`, run `npm install` and then `npm start`.

Never commit `server/.env`. If a secret was committed previously, rotate it.

## Endpoints

- `POST /api/auth/register`
  - body: `{ username, email, password }`
  - usernames are 3–64 letters, numbers, or underscores; passwords are 8–128 characters.
  - every self-registered account receives the `user` role. Clients cannot choose a role.
- `POST /api/auth/login`
  - body: `{ email, password }`
- `POST /api/auth/logout`
- `GET /api/auth/me`
  - requires a session cookie.
- `GET /api/health`
  - returns a 503 response when PostgreSQL is unavailable.

## Sessions and roles

- Cookie sessions use `connect-pg-simple` and are stored in PostgreSQL.
- Sessions are regenerated after registration and login.
- Authenticated sessions include the current user and role for future role-protected routes.
- The only public self-registration role is `user`. Moderator and admin assignment must be handled by a trusted server-side workflow.

## Product APIs

The following routes are intentionally authenticated placeholders while Yume's persistence model is being built:

- `POST /api/pins/:pinId/like`
- `POST /api/pins/:pinId/save`
- `POST /api/creators/:creatorHandle/follow`
- `POST /api/posts/create`
- `GET /api/activity`
- `GET /api/profile/me`
- `GET /api/settings/me`
