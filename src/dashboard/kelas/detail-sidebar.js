import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './detail-sidebar.css';

function DetailSidebar() {
  return (
    <div className="sidenav">
      <div className="dashboard-nav detail">
        <Link className="back-dashboard" to="/dashboard/kelas">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <span>Kembali ke Home</span>
        </Link>
        <div className="dashboard-nav-inner">
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
                Materi dan Group
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailSidebar;
