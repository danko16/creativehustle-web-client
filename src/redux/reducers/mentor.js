export const MENTOR_ACTION = Object.freeze({
  MENTORS: 'myapp/mentor',
  SET_DATA: 'myapp/mentor/set-data',
  ERROR: 'myapp/mentor/error',
  CLEAR_ERROR: 'myapp/mentor/clear-error',
});

export const mentorAction = Object.freeze({
  setData: (field, value) => ({
    type: MENTOR_ACTION.SET_DATA,
    field,
    value,
  }),
  mentors: (value) => ({
    type: MENTOR_ACTION.MENTORS,
    value,
  }),
  error: (value) => ({
    type: MENTOR_ACTION.ERROR,
    value,
  }),
  clearError: () => ({
    type: MENTOR_ACTION.CLEAR_ERROR,
  }),
});

const initialState = {
  mentors: [],
  loading: false,
  message: '',
  is_error: false,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case MENTOR_ACTION.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case MENTOR_ACTION.MENTORS:
      return {
        ...state,
        mentors: value,
        loading: false,
        message: '',
        is_error: false,
      };
    case MENTOR_ACTION.ERROR:
      return {
        ...state,
        message: value,
        is_error: true,
        loading: false,
      };
    case MENTOR_ACTION.CLEAR_ERROR:
      return {
        ...state,
        message: '',
        loading: false,
        is_error: false,
      };
    default:
      return state;
  }
};

export default reducer;
