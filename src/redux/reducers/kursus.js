export const KURSUS_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/kursus/set-data',
  REQ_KURSUS: 'myapp/kursus/req-kursus',
  KURSUS: 'myapp/kursus/kursus',
  ERROR: 'myapp/kursus/error',
  CLEAR_ERROR: 'myapp/kursus/clear-error',
});

export const kursusActions = Object.freeze({
  setData: (field, value) => ({
    type: KURSUS_ACTIONS.SET_DATA,
    field,
    value,
  }),
  reqKursus: (value) => ({
    type: KURSUS_ACTIONS.REQ_KURSUS,
    value,
  }),
  kursus: (value) => ({
    type: KURSUS_ACTIONS.KURSUS,
    value,
  }),
  error: (value) => ({
    type: KURSUS_ACTIONS.ERROR,
    value,
  }),
  clearError: () => ({
    type: KURSUS_ACTIONS.CLEAR_ERROR,
  }),
});

const initialState = {
  kursus: [],
  sections: [],
  contents: [],
  message: '',
  is_error: false,
  loading: false,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case KURSUS_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case KURSUS_ACTIONS.REQ_KURSUS:
      return {
        ...state,
        loading: true,
      };
    case KURSUS_ACTIONS.KURSUS:
      return {
        ...state,
        kursus: value.kursus,
        sections: value.sections,
        contents: value.contents,
        message: '',
        is_error: false,
        loading: false,
      };
    case KURSUS_ACTIONS.ERROR:
      return {
        ...state,
        message: value,
        is_error: true,
        loading: false,
      };
    case KURSUS_ACTIONS.CLEAR_ERROR:
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
