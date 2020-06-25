import { call, select, put, takeLatest } from 'redux-saga/effects';
import kursusSayaApi from '../api/kursus-saya';
import { push } from 'connected-react-router';
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
      const { sections, contents } = data;
      yield put(
        kursusSayaAction.contents({
          sections,
          contents,
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

function* subscribe({ value }) {
  try {
    const { data } = yield call(kursusSayaApi.subscribe, value);
    if (data) {
      yield call(kursusSaya);
      yield put(push('/dashboard/kursus'));
    }
  } catch (error) {
    alert(getErrorMessage(error));
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

function* done({ value }) {
  try {
    const {
      kursusSaya: { sections },
    } = yield select();
    const {
      data: { data },
    } = yield call(kursusSayaApi.done, {
      content_id: value.content_id,
      course_id: value.course_id,
    });
    if (data) {
      yield put(kursusSayaAction.contents({ contents: data, sections }));
      yield call(kursusSaya);
    }
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

const kursusSayaSaga = [
  takeLatest(KURSUS_SAYA_ACTION.REQ_KURSUS, kursusSaya),
  takeLatest(KURSUS_SAYA_ACTION.REQ_CONTENTS, contents),
  takeLatest(KURSUS_SAYA_ACTION.REQ_REKOMENDASI, rekomendasi),
  takeLatest(KURSUS_SAYA_ACTION.DONE, done),
  takeLatest(KURSUS_SAYA_ACTION.SUBSCRIBE, subscribe),
];

export default kursusSayaSaga;
