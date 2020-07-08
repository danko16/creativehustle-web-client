export const KELAS_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/kelas/set-data',
  REQ_KELAS: 'myapp/kelas/req-kelas',
  KELAS: 'myapp/kelas/kelas',
  ERROR: 'myapp/kelas/error',
  CLEAR_ERROR: 'myapp/kelas/clear-error',
});

export const kelasActions = Object.freeze({
  setData: (field, value) => ({
    type: KELAS_ACTIONS.SET_DATA,
    field,
    value,
  }),
  reqKelas: (value) => ({
    type: KELAS_ACTIONS.REQ_KELAS,
    value,
  }),
  kelas: (value) => ({
    type: KELAS_ACTIONS.KELAS,
    value,
  }),
  error: (value) => ({
    type: KELAS_ACTIONS.ERROR,
    value,
  }),
  clearError: () => ({
    type: KELAS_ACTIONS.CLEAR_ERROR,
  }),
});

const initialState = {
  kelas: [],
  message: '',
  is_error: false,
  loading: false,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case KELAS_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case KELAS_ACTIONS.REQ_KELAS:
    case KELAS_ACTIONS.KELAS:
      return {
        ...state,
        kelas: value,
        message: '',
        is_error: false,
        loading: false,
      };
    case KELAS_ACTIONS.ERROR:
      return {
        ...state,
        message: value,
        is_error: true,
        loading: false,
      };
    case KELAS_ACTIONS.CLEAR_ERROR:
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
