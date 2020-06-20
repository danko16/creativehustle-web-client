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
