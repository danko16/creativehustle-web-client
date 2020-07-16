import { put, call, all, takeLatest } from 'redux-saga/effects';
import { cartActions, CART_ACTIONS } from '../reducers/cart';
import cartApi from '../api/cart';
import { getErrorMessage } from '../../utils/api';

function* cart() {
  try {
    const {
      data: { data },
    } = yield call(cartApi.cart);
    if (data) {
      console.log(data);
    }
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

function* addCart(value) {
  try {
    const {
      data: { data },
    } = yield call(cartApi.add, value);
    if (data) {
      yield call(cart);
    }
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

function* deleteCart(value) {
  try {
    const {
      data: { data },
    } = yield call(cartApi.delete, { cart_id: value.cart_id });
    if (data) {
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
    ]);
  } catch (error) {
    yield put(cartActions.error(getErrorMessage(error)));
  }
}

export default cartSaga;
