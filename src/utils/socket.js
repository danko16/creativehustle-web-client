/*eslint-disable*/
import io from 'socket.io-client';
import { store } from '../redux';

const socket = io.connect('http://localhost:3000');

socket.on('connect', function () {
  const { auth } = store.getState();
  socket.emit('authentication', auth.token);
  socket.on('authenticated', function () {});
  socket.on('unauthorized', function (err) {
    console.log(err.message);
  });
});

socket.on('error', function (err) {
  console.log('received socket error:');
  console.log(err);
});

const loginEmmiter = (data) => {
  console.log(data);
  socket.emit('authentication', data.token);
};

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

export default socket;
