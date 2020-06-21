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
      const { courses, sections, contents } = data;
      yield put(
        kursusActions.kursus({
          kursus: courses,
          sections,
          contents,
        })
      );
    }
  } catch (error) {
    yield put(kursusActions.error(getErrorMessage(error)));
  }
}
const kursusSaga = [takeLatest(KURSUS_ACTIONS.REQ_KURSUS, kursus)];

export default kursusSaga;
