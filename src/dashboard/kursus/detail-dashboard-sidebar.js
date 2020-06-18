import React, { useState } from 'react';
import ClassNames from 'classnames';
import { NavLink, Link } from 'react-router-dom';

function DetailDashboardSidebar() {
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
            <NavLink
              to="/dashboard/progress"
              activeStyle={{
                backgroundColor: 'rgba(42,65,232,.04)',
                borderColor: '#2a41e8',
                borderLeft: '3px solid #2a41e8',
              }}
              className="menu-peserta"
            >
              {' '}
              Progress Belajar
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
              {' '}
              Kursus Saya
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
              {' '}
              Kelas Saya
            </NavLink>
          </li>
          <li className="active">
            <Link onClick={() => {}} to="/" className="menu-peserta">
              {' '}
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailDashboardSidebar;
