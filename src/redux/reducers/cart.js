import { AUTH_ACTIONS } from './auth';
export const CART_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/cart/set-data',
  REQ_CART: 'myapp/cart/req/cart',
  CART: 'myapp/cart/cart',
  REQ_COUPON: 'myapp/cart/req/coupon',
  COUPON: 'myapp/cart/coupon',
  ADD_CART: 'myapp/cart/add',
  DELETE_CART: 'myapp/cart/delete',
  ERROR: 'myapp/cart/error',
  CLEAR_ERROR: 'myapp/cart/clear-error',
});

export const cartActions = Object.freeze({
  setData: (field, value) => ({
    type: CART_ACTIONS.SET_DATA,
    field,
    value,
  }),
  reqCart: () => ({
    type: CART_ACTIONS.REQ_CART,
  }),
  cart: (value) => ({
    type: CART_ACTIONS.CART,
    value,
  }),
  reqCoupon: (value) => ({
    type: CART_ACTIONS.REQ_COUPON,
    value,
  }),
  coupon: (value) => ({
    type: CART_ACTIONS.COUPON,
    value,
  }),
  addCart: (value) => ({
    type: CART_ACTIONS.ADD_CART,
    value,
  }),
  deleteCart: (value) => ({
    type: CART_ACTIONS.DELETE_CART,
    value,
  }),
  error: (value) => ({
    type: CART_ACTIONS.ERROR,
    value,
  }),
  clearError: () => ({
    type: CART_ACTIONS.CLEAR_ERROR,
  }),
});

const initialState = {
  carts: [],
  coupons: [],
  total_prices: {},
  recently_added: null,
  message: '',
  is_error: false,
  loading: false,
};

const reducer = (state = initialState, { field, value, type }) => {
  switch (type) {
    case CART_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case CART_ACTIONS.REQ_CART:
    case CART_ACTIONS.ADD_CART:
    case CART_ACTIONS.DELETE_CART:
    case CART_ACTIONS.REQ_COUPON:
      return {
        ...state,
        loading: true,
      };
    case CART_ACTIONS.CART:
      return {
        ...state,
        carts: value.carts_payload,
        total_prices: value.prices,
        message: '',
        is_error: false,
        loading: false,
      };
    case CART_ACTIONS.COUPON:
      return {
        ...state,
        coupons: value.coupons,
        total_prices: value.total_prices,
        message: '',
        is_error: false,
        loading: false,
      };
    case CART_ACTIONS.ERROR:
      return {
        ...state,
        message: value,
        is_error: true,
        loading: false,
      };
    case CART_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        message: '',
        is_error: false,
        loading: false,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        carts: [],
        total_prices: {},
        recently_added: null,
        message: '',
        is_error: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
