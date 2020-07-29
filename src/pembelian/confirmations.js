import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import ClassNames from 'classnames';
import { invoiceActions } from '../redux/reducers/invoice';
import ResponseMessage from '../shared/responseMessage';

import 'react-datepicker/dist/react-datepicker.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  recent_invoice: state.invoice.recent_invoice,
  message: state.invoice.message,
  is_error: state.invoice.is_error,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    { reqConfirmInvoice: invoiceActions.reqConfirmInvoice, clearMsg: invoiceActions.clearError },
    dispatch
  );

function Confirmations({ user, recent_invoice, reqConfirmInvoice, clearMsg, message, is_error }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [payAmount, setPayAmount] = useState(0);
  const [bankReceiver, setBankReceiver] = useState('BNI');
  const [bankSender, setBankSender] = useState({
    name: '',
    rekening: '',
  });
  const [invoiceId, setInvoiceId] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');
  const [buktiPembayaran, setBuktiPembayaran] = useState('');
  const [error, setError] = useState({
    name: '',
    email: '',
    date: '',
    payAmount: '',
    bankSenderName: '',
    bankSenderRek: '',
    invoiceId: '',
    image: '',
  });
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }

    if (recent_invoice && user) {
      setPayAmount(recent_invoice.total_amount);
      setInvoiceId(recent_invoice.id);
    }
  }, [user, recent_invoice]);

  useEffect(() => {
    if (message) {
      setNotification({
        text: message,
        isError: is_error,
      });
      clearMsg();
    }
  }, [is_error, message, clearMsg]);

  function handleImageChange(e) {
    setError((state) => ({ ...state, image: '' }));
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.split('/')[1];
      let size = e.target.files[0].size;

      if (!type || !type.match(/(jpe?g|png|gif|pdf)/)) {
        setError((state) => ({ ...state, image: 'file type harus jpg, png, gif atau pdf' }));
        return;
      }

      if (size > 5000000) {
        setError((state) => ({ ...state, image: 'file tidak boleh lebih dari 5mb' }));
        return;
      }
      setBuktiPembayaran(e.target.files[0]);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    let isValid = true;
    setError({
      name: '',
      email: '',
      date: '',
      payAmount: '',
      bankSenderName: '',
      bankSenderRek: '',
      invoiceId: '',
      image: '',
    });
    //eslint-disable-next-line
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!name) {
      isValid = false;
      setError((state) => ({ ...state, name: 'Tolong masukan nama' }));
    }

    if (!email.match(emailFormat)) {
      setError((prevState) => ({
        ...prevState,
        email: 'Email Tidak valid',
      }));
      isValid = false;
    }

    if (!payAmount) {
      isValid = false;
      setError((state) => ({ ...state, payAmount: 'Tolong masukan jumlah pembayaran' }));
    }

    if (!bankSender.name) {
      isValid = false;
      setError((state) => ({ ...state, bankSenderName: 'Tolong masukan nama pengirim' }));
    }

    if (!bankSender.rekening) {
      isValid = false;
      setError((state) => ({ ...state, bankSenderRek: 'Tolong masukan rekening pengirim' }));
    }

    if (!invoiceId) {
      isValid = false;
      setError((state) => ({ ...state, invoiceId: 'Tolong masukan nomor tagihan/invoice' }));
    }

    if (!buktiPembayaran) {
      isValid = false;
      setError((state) => ({ ...state, image: 'Tolong masukan bukti pembayaran' }));
    }

    if (isValid) {
      reqConfirmInvoice(
        {
          name,
          email,
          pay_date: date,
          pay_amount: payAmount,
          bank_destination: bankReceiver,
          sender_account_name: bankSender.name,
          sender_account: bankSender.rekening,
          invoice_id: invoiceId,
        },
        buktiPembayaran
      );
    }
  }

  return (
    <div className="container konfirmasi pb-5">
      <div
        style={{
          maxWidth: '30rem',
          margin: 'auto',
        }}
      >
        {notification.text && (
          <ResponseMessage
            notification={notification}
            onDismiss={() => {
              setNotification({ text: '', isError: false });
              clearMsg();
            }}
          />
        )}
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="name">
          Nama{' '}
        </label>
        <div className="col-md-4 col-sm-12">
          <input
            onInputCapture={() => {
              setError((prevState) => ({
                ...prevState,
                name: '',
              }));
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="name"
            name="name"
            autoComplete="name"
            value={name}
            className={ClassNames('form-control', { 'error-form': error.name })}
            disabled
            style={{
              backgroundColor: '#eaeaea',
            }}
          />
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.name,
            })}
          >
            {error.name}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="email">
          Email{' '}
        </label>
        <div className="col-md-4 col-sm-12">
          <input
            onInputCapture={() => {
              setError((prevState) => ({
                ...prevState,
                email: '',
              }));
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            value={email}
            autoComplete="email"
            className={ClassNames('form-control', { 'error-form': error.email })}
            disabled
            style={{
              backgroundColor: '#eaeaea',
            }}
          />
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.email,
            })}
          >
            {error.email}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="date">
          Tanggal Pembayaran{' '}
        </label>
        <div className="col-md-4 col-sm-12 d-flex">
          <i className="label-bg fa fa-calendar" aria-hidden="true"></i>
          <DatePicker
            className={ClassNames('form-control with-label-bg', { 'error-form': error.date })}
            selected={date}
            onChange={(val) => {
              setDate(val);
            }}
            dateFormat="dd/MM/yyyy"
          />
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.date,
            })}
          >
            {error.date}
          </small>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="payAmmount">
          Jumlah Pembayaran{' '}
        </label>
        <div className="col-md-4 col-sm-12">
          <div className="d-flex">
            <span
              className="label-bg"
              style={{
                fontSize: 14,
              }}
            >
              Rp.{' '}
            </span>
            <input
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  payAmount: '',
                }));
              }}
              onChange={(e) => {
                setPayAmount(e.target.value);
              }}
              type="number"
              name="payAmount"
              value={payAmount}
              className={ClassNames('form-control with-label-bg', {
                'error-form': error.payAmount,
              })}
            />
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.payAmount,
            })}
          >
            {error.payAmount}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12">Bank Tujuan</label>
        <div className="col-md-4 col-sm-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              value={bankReceiver === 'BNI'}
              onChange={() => {
                setBankReceiver({
                  bni: true,
                  mandiri: false,
                  btpn: false,
                });
              }}
              checked={bankReceiver === 'BNI'}
            />
            <label
              onClick={() => {
                setBankReceiver('BNI');
              }}
              className="form-check-label"
            >
              BNI
            </label>
            <div className="bank-wrapper">
              <img src="/assets/img/rek_bni.png" alt="rekening" />
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              onChange={() => {
                setBankReceiver('MANDIRI');
              }}
              value={bankReceiver === 'MANDIRI'}
              checked={bankReceiver === 'MANDIRI'}
            />
            <label
              onClick={() => {
                setBankReceiver('MANDIRI');
              }}
              className="form-check-label"
            >
              MANDIRI
            </label>
            <div className="bank-wrapper">
              <img src="/assets/img/rek_mandiri.png" alt="rekening" />
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              onChange={() => {
                setBankReceiver('BTPN');
              }}
              value={bankReceiver === 'BTPN'}
              checked={bankReceiver === 'BTPN'}
            />
            <label
              onClick={() => {
                setBankReceiver('BTPN');
              }}
              className="form-check-label"
            >
              BTPN
            </label>
            <div className="bank-wrapper">
              <img src="/assets/img/rek_btpn.png" alt="rekening" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="bankSenderRek">
          Rekening Pengirim{' '}
        </label>
        <div className="col-md-4 col-sm-12">
          <input
            onInputCapture={() => {
              setError((prevState) => ({
                ...prevState,
                bankSenderRek: '',
              }));
            }}
            onChange={(e) => {
              setBankSender({
                ...bankSender,
                rekening: e.target.value,
              });
            }}
            type="number"
            name="bankSenderRek"
            value={bankSender.rekening}
            className={ClassNames('form-control', { 'error-form': error.bankSenderRek })}
          />
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.bankSenderRek,
            })}
          >
            {error.bankSenderRek}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="bankSenderName">
          Nama Pengirim{' '}
        </label>
        <div className="col-md-4 col-sm-12">
          <input
            onInputCapture={() => {
              setError((prevState) => ({
                ...prevState,
                bankSenderName: '',
              }));
            }}
            onChange={(e) => {
              setBankSender({
                ...bankSender,
                name: e.target.value,
              });
            }}
            type="name"
            name="bankSenderName"
            value={bankSender.name}
            autoComplete="name"
            className={ClassNames('form-control', { 'error-form': error.bankSenderName })}
          />
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.bankSenderName,
            })}
          >
            {error.bankSenderName}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label className="invoice-hint-trigger col-md-4 col-sm-12" htmlFor="invoiceId">
          No. Tagihan/Invoice <i className="fa fa-question-circle" aria-hidden="true"></i>
        </label>
        <img className="invoice-hint" src="/assets/img/invoice_id.png" alt="invoice hint" />
        <div className="col-md-4 col-sm-12">
          <div className="d-flex">
            <span
              className="label-bg"
              style={{
                fontSize: 20,
              }}
            >
              #{' '}
            </span>
            <input
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  invoiceId: '',
                }));
              }}
              onChange={(e) => {
                setInvoiceId(e.target.value);
              }}
              type="text"
              name="invoiceId"
              value={invoiceId}
              className={ClassNames('form-control with-label-bg', {
                'error-form': error.invoiceId,
              })}
            />
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.invoiceId,
            })}
          >
            {error.invoiceId}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="additionalMessage">
          Pesan Tambahan{' '}
        </label>
        <div className="col-md-4 col-sm-12">
          <textarea
            onChange={(e) => {
              setAdditionalMessage(e.target.value);
            }}
            type="text"
            name="additionalMessage"
            value={additionalMessage}
            placeholder="optional"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-4 col-sm-12" htmlFor="additionalMessage">
          Bukti Transaksi{' '}
        </label>

        <div className="input-group col-md-4 col-sm-12" id="buktiUpload">
          <span className="input-group-btn">
            <label className="custom-file-upload browse btn btn-primary">
              <input
                type="file"
                onChange={handleImageChange}
                style={{
                  display: 'none',
                }}
              />
              <i className="fa fa-search"></i> Browse
            </label>
          </span>
          <div>
            {buktiPembayaran.name ? (
              <div
                style={{
                  marginLeft: '12px',
                  color: '#000',
                  marginTop: '10px',
                }}
              >
                {buktiPembayaran.name}
              </div>
            ) : (
              <small>
                &nbsp;&nbsp;&nbsp;<code>5MB max (JPG, PNG, GIF &amp; PDF)</code>
              </small>
            )}
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.image,
            })}
          >
            {error.image}
          </small>
        </div>
      </div>
      <button className="btn-confirm" type="submit" onClick={handleOnSubmit}>
        Konfirmasi
      </button>
    </div>
  );
}

Confirmations.propTypes = {
  recent_invoice: PropTypes.object,
  user: PropTypes.object,
  reqConfirmInvoice: PropTypes.func,
  clearMsg: PropTypes.func,
  message: PropTypes.string,
  is_error: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(Confirmations);
