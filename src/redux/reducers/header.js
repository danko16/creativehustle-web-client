export const HEADER_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/header/set-data',
  SHOW_MODAL: 'myapp/header/show-login',
});

export const headerActions = Object.freeze({
  setData: (field, value) => ({
    type: HEADER_ACTIONS.SET_DATA,
    field,
    value,
  }),
  showModal: (value) => ({
    type: HEADER_ACTIONS.SHOW_MODAL,
    value,
  }),
});

const initialState = {
  show: false,
  type: null,
  pembelian: true,
};

const reducer = (state = initialState, { value, field, type }) => {
  switch (type) {
    case HEADER_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case HEADER_ACTIONS.SHOW_MODAL:
      return {
        ...state,
        show: value.show,
        type: value.type,
      };
    default:
      return state;
  }
};

export default reducer;
