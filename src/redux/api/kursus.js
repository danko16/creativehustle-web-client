import { Api } from '../../utils/api';

export default Object.freeze({
  kursus: ({ from }) => Api.get(`kursus?from=${from}`),
});
