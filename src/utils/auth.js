import { store } from '../redux';

export const isAuthenticated = () => {
  try {
    const { auth } = store.getState();
    const now = new Date().getTime() / 1000;
    const { token } = auth;

    if (now > token.exp || !auth.is_authorized) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
};

export const getErrorMessage = ({ message, response, request }) => {
  let msg = message;
  if (message === 'Network Error') {
    return 'networkError';
  }
  if (request) {
    const { _timedOut: timedOut } = request;
    if (timedOut) {
      return 'Tolong periksa koneksi internet Anda.';
    }
  }
  if (response && response.data && response.data.message) {
    if (response.status === 403 || response.status === 401) {
      return 'unAuthorized';
    }
    if (response.status === 426) {
      return 'needUpgrade';
    }
    if (Array.isArray(response.data.message)) {
      msg = response.data.message.reduce((acc, itr) => {
        if (itr.msg) {
          const separator = `${itr.param}: ${itr.msg}, `;
          return acc + separator;
        } else if (itr.message) {
          const separator = `${itr.message}, `;
          return acc + separator;
        }
        return itr.msg;
      }, '');
    } else {
      msg = response.data.message;
      return msg;
    }
  }
  return msg;
};
