import { put, call, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getErrorMessage } from '../../utils/api';
import { invoiceActions, INVOICE_ACTIONS } from '../reducers/invoice';
import invoiceApi from '../api/invoice';

function* invoice({ value }) {
  try {
    const {
      data: { data },
    } = yield call(invoiceApi.invoice, value);
    if (data) {
      yield put(invoiceActions.invoice(data));
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
      yield put(push(`/pembelian/bayar/${data.invoice_id}`));
    }
  } catch (error) {
    yield put(invoiceActions.error(getErrorMessage(error)));
  }
}

function* invoiceSaga() {
  try {
    yield all([takeLatest(INVOICE_ACTIONS.REQ_INVOICE, invoice)]);
    yield all([takeLatest(INVOICE_ACTIONS.ADD_INVOICE, addInvoice)]);
  } catch (error) {
    yield put(invoiceActions.error(getErrorMessage(error)));
  }
}

export default invoiceSaga;
