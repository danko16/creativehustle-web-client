import { all } from 'redux-saga/effects';

import authSaga from './auth';
import kursus from './kursus';
import kursusSaya from './kursus-saya';

export default function* rootSaga() {
  yield all([...authSaga, ...kursus, ...kursusSaya]);
}
