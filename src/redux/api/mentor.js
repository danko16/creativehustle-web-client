import { Api } from '../../utils/api';

export default Object.freeze({
  mentor: () => Api.get('/mentor'),
});
