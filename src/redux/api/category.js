import { Api } from '../../utils/api';

export default Object.freeze({
  categories: () => Api.get('/category'),
});
