import React from 'react';
import PropTypes from 'prop-types';

function Login({ setDisplayModal }) {
  return (
    <div className="modal-content row align-items-center justify-content-center">
      <div className="col w-320px">
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

        <form method="POST" id="login" action="https://class.buildwithangga.com/login">
          <input type="hidden" name="_token" value="VYvfzGgu46dBSPwSk0kWsUfqtdNYufclssPZ5Xrl" />{' '}
          <p className="mt-3 mb-1" style={{ fontSize: '14px' }}>
            Email Address
          </p>
          <div className="form-group form-group__icon">
            <i className="material-icons mr-2">album</i>
            <input
              id="email"
              type="email"
              name="email"
              required=""
              autoComplete="email"
              autoFocus=""
              className="form-control "
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <p className="mt-3 mb-1" style={{ fontSize: '14px' }}>
            Password
          </p>
          <div className="form-group form-group__icon">
            <i className="material-icons mr-2">lock</i>
            <input
              type="password"
              name="password"
              required=""
              autoComplete="current-password"
              className="form-control "
              id="password"
              aria-describedby="passwordHelp"
              placeholder="Password"
            />
            <small id="passwordHelp" className="form-text text-muted d-none">
              Error Helper Text
            </small>
          </div>
          <div className="form-group form-group__icon">
            <a
              href="https://class.buildwithangga.com/password/reset"
              className="mr-auto"
              style={{
                textDecoration: 'underline',
                fontSize: '14px',
              }}
            >
              Lupa Password
            </a>
          </div>
          <button type="submit" className="btn btn-submit btn-info font-weight-medium btn-block ">
            Masuk Akun Saya
          </button>
          <div className="form-group form-check mt-3">
            <input
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

        <a
          href="https://class.buildwithangga.com/redirect/google"
          className="btn btn-light btn-block"
        >
          <img
            src="https://class.buildwithangga.com/images/buildwithangga_with_google.svg"
            className="logo-login-google"
            alt="buildwithangga_login_with_google"
          />
          Masuk dengan Google
        </a>
        <a
          href="https://class.buildwithangga.com/redirect/google"
          className="btn btn-light btn-block"
        >
          <img
            src="https://class.buildwithangga.com/images/buildwithangga_with_google.svg"
            className="logo-login-google"
            alt="buildwithangga_login_with_google"
          />
          Daftar dengan Google
        </a>
      </div>
    </div>
  );
}

Login.propTypes = {
  setDisplayModal: PropTypes.func,
};

export default Login;
