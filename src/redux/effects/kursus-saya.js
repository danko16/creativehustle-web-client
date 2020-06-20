import { call, put, takeLatest } from 'redux-saga/effects';
import kursusSayaApi from '../api/kursus-saya';
import { getErrorMessage } from '../../utils/api';
import { KURSUS_SAYA_ACTION, kursusSayaAction } from '../reducers/kursus-saya';

function* kursusSaya() {
  try {
    const {
      data: { data },
    } = yield call(kursusSayaApi.kursusSaya);
    if (data) {
      const { courses, sections, contents } = data;
      yield put(
        kursusSayaAction.kursus({
          kursus: courses,
          sections,
          contents,
        })
      );
    }
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

const kursusSayaSaga = [takeLatest(KURSUS_SAYA_ACTION.REQ_KURSUS, kursusSaya)];

export default kursusSayaSaga;
