import { Api } from '../../utils/api';

export default Object.freeze({
  webinar: ({ from }) => Api.get(`/webinar?from=${from}`),
  cari: ({ keywords }) => Api.get(`/webinar/cari?keywords=${keywords}`),
});
