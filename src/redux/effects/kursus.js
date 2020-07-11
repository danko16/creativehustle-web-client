import { call, all, put, takeLatest } from 'redux-saga/effects';
import kursusApi from '../api/kursus';
import { getErrorMessage } from '../../utils/api';
import { KURSUS_ACTIONS, kursusActions } from '../reducers/kursus';

function* kursus(value) {
  try {
    const {
      data: { data },
    } = yield call(kursusApi.kursus, value);
    if (data) {
      yield put(kursusActions.kursus({ kursus: data }));
    }
  } catch (error) {
    yield put(kursusActions.error(getErrorMessage(error)));
  }
}

function* contents({ value }) {
  try {
    const {
      data: { data },
    } = yield call(kursusApi.contents, value);
    if (data) {
      const { sections, contents } = data;
      yield put(
        kursusActions.contents({
          sections,
          contents,
        })
      );
    }
  } catch (error) {
    yield put(kursusActions.error(getErrorMessage(error)));
  }
}

function* cari({ value }) {
  try {
    const {
      data: { data },
    } = yield call(kursusApi.cari, value);
    if (data) {
      yield put(kursusActions.kursus({ kursus: data }));
    }
  } catch (error) {
    yield put(kursusActions.error(getErrorMessage(error)));
  }
}

function* kursusSaga() {
  try {
    yield call(kursus, { from: 0 });
    yield all([
      takeLatest(KURSUS_ACTIONS.REQ_CONTENTS, contents),
      takeLatest(KURSUS_ACTIONS.REQ_CARI_KURSUS, cari),
    ]);
  } catch (error) {
    yield put(kursusActions.error(getErrorMessage(error)));
  }
}

export default kursusSaga;
