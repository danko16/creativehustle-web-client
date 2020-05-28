import store from '../redux';

export const isAuthenticated = () => {
  try {
    const { auth } = store.getState();
    const now = new Date().getTime() / 1000;
    const { token } = auth;

    if (now > token.exp) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
};
