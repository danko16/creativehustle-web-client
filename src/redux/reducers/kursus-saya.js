export const KURSUS_SAYA_ACTION = Object.freeze({
  SET_DATA: 'myapp/kursus-saya/set-data',
  REQ_KURSUS: 'myapp/kursus-saya/req/kursus',
  REQ_CONTENTS: 'myapp/kursus-saya/req/contents',
  REQ_REKOMENDASI: 'myapp/kursus-saya/req/rekomendasi',
  KURSUS: 'myapp/kursus-saya/kursus',
  CONTENTS: 'myapp/kursus-saya/contents',
  REKOMENDASI: 'myapp/kursus-saya/rekomendasi',
  REQ_CREATE_REVIEW: 'myapp/kursus-saya/req/create-review',
  REQ_DELETE_REVIEW: 'myapp/kursus-saya/req/delete-review',
  CREATE_REVIEW: 'myapp/kursus-saya/create-review',
  DELETE_REVIEW: 'myapp/kursus-saya/delete-review',
  FREE: 'myapp/kursus-saya/free',
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
  reqContents: (value) => ({
    type: KURSUS_SAYA_ACTION.REQ_CONTENTS,
    value,
  }),
  reqRekomendasi: () => ({
    type: KURSUS_SAYA_ACTION.REQ_REKOMENDASI,
  }),
  kursus: (value) => ({
    type: KURSUS_SAYA_ACTION.KURSUS,
    value,
  }),
  contents: (value) => ({
    type: KURSUS_SAYA_ACTION.CONTENTS,
    value,
  }),
  rekomendasi: (value) => ({
    type: KURSUS_SAYA_ACTION.REKOMENDASI,
    value,
  }),
  reqCreateReview: (value) => ({
    type: KURSUS_SAYA_ACTION.REQ_CREATE_REVIEW,
    value,
  }),
  reqDeleteReview: (value) => ({
    type: KURSUS_SAYA_ACTION.REQ_DELETE_REVIEW,
    value,
  }),
  createReview: (value) => ({
    type: KURSUS_SAYA_ACTION.CREATE_REVIEW,
    value,
  }),
  deleteReview: () => ({
    type: KURSUS_SAYA_ACTION.DELETE_REVIEW,
  }),
  free: (value) => ({
    type: KURSUS_SAYA_ACTION.FREE,
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
  materi_tambahan: [],
  rekomendasi: [],
  review: null,
  tel_group: '',
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
    case KURSUS_SAYA_ACTION.FREE:
    case KURSUS_SAYA_ACTION.REQ_REKOMENDASI:
    case KURSUS_SAYA_ACTION.REQ_KURSUS:
    case KURSUS_SAYA_ACTION.REQ_CONTENTS:
    case KURSUS_SAYA_ACTION.REQ_CREATE_REVIEW:
    case KURSUS_SAYA_ACTION.REQ_DELETE_REVIEW:
      return {
        ...state,
        loading: true,
      };
    case KURSUS_SAYA_ACTION.KURSUS:
      return {
        ...state,
        kursus: value.kursus,
        message: '',
        is_error: false,
        loading: false,
      };
    case KURSUS_SAYA_ACTION.CONTENTS:
      return {
        ...state,
        sections: value.sections,
        contents: value.contents,
        materi_tambahan: value.materi_tambahan,
        tel_group: value.tel_group,
        review: value.review,
        message: '',
        is_error: false,
        loading: false,
      };
    case KURSUS_SAYA_ACTION.CREATE_REVIEW:
      return {
        ...state,
        review: value,
        message: '',
        is_error: false,
        loading: false,
      };
    case KURSUS_SAYA_ACTION.DELETE_REVIEW:
      return {
        ...state,
        review: null,
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
