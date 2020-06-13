import { Api } from '../../utils/api';

export default Object.freeze({
  isAllow: () => Api.post('/auth/is-allow', { headers: { 'Content-Type': 'application/json' } }),
  register: (payload) =>
    Api.post('/auth/register', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
  login: (payload) =>
    Api.post('/auth/login', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
  googleAuth: () => Api.get('/auth/google'),
});
