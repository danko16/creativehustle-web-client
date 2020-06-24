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
  const [showDropdown, setShowDropdown] = useState(true);
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
          data-submenu-title="Menu"
          className={ClassNames('menu-peserta', {
            active: showDropdown,
          })}
        >
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
              <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Kelas Saya
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
