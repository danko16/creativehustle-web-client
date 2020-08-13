import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { SERVER_DOMAIN } from '../utils/api';

import { authActions } from '../redux/reducers/auth';

const mapStateToPops = (state) => ({
  auth: state.auth,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators({ login: authActions.reqLogin, clearMsg: authActions.clearAuthMsg }, dispatch);

function Login({ setDisplayModal, displayModal, auth, clearMsg, login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (auth.is_authorized && !auth.loading) {
      setDisplayModal({
        show: false,
        type: null,
      });
    }

    if (auth.auth_msg && !auth.loading) {
      setNotification({
        text: auth.auth_msg,
        isError: auth.is_error,
      });
      clearMsg();
    }
  }, [auth, setDisplayModal, clearMsg]);

  function handleLogin(e) {
    e.preventDefault();

    if (loginValidation()) {
      setError({});
      login({
        email,
        password,
        remember_me: rememberMe,
        type: 'student',
        pembelian: displayModal.pembelian,
      });
    }
  }

  function loginValidation() {
    let isValid = true;
    //eslint-disable-next-line
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.match(emailFormat)) {
      setError((prevState) => ({
        ...prevState,
        email: 'Email Tidak valid',
      }));
      isValid = false;
    }

    if (password.length < 8) {
      setError((prevState) => ({
        ...prevState,
        password: 'Panjang password minimal 8 karakter',
      }));
      isValid = false;
    }

    return isValid;
  }
  return (
    <div className="modal-content row align-items-center justify-content-center">
      <div className="modal-content-wrapper col">
        <span
          className="d-flex"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setDisplayModal({
              show: false,
              type: null,
            });
          }}
        >
          <i className="material-icons mr-2">arrow_back</i>
          <span>Kembali</span>
        </span>
        <h1 className="h3 font-weight-bold merriweather mt-4 pt-1">Sign In</h1>
        <p className="text-secondary h8 mt-1 mb-1 ">Masuk untuk melanjutkan belajar</p>
        {notification.text && (
          <div
            className={ClassNames({
              'auth-notif-error': notification.isError,
              'auth-notif-success': !notification.isError,
            })}
          >
            {notification.text}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <p className="mt-3 mb-1" style={{ fontSize: '14px' }}>
            Email Address
          </p>
          <div className="form-group form-group__icon">
            <i className="material-icons mr-2">album</i>
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
              autoComplete="email"
              className={ClassNames('form-control', { 'error-form': error.email })}
              placeholder="Email Address"
            />
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.email,
            })}
          >
            {error.email}
          </small>
          <p className="mt-3 mb-1" style={{ fontSize: '14px' }}>
            Password
          </p>
          <div className="form-group form-group__icon">
            <i className="material-icons mr-2">lock</i>
            <input
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  password: '',
                }));
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              className={ClassNames('form-control', { 'error-form': error.password })}
              placeholder="Password"
            />
            <i
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`fa fa-eye${showPassword ? '' : '-slash'}`}
              aria-hidden="true"
            ></i>
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.password,
            })}
          >
            {error.password}
          </small>
          <div className="form-group form-group__icon">
            <Link
              to="/forgot-password"
              className="mr-auto"
              style={{
                textDecoration: 'underline',
                fontSize: '14px',
              }}
            >
              Lupa Password
            </Link>
          </div>
          <button type="submit" className="btn btn-submit btn-info font-weight-medium btn-block ">
            Masuk Akun Saya
          </button>
          <div className="form-group form-check mt-3">
            <input
              onChange={() => {
                setRememberMe((prevState) => !prevState);
              }}
              name="remember"
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label"
              style={{
                fontSize: '14px',
              }}
              htmlFor="exampleCheck1"
            >
              Keep me logged in
            </label>
          </div>
        </form>

        <hr className="bullet" />

        <a href={`${SERVER_DOMAIN}/auth/google`} className="btn btn-light btn-block">
          <img src="/assets/logo/google-logo.svg" className="logo-login-google" alt="Google Logo" />
          Masuk dengan Google
        </a>
        <a href={`${SERVER_DOMAIN}/auth/google`} className="btn btn-light btn-block">
          <img src="/assets/logo/google-logo.svg" className="logo-login-google" alt="Google Logo" />
          Daftar dengan Google
        </a>
      </div>
    </div>
  );
}

Login.propTypes = {
  setDisplayModal: PropTypes.func,
  login: PropTypes.func,
  clearMsg: PropTypes.func,
  displayModal: PropTypes.object,
  auth: PropTypes.object,
};

export default connect(mapStateToPops, mapActionToProps)(Login);
