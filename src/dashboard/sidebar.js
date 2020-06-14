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
        <div className="dashboard-nav-inner">
          <ul data-submenu-title="Menu">
            <li className="active">
              <NavLink
                to="/dashboard/progress"
                activeStyle={{
                  backgroundColor: 'rgba(42,65,232,.04)',
                  borderColor: '#2a41e8',
                  borderLeft: '3px solid #2a41e8',
                }}
                className="menu-peserta"
              >
                <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Progress
                Belajar
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                to="/dashboard/kursus"
                activeStyle={{
                  backgroundColor: 'rgba(42,65,232,.04)',
                  borderColor: '#2a41e8',
                  borderLeft: '3px solid #2a41e8',
                }}
                className="menu-peserta"
              >
                <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Kursus Saya
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                to="/dashboard/kelas"
                activeStyle={{
                  backgroundColor: 'rgba(42,65,232,.04)',
                  borderColor: '#2a41e8',
                  borderLeft: '3px solid #2a41e8',
                }}
                className="menu-peserta"
              >
                <img src="/assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Kelas Saya
              </NavLink>
            </li>
          </ul>
          <ul data-submenu-title="Akun Saya" className="mt-5">
            <li>
              <NavLink
                to="/dashboard/profil"
                activeStyle={{
                  backgroundColor: 'rgba(42,65,232,.04)',
                  borderColor: '#2a41e8',
                  borderLeft: '3px solid #2a41e8',
                }}
                className="menu-peserta"
              >
                <img src="/assets/icon/account.png" data-sga="profil" alt="profile" /> Profil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/pengaturan"
                activeStyle={{
                  backgroundColor: 'rgba(42,65,232,.04)',
                  borderColor: '#2a41e8',
                  borderLeft: '3px solid #2a41e8',
                }}
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
