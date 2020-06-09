import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { isAuthenticated } from '../utils/auth';
import { authActions } from '../redux/reducers/auth';

import Modal from './modal';
import './header.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapActionToProps = (dispatch) => bindActionCreators({ logout: authActions.logout }, dispatch);

function useOutsideAlerter(ref, setShowDropdown) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setShowDropdown]);
}

function Header({ children, style, user, logout }) {
  const [displayModal, setDisplayModal] = useState({
    show: false,
    mode: null,
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, setShowDropdown);

  function renderDropdown() {
    return (
      <div className="header-notifications-dropdown" ref={wrapperRef}>
        <div className="user-status">
          <div className="user-details">
            <div className="user-avatar status-online">
              <img src="assets/img/danang.jpg" alt="Foto Proflie" width="45" height="45" />
            </div>
            <div className="user-name">
              <p>Danang Eko Yudanto</p>
            </div>
          </div>
        </div>

        <ul className="user-menu-small-nav">
          <li>
            <Link to="/dashboard">
              <img src="assets/icon/cv.png" width="24" height="24" alt="profil" /> Kelas Saya
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <img src="assets/icon/account.png" width="24" height="24" alt="profil" /> Profil
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <img src="assets/icon/settings.png" width="24" height="24" alt="setting" /> Pengaturan
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                logout();
              }}
              to="/"
            >
              <img src="assets/icon/off.png" width="24" height="24" alt="logout" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  function userMode() {
    return (
      <li
        className={ClassNames('nav-item header-notifications user-menu', {
          active: showDropdown,
        })}
      >
        <div
          className="d-flex"
          onClick={() => {
            setShowDropdown(true);
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="nav-profile-text align-self-center">
            <p>{user.name}</p>
          </div>

          <div className="user-avatar status-online">
            <img
              src={user.avatar ? user.avatar : 'assets/img/default-avatar.png'}
              alt="avatar"
              width="45"
              height="45"
            />
          </div>
        </div>
        {renderDropdown()}
      </li>
    );
  }

  function authMode() {
    return (
      <>
        <li className="nav-item ">
          <span
            onClick={() => {
              setDisplayModal({
                show: true,
                type: 'register',
              });
            }}
            className="nav-link"
            href="/register"
            style={{ cursor: 'pointer' }}
          >
            Daftar
          </span>
        </li>
        <li className="nav-item ">
          <span
            className="nav-link btn btn-masuk-bwa"
            onClick={() => {
              setDisplayModal({
                show: true,
                type: 'login',
              });
            }}
          >
            Masuk
          </span>
        </li>
      </>
    );
  }

  function renderSearchInput() {
    return (
      <div className="input-group">
        <input
          data-purpose="search-input"
          name="q"
          maxLength="200"
          placeholder="Search for anything"
          autoComplete="off"
          className="form-control"
        />
        <div className="input-group-btn">
          <button aria-label="Search for anything" type="submit">
            <span className="fa fa-search"></span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="header" style={style}>
      {displayModal.show && <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} />}
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
        <div className="col-10 nav-container">
          <div className="nav-head">
            <Link className="navbar-brand d-flex" to="/">
              <img
                src="assets/logo/logo-bwa.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="logo buildwithangga"
              />
              <span className="brand-name">Creative Hustle</span>
            </Link>
            <div className="search-wrapper-sm">{renderSearchInput()}</div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="search-wrapper ml-auto mr-auto">{renderSearchInput()}</div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Kursus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Kelas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-divider"></span>
              </li>
              <li className="nav-item">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </li>
              {isAuthenticated() ? userMode() : authMode()}
            </ul>
          </div>
        </div>
      </nav>

      {children}
    </section>
  );
}

Header.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(Header);
