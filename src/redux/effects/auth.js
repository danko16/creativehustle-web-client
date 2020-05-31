import { call, put, take, fork, cancel, takeLatest, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { push } from 'connected-react-router';
import io from 'socket.io-client';
import { getErrorMessage } from '../../utils/auth';
import authApi from '../api/auth';

import { AUTH_ACTIONS, authActions } from '../reducers/auth';

function connect() {
  const socket = io.connect('http://localhost:3000');

  return new Promise((resolve, reject) => {
    socket.on('connect', () => {
      resolve(socket);
    });

    socket.on('connect_error', () => {
      setTimeout(function () {
        socket.close();
        reject({ type: 'connection', msg: 'Error connecting to server' });
      }, 5000);
    });
  });
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('authenticated', () => {
      emit(authActions.authenticated());
    });
    socket.on('unauthorized', () => {
      emit(authActions.unauthorized());
    });

    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
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

function* authFlow() {
  try {
    while (true) {
      const { auth } = yield select();
      const socket = yield call(connect);
      socket.emit('authentication', auth.token);

      const task = yield fork(read, socket);

      const action = yield take([AUTH_ACTIONS.AUTHENTICATED, AUTH_ACTIONS.UNAUTHORIZED]);

      if (action.type !== 'authenticated') {
        yield take([AUTH_ACTIONS.LOGIN, AUTH_ACTIONS.REGISTER]);
      }

      yield take(AUTH_ACTIONS.LOGOUT);
      yield cancel(task);
      socket.emit('logout');
    }
  } catch (err) {
    if (err.type === 'connection') {
      yield put(authActions.logout());
    }
  }
}

const authSaga = [
  takeLatest(AUTH_ACTIONS.FLOW, authFlow),
  takeLatest(AUTH_ACTIONS.REQ_LOGIN, login),
  takeLatest(AUTH_ACTIONS.REQ_REGISTER, register),
];

export default authSaga;
