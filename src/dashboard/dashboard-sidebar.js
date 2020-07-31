import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import { authActions } from '../redux/reducers/auth';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      logout: authActions.logout,
    },
    dispatch
  );

function DashboardSidebar({ logout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="dashboard-sidebar">
      <div
        onClick={() => {
          setShowDropdown((prevState) => !prevState);
        }}
        className={ClassNames('dashboard-responsive-nav-trigger')}
      >
        <div className="hamburger-container">
          <span className="hamburger">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
          <span className="trigger-title">Dashboard Navigation</span>
        </div>
      </div>
      <div className="dashboard-nav">
        <ul
          className={ClassNames('menu-peserta', {
            active: showDropdown,
          })}
        >
          <li>
            <Link
              to="/kursus"
              className="logo-wrapper"
              style={{
                textDecoration: 'none',
                justifyContent: 'center',
                paddingBottom: '1.25rem',
              }}
            >
              <img src="/assets/img/creative-hustle-no-cap.png" alt="logo" />
              <h2>Creative Hustle</h2>
            </Link>
          </li>
          <li className="active">
            <NavLink to="/dashboard/progress" activeClassName="active-nav" className="menu-peserta">
              <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Progress Belajar
            </NavLink>
          </li>
          <li className="active">
            <NavLink to="/dashboard/kursus" activeClassName="active-nav" className="menu-peserta">
              <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Kursus Saya
            </NavLink>
          </li>
          <li className="active">
            <NavLink to="/dashboard/kelas" activeClassName="active-nav" className="menu-peserta">
              <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Webinar
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/billing" activeClassName="active-nav" className="menu-peserta">
              <img src="/assets/icon/icons8-receipt-80.png" data-sga="billing" alt="billing" />
              {'  '}
              Billing
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profil" activeClassName="active-nav" className="menu-peserta">
              <img src="/assets/icon/account.png" data-sga="profil" alt="profile" /> Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/pengaturan"
              activeClassName="active-nav"
              className="menu-peserta"
            >
              <img src="/assets/icon/settings.png" data-sga="setting" alt="setting" /> Pengaturan
            </NavLink>
          </li>
          <li className="active">
            <Link
              onClick={() => {
                logout();
              }}
              to="/"
              className="menu-peserta"
            >
              <img src="/assets/icon/off.png" alt="logout" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

DashboardSidebar.propTypes = {
  logout: PropTypes.func,
};

export default connect(null, mapActionToProps)(DashboardSidebar);
