export const AUTH_ACTIONS = Object.freeze({
  FLOW: 'myapp/auth/flow',
  SET_DATA: 'myapp/auth/set-data',
  REQ_LOGIN: 'myapp/auth/req-login',
  REQ_REGISTER: 'myapp/auth/req-register',
  LOGIN: 'myapp/auth/login',
  REGISTER: 'myapp/auth/register',
  LOGOUT: 'myapp/auth/logout',
  ERROR: 'myapp/auth/error',
  CLEAR_ERROR: 'myapp/auth/clear-error',
});

export const authActions = Object.freeze({
  authFlow: () => ({
    type: AUTH_ACTIONS.FLOW,
  }),
  setData: (field, value) => ({
    type: AUTH_ACTIONS.SET_DATA,
    field,
    value,
  }),
  reqLogin: (value) => ({
    type: AUTH_ACTIONS.REQ_LOGIN,
    value,
  }),
  reqRegister: (value) => ({
    type: AUTH_ACTIONS.REQ_REGISTER,
    value,
  }),
  login: (value) => ({
    type: AUTH_ACTIONS.LOGIN,
    value,
  }),
  register: (value) => ({
    type: AUTH_ACTIONS.REGISTER,
    value,
  }),
  logout: () => ({
    type: AUTH_ACTIONS.LOGOUT,
  }),
  error: (value) => ({
    type: AUTH_ACTIONS.ERROR,
    value,
  }),
  clearError: () => ({
    type: AUTH_ACTIONS.CLEAR_ERROR,
  }),
});

const initialState = {
  is_authorized: false,
  user: null,
  token: null,
  type: '',
  message: '',
  is_error: false,
  loading: false,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case AUTH_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case AUTH_ACTIONS.FLOW:
    case AUTH_ACTIONS.REQ_LOGIN:
    case AUTH_ACTIONS.REQ_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case AUTH_ACTIONS.REGISTER:
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        is_authorized: true,
        user: value.user,
        token: value.token,
        type: value.type,
        message: value.message,
        is_error: false,
        loading: false,
      };
    case AUTH_ACTIONS.ERROR:
      return {
        ...state,
        is_authorized: false,
        message: value,
        is_error: true,
        loading: false,
      };
    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        message: '',
        is_error: false,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        is_authorized: false,
        user: null,
        token: null,
        type: '',
        message: '',
        is_error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
