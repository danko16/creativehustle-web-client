import { Api } from '../../utils/api';

export default Object.freeze({
  kelas: ({ from }) => Api.get(`/kelas?from=${from}`),
  cari: ({ keywords }) => Api.get(`/kelas/cari?keywords=${keywords}`),
});
