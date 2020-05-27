/* eslint-disable no-undef */
/* eslint-disable no-unused-vars*/
import authApi from '../api/auth';
import { authActions } from '../reducers/auth';

export function register(value) {
  return async function (dispatch) {
    try {
      const data = await authApi.register(value);

      return data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return error;
      }
    }
  };
}
