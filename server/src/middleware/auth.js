export function requireAuth(req, res, next) {
  const userId = req.session?.userId;
  if (!userId) return res.status(401).json({ error: 'Not authenticated' });
  next();
}

export function requireRole(roles = []) {
  return function (req, res, next) {
    const user = req.session?.user;
    const userRole = user?.role;
    if (!userRole) return res.status(401).json({ error: 'Not authenticated' });
    if (!roles.includes(userRole)) return res.status(403).json({ error: 'Forbidden' });
    next();
  };
}
