import React, { useState } from 'react';
import ClassNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

function DetailDashboardSidebar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-sidebar">
        <div
          onClick={() => {
            setShowDropdown((prevState) => !prevState);
          }}
          className={ClassNames('dashboard-responsive-nav-trigger detail')}
        >
          <div className="hamburger-container">
            <span className="hamburger">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
            <span className="trigger-title">Dashboard Navigation</span>
          </div>
        </div>
        <div
          className={ClassNames('dashboard-nav detail', {
            active: showDropdown,
          })}
        >
          <Link className="back-dashboard" to="/dashboard/kursus">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span>Kembali ke Home</span>
          </Link>
          <ul>
            <li>
              <NavLink
                to={`/dashboard/kelas/2/1`}
                activeStyle={{
                  color: '#fff',
                  backgroundColor: 'rgba(234, 73, 73, 0.7)',
                  borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
                }}
                className="menu-peserta"
              >
                Jadwal Kelas
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/kelas/2/2`}
                activeStyle={{
                  color: '#fff',
                  backgroundColor: 'rgba(234, 73, 73, 0.7)',
                  borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
                }}
                className="menu-peserta"
              >
                Ketentuan kelas
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/kelas/2/3`}
                activeStyle={{
                  color: '#fff',
                  backgroundColor: 'rgba(234, 73, 73, 0.7)',
                  borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
                }}
                className="menu-peserta"
              >
                Rekaman kelas
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/kelas/2/4`}
                activeStyle={{
                  color: '#fff',
                  backgroundColor: 'rgba(234, 73, 73, 0.7)',
                  borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
                }}
                className="menu-peserta"
              >
                Materi Kelas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailDashboardSidebar;
