import { call, select, put, take, takeLatest, cancel, all, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getErrorMessage } from '../../utils/api';
import authApi from '../api/auth';

import { AUTH_ACTIONS, authActions } from '../reducers/auth';
import kursusSayaSaga from './kursus-saya';
import kursusSaga from './kursus';
import kelasSaga from './kelas';
import kelasSayaSaga from './kelas-saya';

function* register({ value }) {
  try {
    const { data: response } = yield call(authApi.register, value);
    const { data } = response;
    if (data) {
      const registerPayload = Object.freeze({
        token: data.token,
        user: data.user,
        type: data.type,
        message: response.message,
      });

      yield put(authActions.register(registerPayload));
      yield put(push('/dashboard'));
    }
  } catch (e) {
    yield put(authActions.authError(getErrorMessage(e)));
  }
}

function* login({ value }) {
  try {
    const { data: response } = yield call(authApi.login, value);

    const { data } = response;
    if (data) {
      const loginPayload = Object.freeze({
        token: data.token,
        user: data.user,
        type: data.type,
        message: response.message,
      });

      yield put(authActions.login(loginPayload));
      yield put(push('/dashboard'));
    }
  } catch (e) {
    yield put(authActions.authError(getErrorMessage(e)));
  }
}

function* updateProfile({ value }) {
  try {
    const formData = new FormData();
    formData.append('file', value.file);

    const {
      data: { data, message },
    } = yield call(authApi.profile, {
      name: value.name,
      phone: value.phone,
      formData,
    });
    if (data) {
      yield put(
        authActions.profile({
          user: data,
          message,
        })
      );
    }
  } catch (e) {
    yield put(authActions.error(getErrorMessage(e)));
  }
}

function* updatePassword({ value }) {
  try {
    const {
      data: { message },
    } = yield call(authApi.password, value);
    if (message) {
      yield put(authActions.password(message));
    }
  } catch (e) {
    yield put(authActions.error(getErrorMessage(e)));
  }
}

function* forgotPassword({ value }) {
  try {
    const {
      auth: { forgot_password },
    } = yield select();
    if (forgot_password >= 1) {
      yield put(authActions.error('anda sudah request reset password silahkan check email anda'));
      return;
    }
    const {
      data: { message },
    } = yield call(authApi.forgotPassword, value);
    if (message) {
      yield put(authActions.forgotPassword(message));
    }
  } catch (e) {
    yield put(authActions.error(getErrorMessage(e)));
  }
}

function* resetPassword({ value }) {
  try {
    const {
      data: { message, data },
    } = yield call(authApi.resetPassword, value);
    if (data) {
      yield put(authActions.resetPassword(message));
      yield put(
        authActions.login({
          user: data.user,
          token: data.token,
          type: data.type,
          auth_msg: '',
        })
      );
      yield put(push('/dashboard'));
    }
  } catch (e) {
    yield put(authActions.error(getErrorMessage(e)));
  }
}

function* isAllow() {
  try {
    yield call(authApi.isAllow);
    return true;
  } catch (e) {
    yield put(authActions.logout());
    return false;
  }
}

function* unAuthorizedTsk() {
  try {
    yield all([
      takeLatest(AUTH_ACTIONS.REQ_LOGIN, login),
      takeLatest(AUTH_ACTIONS.REQ_REGISTER, register),
      takeLatest(AUTH_ACTIONS.REQ_FORGOT_PASSWORD, forgotPassword),
      takeLatest(AUTH_ACTIONS.REQ_RESET_PASSWORD, resetPassword),
    ]);
  } catch (error) {
    yield put(authActions.error(getErrorMessage(error)));
  }
}

function* authorizedTsk() {
  try {
    yield all([
      takeLatest(AUTH_ACTIONS.REQ_UPDATE_PROFILE, updateProfile),
      takeLatest(AUTH_ACTIONS.REQ_UPDATE_PASSWORD, updatePassword),
    ]);
  } catch (error) {
    yield put(authActions.error(getErrorMessage(error)));
  }
}

function* authFlow() {
  while (true) {
    yield fork(kursusSaga);
    yield fork(kelasSaga);
    yield fork(unAuthorizedTsk);
    const isAuthorized = yield call(isAllow);
    if (!isAuthorized) {
      console.log('wait for loggin');
      yield take([AUTH_ACTIONS.LOGIN, AUTH_ACTIONS.REGISTER]);
    }

    const authorizedTask = yield fork(authorizedTsk);
    const kursusSayaTask = yield fork(kursusSayaSaga);
    const kelasSayaTask = yield fork(kelasSayaSaga);

    console.log('wait for logout');
    yield take(AUTH_ACTIONS.LOGOUT);
    yield cancel([authorizedTask, kursusSayaTask, kelasSayaTask]);
  }
}

const authSaga = takeLatest(AUTH_ACTIONS.FLOW, authFlow);

export default authSaga;
