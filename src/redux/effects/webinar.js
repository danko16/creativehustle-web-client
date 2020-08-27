import { call, put, takeLatest, all } from 'redux-saga/effects';
import webinarApi from '../api/webinar';
import { webinarActions, WEBINAR_ACTIONS } from '../reducers/webinar';
import { getErrorMessage } from '../../utils/api';

function* webinar(value) {
  try {
    const {
      data: { data },
    } = yield call(webinarApi.webinar, value);
    if (data) {
      yield put(webinarActions.webinar(data));
    }
  } catch (error) {
    yield put(webinarActions.error(getErrorMessage(error)));
  }
}

function* cari({ value }) {
  try {
    const {
      data: { data },
    } = yield call(webinarApi.cari, value);
    if (data) {
      yield put(webinarActions.webinar(data));
    }
  } catch (error) {
    yield put(webinarActions.error(getErrorMessage(error)));
  }
}

function* webinarSaga() {
  try {
    yield call(webinar, { from: 0 });
    yield all([takeLatest(WEBINAR_ACTIONS.REQ_CARI_WEBINAR, cari)]);
  } catch (error) {
    yield put(webinarActions.error(getErrorMessage(error)));
  }
}

export default webinarSaga;
