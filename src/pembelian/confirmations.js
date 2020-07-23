import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import ClassNames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  invoice: state.invoice.invoice,
  prices: state.invoice.prices,
  carts: state.invoice.carts,
});

function Confirmations({ invoice, user, prices, carts }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [payAmount, setPayAmount] = useState('');
  const [bankReceiver, setBankReceiver] = useState({
    bni: true,
    mandiri: false,
    btpn: false,
  });
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }

    if (invoice) {
      setPayAmount(invoice.pay_amount);
      setInvoiceId(invoice.id);
    }
  }, [user, invoice, prices, carts]);

  function handleImageChange(e) {
    setError((state) => ({ ...state, image: '' }));
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.split('/')[1];
      var isValid = /(jpe?g|png|gif|pdf)/i.test(type);

      if (!isValid) {
        setError((state) => ({ ...state, image: 'file type harus jpg, png, gif atau pdf' }));
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
      console.log(
        name,
        email,
        date,
        payAmount.replace(/\D/g, ''),
        bankReceiver,
        bankSender,
        invoiceId,
        buktiPembayaran
      );
    }
  }

  return (
    <div className="container konfirmasi pb-5">
      <div className="form-group row">
        <label className="col-sm-4 col-xs-12" htmlFor="name">
          Nama{' '}
        </label>
        <div className="col-sm-4 col-xs-12">
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
        <label className="col-sm-4 col-xs-12" htmlFor="email">
          Email{' '}
        </label>
        <div className="col-sm-4 col-xs-12">
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
        <label className="col-sm-4 col-xs-12" htmlFor="date">
          Tanggal Pembayaran{' '}
        </label>
        <div className="col-sm-4 col-xs-12 d-flex">
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
        <label className="col-sm-4 col-xs-12" htmlFor="payAmmount">
          Jumlah Pembayaran{' '}
        </label>
        <div className="col-sm-4 col-xs-12">
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
        <label className="col-sm-4 col-xs-12">Bank Tujuan</label>
        <div className="col-sm-4 col-xs-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              value={bankReceiver.bni}
              onChange={() => {
                setBankReceiver({
                  bni: true,
                  mandiri: false,
                  btpn: false,
                });
              }}
              checked={bankReceiver.bni}
            />
            <label
              onClick={() => {
                setBankReceiver({
                  bni: true,
                  mandiri: false,
                  btpn: false,
                });
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
                setBankReceiver({
                  bni: false,
                  mandiri: true,
                  btpn: false,
                });
              }}
              value={bankReceiver.mandiri}
              checked={bankReceiver.mandiri}
            />
            <label
              onClick={() => {
                setBankReceiver({
                  bni: false,
                  mandiri: true,
                  btpn: false,
                });
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
                setBankReceiver({
                  bni: false,
                  mandiri: false,
                  btpn: true,
                });
              }}
              value={bankReceiver.btpn}
              checked={bankReceiver.btpn}
            />
            <label
              onClick={() => {
                setBankReceiver({
                  bni: false,
                  mandiri: false,
                  btpn: true,
                });
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
        <label className="col-sm-4 col-xs-12" htmlFor="bankSenderRek">
          Nomor Rekening Pengirim{' '}
        </label>
        <div className="col-sm-4 col-xs-12">
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
        <label className="col-sm-4 col-xs-12" htmlFor="bankSenderName">
          Nama Rekening Pengirim{' '}
        </label>
        <div className="col-sm-4 col-xs-12">
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
        <label className="col-sm-4 col-xs-12" htmlFor="invoiceId">
          No. Tagihan/Invoice{' '}
        </label>
        <div className="col-sm-4 col-xs-12">
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
        <label className="col-sm-4 col-xs-12" htmlFor="additionalMessage">
          Pesan Tambahan{' '}
        </label>
        <div className="col-sm-4 col-xs-12">
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
        <label className="col-sm-4 col-xs-12" htmlFor="additionalMessage">
          Bukti Transaksi{' '}
        </label>

        <div className="input-group col-sm-4 col-xs-12" id="buktiUpload">
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
  invoice: PropTypes.object,
  carts: PropTypes.array,
  prices: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(Confirmations);
