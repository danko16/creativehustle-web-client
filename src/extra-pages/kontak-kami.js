import React, { useState, useEffect } from 'react';
import ClassNames from 'classnames';
import ResponseMessage from '../shared/responseMessage';
import { Api } from '../utils/api';

import './kontak-kami.css';

function KontakKami() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inRegard, setInRegard] = useState('');
  const [message, setMessage] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState({
    name: '',
    email: '',
    inRegard: '',
    message: '',
    confirm: '',
  });
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    //eslint-disable-next-line
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (!email.match(emailFormat)) {
      setError((prevState) => ({
        ...prevState,
        email: 'Email tidak valid',
      }));
      isValid = false;
    }
    if (name.length < 4) {
      setError((prevState) => ({ ...prevState, name: 'Panjang nama minimal 4 karakter' }));
      isValid = false;
    }

    if (!inRegard) {
      setError((prevState) => ({ ...prevState, inRegard: 'Pilih terkait hal' }));
      isValid = false;
    }

    if (message.length < 8) {
      setError((prevState) => ({ ...prevState, message: 'Pesan minimal 8 karakter' }));
      isValid = false;
    }

    if (confirm !== '18') {
      setError((prevState) => ({ ...prevState, confirm: 'Konfirmasi Salah' }));
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await Api.post(
          '/kontak-kami',
          { name, email, in_regard: inRegard, message, confirm },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 201) {
          const { data } = response;
          setNotification({
            text: data.message,
            isError: false,
          });
        } else {
          setNotification({
            text: 'Gagal Mengirim Pesan',
            isError: true,
          });
        }
      } catch (error) {
        setNotification({
          text: 'Gagal Mengirim Pesan',
          isError: true,
        });
      }
    }
  }
  return (
    <div className="container kontak-kami fs-18">
      <div className="head">
        <h1>
          <strong>Cara Mudah Hubungi kami</strong>
        </h1>
        <p>
          Ada pertanyaan terkait Creative Hustle ? Atau ingin berkerja sama dengan kami ? Isi
          formulir disamping yang terhubung dengan email Creative Hustle. Kami akan membalas dalam
          waktu kurang dari 1×24 jam.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        {notification.text && (
          <div className="response-wrapper">
            <ResponseMessage
              notification={notification}
              onDismiss={() => {
                setNotification({
                  text: '',
                  isError: false,
                });
              }}
            />
          </div>
        )}
        <div className="row">
          <div className="col-md-6">
            <input
              type="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Nama"
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  name: '',
                }));
              }}
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
          <div className="col-md-6">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  email: '',
                }));
              }}
              className={ClassNames('form-control', { 'error-form': error.email })}
              placeholder="Email Address"
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
        <div className="row">
          <div className="col-12">
            <select
              onChange={(e) => {
                setInRegard(e.target.value);
              }}
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  inRegard: '',
                }));
              }}
              className={ClassNames('custom-select form-control', { 'error-form': error.inRegard })}
            >
              <option value="">Terkait Hal</option>
              <option value="Pertanyaan Seputar Kursus">Pertanyaan Seputar Kursus</option>
              <option value="Permasalahan Akun">Permasalahan Akun</option>
              <option value="Kerjasama">Kerjasama</option>
              <option value="Lainnya">Lainnya</option>
            </select>
            <small
              className={ClassNames('error-text form-text d-none', {
                'd-block': error.inRegard,
              })}
            >
              {error.inRegard}
            </small>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  message: '',
                }));
              }}
              className={ClassNames('form-control', { 'error-form': error.message })}
              placeholder="Isi Pesan"
            ></textarea>
            <small
              className={ClassNames('error-text form-text d-none', {
                'd-block': error.message,
              })}
            >
              {error.message}
            </small>
          </div>
        </div>
        <div className="row">
          <div className="send-wrapper">
            <div className="input-group">
              <div className="input-group-prepend">
                <span>5 + 13 = </span>
              </div>
              <input
                type="number"
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
                onInputCapture={() => {
                  setError((prevState) => ({
                    ...prevState,
                    confirm: '',
                  }));
                }}
                className={ClassNames('form-control send-confirm', { 'error-form': error.confirm })}
              />
            </div>
            <button type="submit" className="send">
              Kirim
            </button>
            <small
              className={ClassNames('error-text form-text d-none', {
                'd-block': error.confirm,
              })}
              style={{
                position: 'absolute',
                top: '45px',
                right: '7rem',
              }}
            >
              {error.confirm}
            </small>
          </div>
        </div>
      </form>
    </div>
  );
}

export default KontakKami;
