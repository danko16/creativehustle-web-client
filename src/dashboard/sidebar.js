import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { authActions } from '../redux/reducers/auth';
import PropTypes from 'prop-types';
import './sidebar.css';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      logout: authActions.logout,
    },
    dispatch
  );

function Sidebar({ logout }) {
  return (
    <div className="sidenav">
      <div className="dashboard-nav">
        <Link
          to="/kursus"
          className="logo-wrapper"
          style={{
            textDecoration: 'none',
          }}
        >
          <img src="/assets/img/creative-hustle-no-cap.png" alt="logo" />
          <h2>Creative Hustle</h2>
        </Link>
        <div className="dashboard-nav-inner">
          <ul data-submenu-title="Menu">
            <li className="active">
              <NavLink
                to="/dashboard/progress"
                activeClassName="active-nav"
                className="menu-peserta"
              >
                <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="webinar" /> Progress
                <span> Belajar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/kursus" activeClassName="active-nav" className="menu-peserta">
                <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="webinar" /> Kursus Saya
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/webinar"
                activeClassName="active-nav"
                className="menu-peserta"
              >
                <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="webinar" /> Webinar
              </NavLink>
            </li>
          </ul>
          <ul data-submenu-title="Akun Saya" className="mt-5">
            <li>
              <NavLink
                to="/dashboard/billing"
                activeClassName="active-nav"
                className="menu-peserta"
              >
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
            <li>
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
    </div>
  );
}

Sidebar.propTypes = {
  logout: PropTypes.func,
};

export default connect(null, mapActionToProps)(Sidebar);
