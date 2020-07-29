import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { invoiceActions } from '../redux/reducers/invoice';
import Invoice from '../shared/invoice';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  recent_invoice: state.invoice.recent_invoice,
  message: state.invoice.message,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqInvoice: invoiceActions.reqInvoice,
      setData: invoiceActions.setData,
    },
    dispatch
  );

function InvoiceRecent({ reqInvoice, recent_invoice, user, setData, message }) {
  const [error, setError] = useState({
    invoiceId: '',
  });
  const [invoiceId, setInvoiceId] = useState();

  useEffect(() => {
    if (message) {
      setError({
        invoiceId: message,
      });
      setData('message', '');
    }
  }, [message, setData]);

  return recent_invoice && user ? (
    <Invoice invoiceId={recent_invoice.id} setInvoiceId={setInvoiceId} mode="recent" />
  ) : (
    <div className="empty-invoice">
      <h2>Silahkan Masukan No Invoice</h2>
      <p>
        masukan no invoice untuk melihat
        <br /> invoice anda
      </p>
      <div
        className="form-group"
        style={{
          position: 'relative',
        }}
      >
        <label className="invoice-hint-trigger" htmlFor="invoiceId">
          No Invoice <i className="fa fa-question-circle" aria-hidden="true"></i>
        </label>
        <img className="invoice-hint" src="/assets/img/invoice_id.png" alt="invoice hint" />
        <input
          onChange={(e) => {
            setInvoiceId(e.target.value);
          }}
          onInputCapture={() => {
            setError((prevState) => ({
              ...prevState,
              invoiceId: '',
            }));
          }}
          type="number"
          name="invoiceId"
          className={ClassNames('form-control', { 'error-form': error.invoiceId })}
        />
        <small
          className={ClassNames('error-text form-text d-none', {
            'd-block': error.invoiceId,
          })}
        >
          {error.invoiceId}
        </small>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="cari-invoice"
          onClick={() => {
            let isValid = true;
            setError({
              invoiceId: '',
            });

            if (!invoiceId) {
              isValid = false;
              setError((state) => ({ ...state, invoiceId: 'Tolong masukan invoice id' }));
            }

            if (isValid) {
              reqInvoice({ invoice_id: invoiceId }, 'recent');
            }
          }}
        >
          Cari Invoice
        </div>
        <Link
          className="cari-invoice"
          to="/dashboard/billing"
          style={{ marginLeft: '20px', backgroundColor: '#38a2ff' }}
        >
          Lihat Daftar
        </Link>
      </div>
    </div>
  );
}

InvoiceRecent.propTypes = {
  reqInvoice: PropTypes.func,
  recent_invoice: PropTypes.object,
  setData: PropTypes.func,
  showModal: PropTypes.func,
  user: PropTypes.object,
  message: PropTypes.string,
};

export default connect(mapStateToProps, mapActionToProps)(InvoiceRecent);
