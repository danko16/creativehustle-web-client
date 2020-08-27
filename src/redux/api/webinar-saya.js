import { Api } from '../../utils/api';

export default Object.freeze({
  free: ({ webinar_id }) =>
    Api.post(
      '/webinar-saya/free',
      { webinar_id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ),
  webinar: () => Api.get('/webinar-saya'),
  jadwal: ({ webinar_id }) => Api.get(`/webinar-saya/${webinar_id}/jadwal`),
});
