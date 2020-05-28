/* eslint-disable no-undef */
import authApi from '../api/auth';
import { authActions } from '../reducers/auth';

export function register(value) {
  return async function (dispatch) {
    try {
      const { data: response } = await authApi.register(value);

      if (response.status === 200) {
        const { data } = response;
        const loginPayload = Object.freeze({
          token: data.token,
          user: data.user,
          type: data.type,
        });
        dispatch(authActions.login(loginPayload));
      }
      return response;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return error;
      }
    }
  };
}

export function login(value) {
  return async function (dispatch) {
    try {
      const { data: response } = await authApi.login(value);

      if (response.status === 200) {
        const { data } = response;
        const loginPayload = Object.freeze({
          token: data.token,
          user: data.user,
          type: data.type,
        });
        dispatch(authActions.login(loginPayload));
      }
      return response;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return error;
      }
    }
  };
}
