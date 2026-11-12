const byId = id => document.getElementById(id);

export function initAuthGate() {
  const form = byId('authForm');
  const loginTab = byId('authLoginTab');
  const registerTab = byId('authRegisterTab');
  const submit = byId('authSubmit');
  const message = byId('authMessage');
  const password = byId('authPassword');
  const hint = byId('authPasswordHint');
  const forgot = byId('authForgot');
  const gate = byId('authGate');
  const signOut = byId('btnSignOut');
  const signedInUser = byId('signedInUser');
  if (!form || !gate) return;

  let mode = 'login';
  const showMessage = (text, success = false) => {
    message.textContent = text;
    message.classList.toggle('success', success);
  };
  const setMode = next => {
    mode = next;
    const registering = mode === 'register';
    loginTab.classList.toggle('active', !registering);
    registerTab.classList.toggle('active', registering);
    loginTab.setAttribute('aria-selected', String(!registering));
    registerTab.setAttribute('aria-selected', String(registering));
    submit.innerHTML = registering ? 'Create account securely <span aria-hidden="true">→</span>' : 'Sign in securely <span aria-hidden="true">→</span>';
    password.autocomplete = registering ? 'new-password' : 'current-password';
    password.minLength = registering ? 8 : 1;
    password.maxLength = 128;
    hint.textContent = registering ? 'Use 8–128 characters. Choose a unique password with a mix of letters, numbers, and symbols.' : 'Use your CarePath Pro password.';
    forgot.hidden = registering;
    showMessage('');
  };
  const unlock = user => {
    document.body.classList.remove('auth-locked');
    gate.setAttribute('aria-hidden', 'true');
    signedInUser.textContent = user?.email || '';
    signOut.hidden = false;
    window.dispatchEvent(new CustomEvent('carepath:authenticated', { detail: { user } }));
  };
  const lock = () => {
    document.body.classList.add('auth-locked');
    gate.removeAttribute('aria-hidden');
    signedInUser.textContent = '';
    signOut.hidden = true;
  };
  const request = async (path, body) => {
    const response = await fetch(path, {
      method: body ? 'POST' : 'GET',
      credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json', Accept: 'application/json' } : { Accept: 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      cache: 'no-store'
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'Unable to complete the account request.');
    return data;
  };

  loginTab.addEventListener('click', () => setMode('login'));
  registerTab.addEventListener('click', () => setMode('register'));
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const email = byId('authEmail').value.trim();
    const passwordValue = password.value;
    if (!email || !passwordValue) return showMessage('Enter your email address and password.');
    if (mode === 'register' && ([...passwordValue].length < 8 || [...passwordValue].length > 128)) {
      return showMessage('Your password must be between 8 and 128 characters.');
    }
    submit.disabled = true;
    showMessage(mode === 'register' ? 'Creating your account…' : 'Signing you in…');
    try {
      const data = await request('/api/auth/' + (mode === 'register' ? 'register' : 'login'), { email, password: passwordValue });
      showMessage(mode === 'register' ? 'Account created. Welcome to CarePath Pro.' : 'Signed in successfully.', true);
      unlock(data.user);
    } catch (error) {
      showMessage(error.message);
    } finally {
      submit.disabled = false;
    }
  });
  forgot.addEventListener('click', async () => {
    const email = byId('authEmail').value.trim();
    if (!email) return showMessage('Enter your email address first.');
    try {
      const data = await request('/api/auth/password-reset/request', { email });
      showMessage(data.message || 'If the account exists, a reset link will be sent.', true);
    } catch (error) {
      showMessage(error.message);
    }
  });
  signOut.addEventListener('click', async () => {
    try {
      await request('/api/auth/logout', {});
    } catch (error) {
      showMessage(error.message);
    }
    lock();
    setMode('login');
  });

  setMode('login');
  request('/api/auth/me').then(data => {
    if (data.user) unlock(data.user);
    else lock();
  }).catch(() => {
    lock();
    showMessage('The account server is unavailable. Open CarePath Pro through its Node.js backend URL to register or sign in.');
  });
}
