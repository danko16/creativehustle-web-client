export const CATEGORY_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/category/set-data',
  CATEGORIES: 'myapp/category/categories',
  ERROR: 'myapp/category/error',
  CLEAR_ERROR: 'myapp/category/clear-error',
});

export const categoryActions = Object.freeze({
  setData: (field, value) => ({
    type: CATEGORY_ACTIONS.SET_DATA,
    field,
    value,
  }),
  categories: (value) => ({
    type: CATEGORY_ACTIONS.CATEGORIES,
    value,
  }),
  error: (value) => ({
    type: CATEGORY_ACTIONS.ERROR,
    value,
  }),
  clearError: () => ({
    type: CATEGORY_ACTIONS.CLEAR_ERROR,
  }),
});

const initialState = {
  categories: [],
  sub_categories: [],
  loading: false,
  message: '',
  is_error: false,
};

const reducers = function (state = initialState, { type, value, field }) {
  switch (type) {
    case CATEGORY_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case CATEGORY_ACTIONS.CATEGORIES:
      return {
        ...state,
        categories: value.categories,
        sub_categories: value.sub_categories,
        loading: false,
        is_error: false,
      };
    case CATEGORY_ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        message: value,
        is_error: true,
      };
    case CATEGORY_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        message: '',
        is_error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
