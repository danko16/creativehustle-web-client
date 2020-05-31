import { call, put, take, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import io from 'socket.io-client';
import { getErrorMessage } from '../../utils/auth';
import authApi from '../api/auth';

import { AUTH_ACTIONS, authActions } from '../reducers/auth';

function connect() {
  const socket = io.connect('http://localhost:3000');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

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
    yield put(authActions.error(getErrorMessage(e)));
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
    yield put(authActions.error(getErrorMessage(e)));
  }
}

function* isAllow() {
  try {
    yield call(authApi.isAllow);
    return true;
  } catch (e) {
    return false;
  }
}

function* authFlow() {
  while (true) {
    const isAuthorized = yield call(isAllow);
    if (!isAuthorized) {
      console.log('wait for loggin');
      yield take([AUTH_ACTIONS.LOGIN, AUTH_ACTIONS.REGISTER]);
    }
    const socket = yield call(connect);
    const { auth } = yield select();
    socket.emit('authentication', auth.token);
    console.log('wait for logout');
    yield take(AUTH_ACTIONS.LOGOUT);
  }
}

const authSaga = [
  takeLatest(AUTH_ACTIONS.FLOW, authFlow),
  takeLatest(AUTH_ACTIONS.REQ_LOGIN, login),
  takeLatest(AUTH_ACTIONS.REQ_REGISTER, register),
];

export default authSaga;
