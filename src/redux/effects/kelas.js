import { call, put } from 'redux-saga/effects';
import kelasApi from '../api/kelas';
import { kelasActions } from '../reducers/kelas';
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

function* kelasSaga() {
  try {
    yield call(kelas, { from: 0 });
  } catch (error) {
    yield put(kelasActions.error(getErrorMessage(error)));
  }
}

export default kelasSaga;
