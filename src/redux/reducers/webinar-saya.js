export const WEBINAR_SAYA_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/webinar-saya/set-data',
  FREE: 'myapp/webinar-saya/free',
  REQ_SCHEDULES: 'myapp/webinar-saya/req/schedules',
  WEBINAR: 'myapp/webinar-saya/webinar',
  SCHEDULES: 'myapp/webinar-saya/schedules',
  ERROR: 'myapp/webinar-saya/error',
  CLEAR_ERROR: 'myapp/webinar-saya/clear-error',
});

export const webinarSayaActions = Object.freeze({
  setData: (field, value) => ({ type: WEBINAR_SAYA_ACTIONS.SET_DATA, field, value }),
  free: (value) => ({ type: WEBINAR_SAYA_ACTIONS.FREE, value }),
  reqSchedules: (value) => ({ type: WEBINAR_SAYA_ACTIONS.REQ_SCHEDULES, value }),
  webinar: (value) => ({ type: WEBINAR_SAYA_ACTIONS.WEBINAR, value }),
  schedules: (value) => ({ type: WEBINAR_SAYA_ACTIONS.SCHEDULES, value }),
  error: (value) => ({ type: WEBINAR_SAYA_ACTIONS.ERROR, value }),
  clearError: () => ({ type: WEBINAR_SAYA_ACTIONS.CLEAR_ERROR }),
});

const initialState = {
  webinar: [],
  schedules: [],
  materi_tambahan: [],
  rekaman_webinar: null,
  tel_group: '',
  is_error: false,
  message: '',
  loading: false,
};

const reducer = (state = initialState, { value, field, type }) => {
  switch (type) {
    case WEBINAR_SAYA_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case WEBINAR_SAYA_ACTIONS.REQ_SCHEDULES:
    case WEBINAR_SAYA_ACTIONS.FREE:
      return {
        ...state,
        loading: true,
      };
    case WEBINAR_SAYA_ACTIONS.WEBINAR:
      return {
        ...state,
        webinar: value,
        loading: false,
      };
    case WEBINAR_SAYA_ACTIONS.SCHEDULES:
      return {
        ...state,
        schedules: value.schedules,
        materi_tambahan: value.materi_tambahan,
        tel_group: value.tel_group,
        is_error: false,
        loading: false,
      };
    case WEBINAR_SAYA_ACTIONS.ERROR:
      return {
        ...state,
        is_error: true,
        loading: false,
        message: value,
      };
    case WEBINAR_SAYA_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        is_error: false,
        loading: false,
        message: '',
      };
    default:
      return state;
  }
};

export default reducer;
