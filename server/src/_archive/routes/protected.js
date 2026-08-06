import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Health for auth-protected endpoints (foundation for future features)
router.get('/auth-protected', requireAuth, async (req, res) => {
  // session userId is verified in requireAuth
  return res.json({ ok: true });
});

/**
 * Foundations only: route guards for persistence/ownership actions.
 * No domain logic yet (future moderation/admin features will build on this).
 */

// Like
router.post('/pins/:pinId/like', requireAuth, (req, res) => {
  return res.status(501).json({ error: 'Like not implemented yet (foundation only)' });
});

// Save
router.post('/pins/:pinId/save', requireAuth, (req, res) => {
  return res.status(501).json({ error: 'Save not implemented yet (foundation only)' });
});

// Follow
router.post('/creators/:creatorHandle/follow', requireAuth, (req, res) => {
  return res.status(501).json({ error: 'Follow not implemented yet (foundation only)' });
});

// Create
router.post('/posts/create', requireAuth, (req, res) => {
  return res.status(501).json({ error: 'Create Post not implemented yet (foundation only)' });
});

// Activity
router.get('/activity', requireAuth, (req, res) => {
  return res.status(501).json({ error: 'Activity not implemented yet (foundation only)' });
});

// Personal Profile
router.get('/profile/me', requireAuth, (req, res) => {
  return res.status(501).json({ error: 'Profile not implemented yet (foundation only)' });
});

// Settings
router.get('/settings/me', requireAuth, (req, res) => {
  return res.status(501).json({ error: 'Settings not implemented yet (foundation only)' });
});

export default router;
