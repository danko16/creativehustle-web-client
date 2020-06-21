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
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

function* done({ value }) {
  try {
    const {
      kursusSaya: { contents, kursus, sections },
    } = yield select();
    const { data } = yield call(kursusSayaApi.done, { my_content_id: value.my_content_id });
    if (data) {
      let content,
        course,
        courseIdx,
        contentIdx,
        countDone = 0,
        total = 0;

      contents.forEach((val, index) => {
        if (val.id === value.my_content_id) {
          content = val;
          contentIdx = index;
        }

        if (val.course_id === value.kursus_id) {
          total++;
          if (val.done) {
            countDone++;
          }
        }
      });

      kursus.forEach((val, index) => {
        if (val.id === value.kursus_id) {
          course = val;
          courseIdx = index;
        }
      });

      content.done = true;
      countDone++;

      const progress = Math.floor((countDone / total) * 100);
      course.progress = progress;

      contents[contentIdx] = content;
      kursus[courseIdx] = course;

      yield put(kursusSayaAction.kursus({ contents, kursus, sections }));
    }
  } catch (error) {
    yield put(kursusSayaAction.error(getErrorMessage(error)));
  }
}

const kursusSayaSaga = [
  takeLatest(KURSUS_SAYA_ACTION.REQ_KURSUS, kursusSaya),
  takeLatest(KURSUS_SAYA_ACTION.REQ_REKOMENDASI, rekomendasi),
  takeLatest(KURSUS_SAYA_ACTION.DONE, done),
  takeLatest(KURSUS_SAYA_ACTION.SUBSCRIBE, subscribe),
];

export default kursusSayaSaga;
