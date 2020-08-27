import { put, call, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getErrorMessage } from '../../utils/api';
import { webinarSayaActions, WEBINAR_SAYA_ACTIONS } from '../reducers/webinar-saya';
import webinarSayaApi from '../api/webinar-saya';

function* webinar() {
  try {
    const {
      data: { data },
    } = yield call(webinarSayaApi.webinar);
    if (data) {
      yield put(webinarSayaActions.webinar(data));
    }
  } catch (error) {
    yield put(webinarSayaActions.error(getErrorMessage(error)));
  }
}

function* schedules({ value }) {
  try {
    const {
      data: { data },
    } = yield call(webinarSayaApi.jadwal, value);
    if (data) {
      yield put(webinarSayaActions.schedules(data));
    }
  } catch (error) {
    yield put(webinarSayaActions.error(getErrorMessage(error)));
  }
}

function* free({ value }) {
  try {
    const {
      data: { data },
    } = yield call(webinarSayaApi.free, { webinar_id: value.webinar_id });

    if (data.ok) {
      yield call(webinar);
    }

    yield put(webinarSayaActions.setData('loading', false));
    yield put(push('/dashboard/webinar'));
  } catch (error) {
    yield put(webinarSayaActions.error(getErrorMessage(error)));
  }
}

function* webinarSayaSaga() {
  try {
    yield call(webinar);
    yield all([
      takeLatest(WEBINAR_SAYA_ACTIONS.REQ_SCHEDULES, schedules),
      takeLatest(WEBINAR_SAYA_ACTIONS.FREE, free),
    ]);
  } catch (error) {
    yield put(webinarSayaActions.error(getErrorMessage(error)));
  }
}

export default webinarSayaSaga;
