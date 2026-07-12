# Auth & Role Foundations (PinPin)

## Endpoints

- `POST /api/auth/register`
  - body: `{ username, email, password, role? }`
  - role optional: `user | moderator | admin` (default `user`)

- `POST /api/auth/login`
  - body: `{ email, password }`

- `POST /api/auth/logout`

- `GET /api/auth/me`
  - requires session

- Auth-protected foundation endpoints:
  - `GET  /api/auth-protected`
  - `POST /api/pins/:pinId/like` (stub, 501)
  - `POST /api/pins/:pinId/save` (stub, 501)
  - `POST /api/creators/:creatorHandle/follow` (stub, 501)
  - `POST /api/posts/create` (stub, 501)
  - `GET  /api/activity` (stub, 501)
  - `GET  /api/profile/me` (stub, 501)
  - `GET  /api/settings/me` (stub, 501)

## DB Prerequisite

- Create the `users` table:
  - run `server/db/schema.sql` in PostgreSQL

## Sessions

- Cookie sessions using `connect-pg-simple`
- Session table is auto-created (via `createTableIfMissing: true`).

## Notes

This is a foundation-only implementation (no real Like/Save/Follow yet).
