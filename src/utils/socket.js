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

export const loginEmmiter = (data) => {
  console.log(data);
  socket.emit('authentication', data.token);
};

export default socket;
