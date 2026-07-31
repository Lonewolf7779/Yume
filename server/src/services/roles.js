function normalizeEmail(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

export function isConfiguredAdminEmail(email) {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return false;

  const configuredEmails = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map(normalizeEmail)
    .filter(Boolean);

  return configuredEmails.includes(normalizedEmail);
}

export function effectiveRole(user) {
  if (isConfiguredAdminEmail(user?.email)) return 'admin';
  return user?.role || 'user';
}
