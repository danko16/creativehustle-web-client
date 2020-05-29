import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="dashboard-nav">
        <div className="dashboard-nav-inner">
          <ul data-submenu-title="Menu" className="menu-peserta">
            <li className="active">
              <a
                href="https://digitalent.kominfo.go.id/peserta/pendaftaran"
                className="menu-peserta"
              >
                <img
                  src="https://digitalent.kominfo.go.id/assets/@images/icons/cv.png"
                  data-sga="pendaftaran"
                  alt="kelas"
                />{' '}
                Kelas Saya
              </a>
            </li>
            <li>
              <a href="https://digitalent.kominfo.go.id/peserta" className="menu-peserta">
                <img
                  src="https://digitalent.kominfo.go.id/assets/@images/icons/account.png"
                  data-sga="profil"
                  alt="profile"
                />{' '}
                Profil
              </a>
            </li>
            <li>
              <a href="https://digitalent.kominfo.go.id/peserta/setting" className="menu-peserta">
                <img
                  src="https://digitalent.kominfo.go.id/assets/@images/icons/settings.png"
                  data-sga="setting"
                  alt="setting"
                />{' '}
                Pengaturan
              </a>
            </li>
            <li>
              <a href="https://digitalent.kominfo.go.id/logout">
                <img
                  src="https://digitalent.kominfo.go.id/assets/@images/icons/off.png"
                  alt="logout"
                />{' '}
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
