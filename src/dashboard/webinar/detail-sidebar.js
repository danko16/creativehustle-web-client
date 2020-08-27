import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import './detail-sidebar.css';

function DetailSidebar() {
  const { webinarId } = useParams();

  return (
    <div className="sidenav">
      <div className="dashboard-nav detail">
        <Link className="back-dashboard" to="/dashboard/webinar">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <span>Kembali ke Home</span>
        </Link>
        <div className="dashboard-nav-inner">
          <ul>
            <li>
              <NavLink
                to={`/dashboard/webinar/${webinarId}/1`}
                activeStyle={{
                  color: '#fff',
                  backgroundColor: 'rgba(234, 73, 73, 0.7)',
                  borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
                }}
                className="menu-peserta"
              >
                Jadwal Webinar
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/webinar/${webinarId}/2`}
                activeStyle={{
                  color: '#fff',
                  backgroundColor: 'rgba(234, 73, 73, 0.7)',
                  borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
                }}
                className="menu-peserta"
              >
                Ketentuan Webinar
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/webinar/${webinarId}/3`}
                activeStyle={{
                  color: '#fff',
                  backgroundColor: 'rgba(234, 73, 73, 0.7)',
                  borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
                }}
                className="menu-peserta"
              >
                Rekaman Webinar
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/webinar/${webinarId}/4`}
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
