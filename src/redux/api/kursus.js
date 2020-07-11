import { Api } from '../../utils/api';

export default Object.freeze({
  kursus: ({ from }) => Api.get(`/kursus?from=${from}`),
  contents: ({ course_id }) => Api.get(`/kursus/${course_id}/contents`),
  cari: ({ keywords }) => Api.get(`/kursus/cari?keywords=${keywords}`),
});
