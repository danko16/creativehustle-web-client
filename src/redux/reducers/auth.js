export const AUTH_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/auth/set-data',
  LOGIN: 'myapp/auth/login',
  LOGOUT: 'myapp/auth/logout',
});

export const authActions = Object.freeze({
  setData: (field, value) => ({
    type: AUTH_ACTIONS.SET_DATA,
    field,
    value,
  }),
  login: (value) => ({
    type: AUTH_ACTIONS.LOGIN,
    value,
  }),
  logout: () => ({
    type: AUTH_ACTIONS.LOGOUT,
  }),
});

const initialState = {
  user: null,
  token: null,
  type: null,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case AUTH_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        user: value.user,
        token: value.token,
        type: value.type,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        type: null,
      };
    default:
      return state;
  }
};

export default reducer;
