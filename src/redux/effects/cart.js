import { put, call, all, select, takeLatest } from 'redux-saga/effects';
import { cartActions, CART_ACTIONS } from '../reducers/cart';
import cartApi from '../api/cart';
import { getErrorMessage } from '../../utils/api';

function* cart() {
  try {
    const {
      data: { data },
    } = yield call(cartApi.cart);
    if (data) {
      const { carts_payload, prices } = data;
      yield put(cartActions.cart({ carts_payload, prices }));
    }
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

function* coupon({ value }) {
  try {
    const {
      cart: { coupons, total_prices },
    } = yield select();
    const {
      data: { data },
    } = yield call(cartApi.coupon, value);
    if (data) {
      const newCoupons = [...coupons];
      let isExist = false;

      coupons.forEach((coupon) => {
        if (coupon.id === data.id) {
          isExist = true;
        }
      });

      if (!isExist) {
        newCoupons.push(data);

        const finalPrice = total_prices.final_price - data.discounts;
        const totalPromoPrice = total_prices.total_promo_price + data.discounts;

        let percentage = 0;

        if (totalPromoPrice !== 0) {
          percentage = (totalPromoPrice / total_prices.total_price) * 100;
        }

        const newTotalPrices = {
          total_price: total_prices.total_price,
          total_promo_price: totalPromoPrice,
          final_price: finalPrice,
          percentage: Math.round(percentage),
        };

        yield put(cartActions.coupon({ coupons: newCoupons, total_prices: newTotalPrices }));
      }
    }
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

function* addCart({ value }) {
  try {
    const {
      data: { data },
    } = yield call(cartApi.add, value);
    if (data) {
      yield call(cart);
      yield put(cartActions.setData('recently_added', data));
    }
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

function* deleteCart({ value }) {
  try {
    const {
      data: { data },
    } = yield call(cartApi.delete, { type: value.type, cart_id: value.cart_id });
    if (data.ok) {
      yield call(cart);
    }
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

function* cartSaga() {
  try {
    yield call(cart);
    yield all([
      takeLatest(CART_ACTIONS.ADD_CART, addCart),
      takeLatest(CART_ACTIONS.DELETE_CART, deleteCart),
      takeLatest(CART_ACTIONS.REQ_COUPON, coupon),
    ]);
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

export default cartSaga;
