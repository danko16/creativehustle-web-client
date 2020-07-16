import { Api } from '../../utils/api';

export default Object.freeze({
  cart: () => Api.get('/cart'),
  add: (value) =>
    Api.post('/cart', value, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  delete: ({ cart_id }) => Api.delete(`/cart/${cart_id}`),
});
