import { Api } from '../../utils/api';

export default Object.freeze({
  kelas: ({ from }) => Api.get(`/kelas?from=${from}`),
});
