import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="dashboard-nav">
        <div className="dashboard-nav-inner">
          <ul data-submenu-title="Menu" className="menu-peserta">
            <li className="active">
              <a href="/dashboard" className="menu-peserta">
                <img src="assets/icon/cv.png" data-sga="pendaftaran" alt="kelas" /> Kelas Saya
              </a>
            </li>
            <li>
              <a href="/dashboard" className="menu-peserta">
                <img src="assets/icon/account.png" data-sga="profil" alt="profile" /> Profil
              </a>
            </li>
            <li>
              <a href="/dashboard" className="menu-peserta">
                <img src="assets/icon/settings.png" data-sga="setting" alt="setting" /> Pengaturan
              </a>
            </li>
            <li>
              <a href="/dashboard">
                <img src="assets/icon/off.png" alt="logout" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
