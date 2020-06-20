import { Api } from '../../utils/api';

export default Object.freeze({
  kursusSaya: () => Api.get('/kursus-saya'),
  contents: () => Api.get('/kursus-saya/contents'),
});
