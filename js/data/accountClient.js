async function request(path, options = {}) {
  const response = await fetch(path, {
    credentials: 'same-origin',
    cache: 'no-store',
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || 'Account request failed.');
  return payload;
}

export const accountClient = {
  current: () => request('/api/auth/me'),
  register: (email, password) => request('/api/auth/register', {
    method: 'POST', body: JSON.stringify({ email, password }),
  }),
  login: (email, password) => request('/api/auth/login', {
    method: 'POST', body: JSON.stringify({ email, password }),
  }),
  logout: () => request('/api/auth/logout', { method: 'POST' }),
  deleteAccount: password => request('/api/auth/account', {
    method: 'DELETE', body: JSON.stringify({ password }),
  }),
  changePassword: (currentPassword, newPassword) => request('/api/auth/password', {
    method: 'PUT', body: JSON.stringify({ currentPassword, newPassword }),
  }),
  requestPasswordReset: email => request('/api/auth/password-reset/request', {
    method: 'POST', body: JSON.stringify({ email }),
  }),
  confirmPasswordReset: (token, newPassword) => request('/api/auth/password-reset/confirm', {
    method: 'POST', body: JSON.stringify({ token, newPassword }),
  }),
  bookmarks: () => request('/api/bookmarks'),
  saveBookmark: conditionId => request('/api/bookmarks', {
    method: 'POST', body: JSON.stringify({ conditionId }),
  }),
  removeBookmark: conditionId => request(`/api/bookmarks/${encodeURIComponent(conditionId)}`, {
    method: 'DELETE',
  }),
};

