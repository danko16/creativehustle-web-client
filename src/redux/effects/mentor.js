import { call, put } from 'redux-saga/effects';
import mentorApi from '../api/mentor';
import { mentorAction } from '../reducers/mentor';
import { getErrorMessage } from '../../utils/api';

function* mentor() {
  try {
    const {
      data: { data },
    } = yield call(mentorApi.mentor);
    if (data) {
      yield put(mentorAction.mentors(data));
    }
  } catch (error) {
    yield put(mentor.error(getErrorMessage(error)));
  }
}

function* mentorSaga() {
  try {
    yield call(mentor);
  } catch (error) {
    yield put(mentorAction.error(getErrorMessage(error)));
  }
}

export default mentorSaga;
