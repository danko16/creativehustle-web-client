import { Api } from '../../utils/api';

export default Object.freeze({
  cart: () => Api.get('/cart'),
  add: (value) =>
    Api.post('/cart', value, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  delete: ({ type, cart_id }) =>
    Api.delete(`/cart`, {
      params: {
        type,
        cart_id,
      },
    }),
  coupon: ({ coupon_name }) =>
    Api.get('/cart/coupon', {
      params: {
        coupon_name,
      },
    }),
});
