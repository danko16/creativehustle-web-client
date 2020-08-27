export const WEBINAR_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/webinar/set-data',
  REQ_WEBINAR: 'myapp/webinar/req/webinar',
  REQ_CARI_WEBINAR: 'myapp/webinar/req/cari-webinar',
  WEBINAR: 'myapp/webinar/webinar',
  ERROR: 'myapp/webinar/error',
  CLEAR_ERROR: 'myapp/webinar/clear-error',
});

export const webinarActions = Object.freeze({
  setData: (field, value) => ({
    type: WEBINAR_ACTIONS.SET_DATA,
    field,
    value,
  }),
  reqWebinar: (value) => ({
    type: WEBINAR_ACTIONS.REQ_WEBINAR,
    value,
  }),
  reqCariWebinar: (value) => ({
    type: WEBINAR_ACTIONS.REQ_CARI_WEBINAR,
    value,
  }),
  webinar: (value) => ({
    type: WEBINAR_ACTIONS.WEBINAR,
    value,
  }),
  error: (value) => ({
    type: WEBINAR_ACTIONS.ERROR,
    value,
  }),
  clearError: () => ({
    type: WEBINAR_ACTIONS.CLEAR_ERROR,
  }),
});

const initialState = {
  webinar: [],
  message: '',
  is_error: false,
  loading: false,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case WEBINAR_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case WEBINAR_ACTIONS.REQ_WEBINAR:
    case WEBINAR_ACTIONS.REQ_CARI_WEBINAR:
      return {
        ...state,
        loading: true,
      };
    case WEBINAR_ACTIONS.WEBINAR:
      return {
        ...state,
        webinar: value,
        message: '',
        is_error: false,
        loading: false,
      };
    case WEBINAR_ACTIONS.ERROR:
      return {
        ...state,
        message: value,
        is_error: true,
        loading: false,
      };
    case WEBINAR_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        message: '',
        is_error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
