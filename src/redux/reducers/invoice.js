import { AUTH_ACTIONS } from './auth';

export const INVOICE_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/invoice/set-data',
  INVOICES: 'myapp/invoice',
  REQ_INVOICE: 'myapp/invoice/req/invoice',
  INVOICE: 'myapp/invoice/invoice',
  DETAIL_INVOICE: 'myapp/invoice/detail',
  ADD_INVOICE: 'myapp/invoice/add',
  REQ_CONFIRM_INVOICE: 'myapp/invoice/req/confirm',
  CONFIRM_INVOICE: 'myapp/invoice/confirm',
  ERROR: 'myapp/invoice/error',
  CLEAR_ERROR: 'myapp/invoice/clear-error',
});

export const invoiceActions = Object.freeze({
  setData: (field, value) => ({
    type: INVOICE_ACTIONS.SET_DATA,
    field,
    value,
  }),
  invoices: (value) => ({
    type: INVOICE_ACTIONS.INVOICES,
    value,
  }),
  reqInvoice: (value, mode) => ({
    type: INVOICE_ACTIONS.REQ_INVOICE,
    value,
    mode,
  }),
  invoice: (value) => ({
    type: INVOICE_ACTIONS.INVOICE,
    value,
  }),
  detailInvoice: (value) => ({
    type: INVOICE_ACTIONS.DETAIL_INVOICE,
    value,
  }),
  addInvoice: (value) => ({
    type: INVOICE_ACTIONS.ADD_INVOICE,
    value,
  }),
  reqConfirmInvoice: (value, file) => ({
    type: INVOICE_ACTIONS.REQ_CONFIRM_INVOICE,
    value,
    file,
  }),
  confirmInvoice: (value) => ({
    type: INVOICE_ACTIONS.CONFIRM_INVOICE,
    value,
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
  invoices: null,
  recent_invoice: null,
  detail_invoice: null,
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
    case INVOICE_ACTIONS.REQ_CONFIRM_INVOICE:
      return {
        ...state,
        loading: true,
      };
    case INVOICE_ACTIONS.INVOICE:
      return {
        ...state,
        recent_invoice: value,
        is_error: false,
        loading: false,
        message: '',
      };
    case INVOICE_ACTIONS.DETAIL_INVOICE:
      return {
        ...state,
        detail_invoice: value,
        is_error: false,
        loading: false,
        message: '',
      };
    case INVOICE_ACTIONS.CONFIRM_INVOICE:
      return {
        ...state,
        loading: false,
        message: value,
      };
    case INVOICE_ACTIONS.INVOICES:
      return {
        ...state,
        loading: false,
        invoices: value,
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
    case AUTH_ACTIONS.LOGOUT:
      return {
        invoices: null,
        recent_invoice: null,
        detail_invoice: null,
        is_error: false,
        message: '',
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
