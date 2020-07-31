import { call, all, put, takeLatest } from 'redux-saga/effects';
import kursusSayaApi from '../api/kursus-saya';
import { getErrorMessage } from '../../utils/api';
import { KURSUS_SAYA_ACTION, kursusSayaAction } from '../reducers/kursus-saya';

function* kursusSaya() {
  try {
    const {
      data: { data },
    } = yield call(kursusSayaApi.kursusSaya);
    if (data) {
      yield put(kursusSayaAction.kursus({ kursus: data }));
    }
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

function* contents({ value }) {
  try {
    const {
      data: { data },
    } = yield call(kursusSayaApi.contents, value);
    if (data) {
      const { sections, contents, materi_tambahan, tel_group } = data;
      yield put(
        kursusSayaAction.contents({
          sections,
          contents,
          materi_tambahan,
          tel_group,
        })
      );
    }
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

function* rekomendasi() {
  try {
    const {
      data: { data },
    } = yield call(kursusSayaApi.rekomendasi);
    if (data) {
      yield put(kursusSayaAction.rekomendasi(data));
    }
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

function* done({ value }) {
  try {
    const {
      data: { data },
    } = yield call(kursusSayaApi.done, {
      content_id: value.content_id,
      course_id: value.course_id,
    });
    if (data) {
      yield call(contents, { course_id: value.course_id });
      yield call(kursusSaya);
    }
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

function* kursusSayaSaga() {
  try {
    yield call(kursusSaya);
    yield call(rekomendasi);
    yield all([
      takeLatest(KURSUS_SAYA_ACTION.REQ_CONTENTS, contents),
      takeLatest(KURSUS_SAYA_ACTION.DONE, done),
    ]);
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}
export default kursusSayaSaga;
