export const KURSUS_SAYA_ACTION = Object.freeze({
  SET_DATA: 'myapp/kursus-saya/set-data',
  REQ_KURSUS: 'myapp/kursus-saya/req-kursus',
  REQ_REKOMENDASI: 'myapp/kursus-saya/req-rekomendasi',
  KURSUS: 'myapp/kursus-saya/kursus',
  REKOMENDASI: 'myapp/kursus-saya/rekomendasi',
  DONE: 'myapp/kursus-saya/done',
  ERROR: 'myapp/kursus-saya/error',
  CLEAR_ERROR: 'myapp/kursus-saya/clear-error',
});

export const kursusSayaAction = Object.freeze({
  setData: (field, value) => ({
    type: KURSUS_SAYA_ACTION.SET_DATA,
    field,
    value,
  }),
  reqKursus: () => ({
    type: KURSUS_SAYA_ACTION.REQ_KURSUS,
  }),
  reqRekomendasi: () => ({
    type: KURSUS_SAYA_ACTION.REQ_REKOMENDASI,
  }),
  kursus: (value) => ({
    type: KURSUS_SAYA_ACTION.KURSUS,
    value,
  }),
  rekomendasi: (value) => ({
    type: KURSUS_SAYA_ACTION.REKOMENDASI,
    value,
  }),
  done: (value) => ({
    type: KURSUS_SAYA_ACTION.DONE,
    value,
  }),
  error: (value) => ({
    type: KURSUS_SAYA_ACTION.ERROR,
    value,
  }),
  clearError: () => ({
    type: KURSUS_SAYA_ACTION.CLEAR_ERROR,
  }),
});

const initialState = {
  kursus: [],
  sections: [],
  contents: [],
  rekomendasi: [],
  message: '',
  is_error: false,
  loading: false,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case KURSUS_SAYA_ACTION.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case KURSUS_SAYA_ACTION.DONE:
    case KURSUS_SAYA_ACTION.REQ_REKOMENDASI:
    case KURSUS_SAYA_ACTION.REQ_KURSUS:
      return {
        ...state,
        loading: true,
      };
    case KURSUS_SAYA_ACTION.KURSUS:
      return {
        ...state,
        kursus: value.kursus,
        sections: value.sections,
        contents: value.contents,
        message: '',
        is_error: false,
        loading: false,
      };
    case KURSUS_SAYA_ACTION.REKOMENDASI:
      return {
        ...state,
        rekomendasi: value,
        message: '',
        is_error: false,
        loading: false,
      };
    case KURSUS_SAYA_ACTION.ERROR:
      return {
        ...state,
        message: value,
        is_error: true,
        loading: false,
      };
    case KURSUS_SAYA_ACTION.CLEAR_ERROR:
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
