import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

function Modal({ setDisplayModal }) {
  function handleClick(event) {
    if (event.target.className === 'modal') {
      setDisplayModal(false);
    }
  }
  return (
    <div
      onMouseDown={(event) => {
        handleClick(event);
      }}
      className="modal"
    >
      <div className="modal-content row align-items-center justify-content-center">
        <div className="col w-320px ">
          <span className="d-flex">
            <i className="material-icons mr-2">arrow_back</i>
            <span>Kembali</span>
          </span>
          <h1 className="h3 font-weight-bold merriweather mt-4 pt-1">Akun Baru</h1>
          <p className="text-secondary h8 mt-1 mb-1 ">Learn. Build. Share to Make Money.</p>

          <form method="POST" id="login" action="https://class.buildwithangga.com/register">
            <input type="hidden" name="_token" value="SR9dLKREhwyJwnObwAS1Oqr1gL9VYcugcevSHVf5" />{' '}
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
                className="form-control"
                aria-describedby="usernameHelp"
                placeholder="Nama Lengkap"
              />
              <small id="usernameHelp" className="form-text text-muted d-none">
                Error Helper Text
              </small>
            </div>
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
                className="form-control "
                aria-describedby="emailHelp"
                placeholder="Email Address"
              />

              <small id="emailHelp_2" className="form-text text-muted d-none"></small>
            </div>
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
                className="form-control"
                id="password"
                aria-describedby="passwordHelp"
                placeholder="Password (Min. 8 Karakter)"
              />
              <small id="passwordHelp" className="form-text text-muted d-none">
                Error Helper Text
              </small>
            </div>
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
                className="form-control"
                id="password2"
                aria-describedby="passwordHelp"
                placeholder="Confirm Password"
              />
              <small id="passwordHelp22" className="notice-password2 form-text text-muted d-none">
                Confirm Password tidak cocok
              </small>
            </div>
            <div className="form-group form-group__icon">
              <label className="sr-only" htmlFor="level_user">
                Level User
              </label>
              <i className="material-icons mr-2">favorite</i>
              <input
                type="text"
                name="level_user"
                required=""
                className="form-control"
                id="level_user"
                aria-describedby="passwordHelp"
                placeholder="Keahlian, cth: Web Designer"
              />
              <small id="passwordHelp" className="form-text text-muted d-none">
                Error Helper Text
              </small>
            </div>
            <div className="form-group form-group__icon form-occupation">
              <label className="sr-only">Occupation</label>
              <select
                className="form-control"
                name="occupation"
                id="occupation"
                placeholder="Occupation"
                required="required"
              >
                <option value="">-- Pilih Occupation--</option>
                <option>Sekolah</option>
                <option>Kuliah</option>
                <option>Kerja</option>
              </select>
            </div>
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
              <small id="organization" className="form-text text-muted d-none">
                Error Helper Text
              </small>
            </div>
            <button type="submit" className="btn btn-submit btn-info font-weight-medium btn-block ">
              Buat Akun
            </button>
            <hr />
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
          </form>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setDisplayModal: PropTypes.func,
};

export default Modal;
