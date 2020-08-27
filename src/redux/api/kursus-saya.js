import { Api } from '../../utils/api';

export default Object.freeze({
  kursusSaya: () => Api.get('/kursus-saya'),
  contents: ({ course_id }) => Api.get(`/kursus-saya/${course_id}/contents`),
  rekomendasi: () => Api.get('/kursus-saya/rekomendasi'),
  free: (payload) =>
    Api.post('/kursus-saya/free', payload, {
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
