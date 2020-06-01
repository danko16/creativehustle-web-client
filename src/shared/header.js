import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { isAuthenticated } from '../utils/auth';

import Modal from './modal';
import './header.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

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

function Header({ children, style, user }) {
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
            <a href="/dashboard">
              <img src="assets/icon/cv.png" width="24" height="24" alt="profil" /> Kelas Saya
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <img src="assets/icon/account.png" width="24" height="24" alt="profil" /> Profil
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <img src="assets/icon/settings.png" width="24" height="24" alt="setting" /> Pengaturan
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <img src="assets/icon/off.png" width="24" height="24" alt="logout" /> Logout
            </a>
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

  return (
    <section className="header" style={style}>
      {displayModal.show && <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} />}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/logo/logo-bwa.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo buildwithangga"
            />
            <span className="sr-only">BuildWith Angga</span>
          </Link>
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

          <div className="collapse navbar-collapse navbar-mobile-bwa" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="/kelas"
                  activeStyle={{
                    color: '#59abe3',
                  }}
                >
                  Kelas
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link "
                  to="/showcase"
                  activeStyle={{
                    color: '#59abe3',
                  }}
                >
                  Showcase
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link "
                  to="/talent"
                  activeStyle={{
                    color: '#59abe3',
                  }}
                >
                  Talent
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link "
                  to="/journey"
                  activeStyle={{
                    color: '#59abe3',
                  }}
                >
                  Alur Belajar
                </NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-divider"></span>
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
};

export default connect(mapStateToProps)(Header);
