import { put, call, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getErrorMessage } from '../../utils/api';
import { invoiceActions, INVOICE_ACTIONS } from '../reducers/invoice';
import invoiceApi from '../api/invoice';

function* invoices() {
  try {
    yield put(invoiceActions.setData('loading', true));
    const {
      data: { data },
    } = yield call(invoiceApi.invoices);
    if (data) {
      yield put(invoiceActions.invoices(data));
    }
  } catch (error) {
    yield put(invoiceActions.error(getErrorMessage(error)));
  }
}

function* invoice({ value, mode }) {
  try {
    const {
      data: { data },
    } = yield call(invoiceApi.invoice, value);
    if (data) {
      if (mode === 'recent') {
        yield put(invoiceActions.invoice(data));
      } else if (mode === 'detail') {
        yield put(invoiceActions.detailInvoice(data));
      }
    }
  } catch (error) {
    yield put(invoiceActions.error(getErrorMessage(error)));
  }
}

function* addInvoice({ value }) {
  try {
    const {
      data: { data },
    } = yield call(invoiceApi.add, value);
    if (data) {
      yield put(invoiceActions.invoice(data));
      yield call(invoices);
      yield put(push(`/pembelian/bayar`));
    }
  } catch (error) {
    yield put(invoiceActions.error(getErrorMessage(error)));
  }
}

function* confirm({ value, file }) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const {
      data: { data, message },
    } = yield call(invoiceApi.confirm, { payload: value, formData });
    if (data) {
      yield call(invoices);
      yield put(invoiceActions.confirmInvoice(message));
    }
  } catch (error) {
    yield put(invoiceActions.error(getErrorMessage(error)));
  }
}

function* invoiceSaga() {
  try {
    yield call(invoices);
    yield all([
      takeLatest(INVOICE_ACTIONS.REQ_INVOICE, invoice),
      takeLatest(INVOICE_ACTIONS.ADD_INVOICE, addInvoice),
      takeLatest(INVOICE_ACTIONS.REQ_CONFIRM_INVOICE, confirm),
    ]);
  } catch (error) {
    yield put(invoiceActions.error(getErrorMessage(error)));
  }
}

export default invoiceSaga;
