import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
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
  loading: state.auth.loading,
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

function Header({ style, user, logout, loading, history }) {
  const [displayModal, setDisplayModal] = useState({
    show: false,
    mode: null,
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, setShowDropdown);

  function renderDropdown() {
    return (
      !loading && (
        <div className="header-notifications-dropdown" ref={wrapperRef}>
          <div className="user-status">
            <div className="user-details">
              <div className="user-avatar status-online">
                <img
                  src={user.avatar ? user.avatar : '/assets/img/default-avatar.png'}
                  alt="Foto Proflie"
                  width="45"
                  height="45"
                />
              </div>
              <div className="user-name">{user.name}</div>
            </div>
          </div>

          <ul className="user-menu-small-nav">
            <li>
              <Link to="/dashboard/progress">
                <img src="/assets/icon/cv.png" width="24" height="24" alt="kelas" /> Progress
                Belajar
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <img src="/assets/icon/account.png" width="24" height="24" alt="profil" /> Profil
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <img src="/assets/icon/settings.png" width="24" height="24" alt="setting" />{' '}
                Pengaturan
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  logout();
                }}
                to="/"
              >
                <img src="/assets/icon/off.png" width="24" height="24" alt="logout" /> Logout
              </Link>
            </li>
          </ul>
        </div>
      )
    );
  }

  function userMode() {
    return (
      !loading && (
        <li
          className={ClassNames('nav-item header-notifications user-menu', {
            active: showDropdown,
          })}
        >
          <div
            className="d-flex"
            onClick={() => {
              if (window.innerWidth < 992) {
                history.push('/dashboard');
              } else {
                setShowDropdown(true);
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="nav-profile-text align-self-center">
              <div className="user-name">{user.name}</div>
            </div>

            <div className="user-avatar status-online">
              <img
                src={user.avatar ? user.avatar : '/assets/img/default-avatar.png'}
                alt="avatar"
                width="45"
                height="45"
              />
            </div>
          </div>
          {renderDropdown()}
        </li>
      )
    );
  }

  function authMode() {
    return (
      <>
        <li className="nav-item ">
          <div
            onClick={() => {
              setDisplayModal({
                show: true,
                type: 'register',
              });
            }}
            className="nav-link"
            style={{ cursor: 'pointer' }}
          >
            Daftar
          </div>
        </li>
        <li className="nav-item btn">
          <div
            className="p-2"
            onClick={() => {
              setDisplayModal({
                show: true,
                type: 'login',
              });
            }}
          >
            <span>Masuk</span>
          </div>
        </li>
      </>
    );
  }

  return (
    <section className="header" style={style}>
      {displayModal.show && <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} />}
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
        <div className="container">
          <Link className="navbar-brand d-flex" to="/">
            <img
              src="/assets/img/creative-hustle.png"
              alt="Creative Hustle"
              id="logo"
              data-height-percentage="33"
            />
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
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>

          <div
            className={ClassNames('collapse navbar-collapse', { 'd-none': displayModal.show })}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li
                className={ClassNames('nav-item', {
                  hm: isAuthenticated() ? true : false,
                })}
              >
                <NavLink exact className="nav-link" activeStyle={{ color: '#2ea3f2' }} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={{ color: '#2ea3f2' }} to="/kursus">
                  Kursus
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={{ color: '#2ea3f2' }} to="/kelas">
                  Kelas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={{ color: '#2ea3f2' }} to="/journey">
                  Cara Belajar
                </NavLink>
              </li>
              <li className="nav-item nd">
                <span className="nav-divider"></span>
              </li>
              {isAuthenticated() ? userMode() : authMode()}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

Header.propTypes = {
  style: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  loading: PropTypes.bool,
  logout: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(withRouter(Header));
