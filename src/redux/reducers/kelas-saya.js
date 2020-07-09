export const KELAS_SAYA_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/kelas-saya/set-data',
  SUBSCRIBE: 'myapp/kelas-saya/subscribe',
  REQ_SCHEDULES: 'myapp/kelas-saya/req/schedules',
  KELAS: 'myapp/kelas-saya/kelas',
  SCHEDULES: 'myapp/kelas-saya/schedules',
  ERROR: 'myapp/kelas-saya/error',
  CLEAR_ERROR: 'myapp/kelas-saya/clear-error',
});

export const kelasSayaActions = Object.freeze({
  setData: (field, value) => ({ type: KELAS_SAYA_ACTIONS.SET_DATA, field, value }),
  subscribe: (value) => ({ type: KELAS_SAYA_ACTIONS.SUBSCRIBE, value }),
  reqSchedules: (value) => ({ type: KELAS_SAYA_ACTIONS.REQ_SCHEDULES, value }),
  kelas: (value) => ({ type: KELAS_SAYA_ACTIONS.KELAS, value }),
  schedules: (value) => ({ type: KELAS_SAYA_ACTIONS.SCHEDULES, value }),
  error: (value) => ({ type: KELAS_SAYA_ACTIONS.ERROR, value }),
  clearError: () => ({ type: KELAS_SAYA_ACTIONS.CLEAR_ERROR }),
});

const initialState = {
  kelas: [],
  schedules: [],
  materi_tambahan: [],
  rekaman_kelas: null,
  tel_group: '',
  is_error: false,
  message: '',
  loading: false,
};

const reducer = (state = initialState, { value, field, type }) => {
  switch (type) {
    case KELAS_SAYA_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case KELAS_SAYA_ACTIONS.REQ_SCHEDULES:
    case KELAS_SAYA_ACTIONS.SUBSCRIBE:
      return {
        ...state,
        loading: true,
      };
    case KELAS_SAYA_ACTIONS.KELAS:
      return {
        ...state,
        kelas: value,
        loading: false,
      };
    case KELAS_SAYA_ACTIONS.SCHEDULES:
      return {
        ...state,
        schedules: value.schedules,
        materi_tambahan: value.materi_tambahan,
        tel_group: value.tel_group,
        is_error: false,
        loading: false,
      };
    case KELAS_SAYA_ACTIONS.ERROR:
      return {
        ...state,
        is_error: true,
        loading: false,
        message: value,
      };
    case KELAS_SAYA_ACTIONS.CLEAR_ERROR:
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
