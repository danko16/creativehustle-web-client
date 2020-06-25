import { call, put, takeLatest } from 'redux-saga/effects';
import kursusApi from '../api/kursus';
import { getErrorMessage } from '../../utils/api';
import { KURSUS_ACTIONS, kursusActions } from '../reducers/kursus';

function* kursus({ value }) {
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
    console.log(kursusActions.error(getErrorMessage(error)));
    yield put(kursusActions.error(getErrorMessage(error)));
  }
}

const kursusSaga = [
  takeLatest(KURSUS_ACTIONS.REQ_KURSUS, kursus),
  takeLatest(KURSUS_ACTIONS.REQ_CONTENTS, contents),
];

export default kursusSaga;
