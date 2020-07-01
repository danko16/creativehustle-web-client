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
  profile: ({ name, phone, formData }) =>
    Api.patch('/auth/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        name,
        phone,
      },
    }),
  password: (payload) =>
    Api.patch('/auth/password', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  forgotPassword: (payload) =>
    Api.post('/auth/forgot', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  resetPassword: (payload) =>
    Api.post('/auth/reset', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  googleAuth: () => Api.get('/auth/google'),
});
