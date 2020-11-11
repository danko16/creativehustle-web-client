import { call, put } from 'redux-saga/effects';
import { categoryActions } from '../reducers/category';
import { getErrorMessage } from '../../utils/api';
import categoryApi from '../api/category';

function* categories() {
  try {
    const {
      data: { data },
    } = yield call(categoryApi.categories);
    if (data) {
      yield put(categoryActions.categories(data));
    }
  } catch (error) {
    yield put(getErrorMessage(categoryActions.error(error)));
  }
}

function* categorySaga() {
  try {
    yield call(categories);
  } catch (error) {
    yield put(getErrorMessage(categoryActions.error(error)));
  }
}

export default categorySaga;
