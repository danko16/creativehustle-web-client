import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import { register } from '../redux/effects/auth';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapActionToProps = (dispatch) => bindActionCreators({ register }, dispatch);

function Register({ setDisplayModal, register }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const nameValid = nameValidation();
    const emailValid = emailValidation();
    const passwordValid = passwordValidation();
    const repeatValid = repeatPasswordValidation();

    if (nameValid && emailValid && passwordValid && repeatValid) {
      setError({});
      setLoading(true);
      const response = await register({
        full_name: name,
        email,
        password,
      });
      setLoading(false);
      if (response.status === 200) {
        setNotification({
          text: 'Register Berhasil',
          isError: false,
        });
      } else {
        setNotification({
          text: response.message,
          isError: true,
        });
      }
    }
  }

  function nameValidation() {
    const nameFormat = /^[A-Za-z\s]{3,}$/i;
    if (name.length < 4) {
      setError((prevState) => ({
        ...prevState,
        name: 'Panjang nama minimal 4 karakter',
      }));
      return false;
    }
    if (!name.match(nameFormat)) {
      setError((prevState) => ({
        ...prevState,
        name: 'Nama hanya boleh berisi huruf dan spasi',
      }));
      return false;
    }

    return true;
  }

  function emailValidation() {
    //eslint-disable-next-line
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(emailFormat)) {
      setError((prevState) => ({
        ...prevState,
        email: 'Email tidak valid',
      }));
      return false;
    }

    return true;
  }

  function passwordValidation() {
    const passwordFormat = /^(?=.*[0-9])(?=.{8,})/;
    if (password.length < 8) {
      setError((prevState) => ({
        ...prevState,
        password: 'Panjang password minimal 8 karakter',
      }));
      return false;
    }

    if (!password.match(passwordFormat)) {
      setError((prevState) => ({
        ...prevState,
        password: 'Password harus berisi minimal 1 angka',
      }));
      return false;
    }

    return true;
  }

  function repeatPasswordValidation() {
    if (password !== repeatPassword || !password) {
      setError((prevState) => ({
        ...prevState,
        repeatPassword: 'Confirm Password tidak cocok',
      }));
      return false;
    }

    return true;
  }

  return (
    <div className="modal-content row align-items-center justify-content-center">
      <div className="col w-320px ">
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
        <h1 className="h3 font-weight-bold merriweather mt-4 pt-1">Akun Baru</h1>
        <p className="text-secondary h8 mt-1 mb-1 ">Learn. Build. Share to Make Money.</p>
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
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="_token" value="SR9dLKREhwyJwnObwAS1Oqr1gL9VYcugcevSHVf5" />
          <div className="form-group form-group__icon mt-4">
            <label className="sr-only" htmlFor="username">
              Nama Lengkap
            </label>
            <i className="material-icons mr-2">album</i>
            <input
              type="text"
              name="name"
              required=""
              autoComplete="name"
              autoFocus=""
              className={ClassNames('form-control', { 'error-form': error.name })}
              aria-describedby="usernameHelp"
              placeholder="Nama Lengkap"
              value={name}
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  name: '',
                }));
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.name,
            })}
          >
            {error.name}
          </small>
          <div className="form-group form-group__icon">
            <label className="sr-only" htmlFor="email">
              Email Address
            </label>
            <i className="material-icons mr-2">email</i>
            <input
              id="email"
              type="email"
              name="email"
              required=""
              autoComplete="email"
              className={ClassNames('form-control', { 'error-form': error.email })}
              aria-describedby="emailHelp"
              placeholder="Email Address"
              value={email}
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  email: '',
                }));
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.email,
            })}
          >
            {error.email}
          </small>
          <div className="form-group form-group__icon">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <i className="material-icons mr-2">lock</i>
            <input
              type="password"
              name="password"
              required=""
              autoComplete="current-password"
              className={ClassNames('form-control', { 'error-form': error.password })}
              id="password"
              aria-describedby="passwordHelp"
              placeholder="Password (Min. 8 Karakter)"
              value={password}
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  password: '',
                }));
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.password,
            })}
          >
            {error.password}
          </small>
          <div className="form-group form-group__icon">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <i className="material-icons mr-2">lock</i>
            <input
              type="password"
              name="password_confirmation"
              required=""
              autoComplete="current-password"
              className={ClassNames('form-control', { 'error-form': error.repeatPassword })}
              id="password2"
              aria-describedby="passwordHelp"
              placeholder="Confirm Password"
              value={repeatPassword}
              onInputCapture={() => {
                setError((prevState) => ({
                  ...prevState,
                  repeatPassword: '',
                }));
              }}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            />
          </div>
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.repeatPassword,
            })}
          >
            {error.repeatPassword}
          </small>
          <div
            className="form-group form-group__icon"
            id="group_organization"
            style={{ display: 'none' }}
          >
            <label className="sr-only" htmlFor="organization"></label>
            <i className="material-icons mr-2">favorite</i>
            <input
              type="text"
              name="organization"
              required=""
              className="form-control"
              id="organization"
              aria-describedby="passwordHelp"
              placeholder=""
            />
            <small id="organization" className="form-text text-muted">
              Error Helper Text
            </small>
          </div>
          <button type="submit" className="btn btn-submit btn-info font-weight-medium btn-block ">
            Buat Akun
          </button>
          <hr />
          <a href="/" className="btn btn-light btn-block">
            <img
              src="assets/logo/buildwithangga_with_google.svg"
              className="logo-login-google"
              alt="buildwithangga_login_with_google"
            />
            Daftar dengan Google
          </a>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  setDisplayModal: PropTypes.func,
  register: PropTypes.func,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapActionToProps)(Register);
