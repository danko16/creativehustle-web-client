export const INVOICE_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/invoice/set-data',
  REQ_INVOICE: 'myapp/invoice/req/invoice',
  INVOICE: 'myapp/invoice/invoice',
  ADD_INVOICE: 'myapp/invoice/add-invoice',
  CONFIRM_INVOICE: 'myapp/invoice/confirm-invoice',
  ERROR: 'myapp/invoice/error',
  CLEAR_ERROR: 'myapp/invoice/clear-error',
});

export const invoiceActions = Object.freeze({
  setData: (field, value) => ({
    type: INVOICE_ACTIONS.SET_DATA,
    field,
    value,
  }),
  reqInvoice: (value) => ({
    type: INVOICE_ACTIONS.REQ_INVOICE,
    value,
  }),
  invoice: (value) => ({
    type: INVOICE_ACTIONS.INVOICE,
    value,
  }),
  addInvoice: (value) => ({
    type: INVOICE_ACTIONS.ADD_INVOICE,
    value,
  }),
  confirmInvoice: (value, file) => ({
    type: INVOICE_ACTIONS.CONFIRM_INVOICE,
    value,
    file,
  }),
  error: (value) => ({
    type: INVOICE_ACTIONS.ERROR,
    value,
  }),
  clearError: () => ({
    type: INVOICE_ACTIONS.CLEAR_ERROR,
  }),
});

const initialState = {
  carts: [],
  prices: null,
  invoice: null,
  is_error: false,
  message: '',
  loading: false,
};

const reducer = (state = initialState, { type, field, value }) => {
  switch (type) {
    case INVOICE_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      };
    case INVOICE_ACTIONS.REQ_INVOICE:
    case INVOICE_ACTIONS.ADD_INVOICE:
    case INVOICE_ACTIONS.CONFIRM_INVOICE:
      return {
        ...state,
        loading: true,
      };
    case INVOICE_ACTIONS.INVOICE:
      return {
        ...state,
        carts: value.carts_payload,
        prices: value.prices,
        invoice: value.invoice,
        is_error: false,
        loading: false,
        message: '',
      };
    case INVOICE_ACTIONS.ERROR:
      return {
        ...state,
        message: value,
        is_error: true,
        loading: false,
      };
    case INVOICE_ACTIONS.CLEAR_ERROR:
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
