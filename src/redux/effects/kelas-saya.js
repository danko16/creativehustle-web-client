import { put, call, takeLatest, all } from 'redux-saga/effects';
import { getErrorMessage } from '../../utils/api';
import { kelasSayaActions, KELAS_SAYA_ACTIONS } from '../reducers/kelas-saya';
import kelasSayaApi from '../api/kelas-saya';

function* kelas() {
  try {
    const {
      data: { data },
    } = yield call(kelasSayaApi.kelas);
    if (data) {
      yield put(kelasSayaActions.kelas(data));
    }
  } catch (error) {
    yield put(kelasSayaActions.error(getErrorMessage(error)));
  }
}

function* schedules({ value }) {
  try {
    const {
      data: { data },
    } = yield call(kelasSayaApi.jadwal, value);
    if (data) {
      yield put(kelasSayaActions.schedules(data));
    }
  } catch (error) {
    yield put(kelasSayaActions.error(getErrorMessage(error)));
  }
}

function* kelasSayaSaga() {
  try {
    yield call(kelas);
    yield all([takeLatest(KELAS_SAYA_ACTIONS.REQ_SCHEDULES, schedules)]);
  } catch (error) {
    yield put(kelasSayaActions.error(getErrorMessage(error)));
  }
}

export default kelasSayaSaga;
