import { Api } from '../../utils/api';

export default Object.freeze({
  kursusSaya: () => Api.get('/kursus-saya'),
  contents: () => Api.get('/kursus-saya/contents'),
  rekomendasi: () => Api.get('/kursus-saya/rekomendasi'),
  subscribe: (payload) =>
    Api.post('/kursus-saya/subscribe', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  done: (payload) =>
    Api.patch('/kursus-saya/done', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
});
