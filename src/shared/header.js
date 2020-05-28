import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../utils/auth';

import Modal from './modal';
import './header.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

function Header({ children, style, user }) {
  const [displayModal, setDisplayModal] = useState({
    show: false,
    mode: null,
  });

  function userMode() {
    return (
      <li className="nav-item ">
        <div className="header-notifications-trigger">
          <a href="/">
            <div className="user-avatar status-online">
              <img
                src={user.avatar ? user.avatar : 'assets/img/default-avatar.png'}
                alt="avatar"
                width="45"
                height="45"
              />
            </div>
          </a>
        </div>
        <div className="nav-profile-text">
          <p>{user.name}</p>
        </div>
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
    <section className="bg-home" style={style}>
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
                <a className="nav-link " href="/showcase">
                  Showcase
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/talent">
                  Talent
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/journey">
                  Alur Belajar
                </a>
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
