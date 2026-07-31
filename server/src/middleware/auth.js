export function requireAuth(req, res, next) {
  const userId = req.session?.userId;
  if (!userId) return res.status(401).json({ error: 'Not authenticated' });
  return next();
}

export function requireRole(roles = []) {
  return function requireAllowedRole(req, res, next) {
    const userRole = req.session?.user?.role;
    if (!req.session?.userId || !userRole) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    if (!roles.includes(userRole)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    return next();
  };
}
