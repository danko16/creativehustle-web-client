import { Api } from '../../utils/api';

export default Object.freeze({
  register: (payload) =>
    Api.post('/auth/register', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
  login: (payload) =>
    Api.post('/auth/login', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
  checkAuth: () =>
    Api.post('/auth/check-auth', {
      headers: { 'Content-Type': 'application/json' },
    }),
});
