import { call, put, takeLatest, all } from 'redux-saga/effects';
import kelasApi from '../api/kelas';
import { kelasActions, KELAS_ACTIONS } from '../reducers/kelas';
import { getErrorMessage } from '../../utils/api';

function* kelas(value) {
  try {
    const {
      data: { data },
    } = yield call(kelasApi.kelas, value);
    if (data) {
      yield put(kelasActions.kelas(data));
    }
  } catch (error) {
    yield put(kelasActions.error(getErrorMessage(error)));
  }
}

function* cari({ value }) {
  try {
    const {
      data: { data },
    } = yield call(kelasApi.cari, value);
    if (data) {
      yield put(kelasActions.kelas(data));
    }
  } catch (error) {
    yield put(kelasActions.error(getErrorMessage(error)));
  }
}

function* kelasSaga() {
  try {
    yield call(kelas, { from: 0 });
    yield all([takeLatest(KELAS_ACTIONS.REQ_CARI_KELAS, cari)]);
  } catch (error) {
    yield put(kelasActions.error(getErrorMessage(error)));
  }
}

export default kelasSaga;
