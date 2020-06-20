import { Api } from '../../utils/api';

export default Object.freeze({
  kursusSaya: () => Api.get('/kursus-saya'),
  contents: () => Api.get('/kursus-saya/contents'),
  done: (payload) =>
    Api.patch('/kursus-saya/done', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
});
