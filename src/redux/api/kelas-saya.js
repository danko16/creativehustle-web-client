import { Api } from '../../utils/api';

export default Object.freeze({
  subscribe: ({ class_id }) =>
    Api.post(
      '/kelas-saya/subscribe',
      { class_id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ),
  kelas: () => Api.get('/kelas-saya'),
  jadwal: ({ class_id }) => Api.get(`/kelas-saya/${class_id}/jadwal`),
});
