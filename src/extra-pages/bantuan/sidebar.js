import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <p className="main-menu">Pusat Bantuan</p>
      <ul>
        <NavLink to="/bantuan/akun" className="nav-item" activeClassName="active">
          <img src="/assets/icon/star.png" alt="akun" />
          <span>Akun</span>
        </NavLink>
        <NavLink to="/bantuan/pembayaran" className="nav-item" activeClassName="active">
          <img src="/assets/icon/purchase.png" alt="akun" />
          <span>Pembayaran</span>
        </NavLink>
        <NavLink to="/bantuan/refund" className="nav-item" activeClassName="active">
          <img src="/assets/icon/refund.png" alt="akun" />
          <span>Refund</span>
        </NavLink>
        <NavLink to="/bantuan/kursus" className="nav-item" activeClassName="active">
          <img src="/assets/icon/course.png" alt="akun" />
          <span>Kursus</span>
        </NavLink>
        <NavLink to="/bantuan/webinar" className="nav-item" activeClassName="active">
          <img src="/assets/icon/share_screen.png" alt="akun" />
          <span>Webinar</span>
        </NavLink>
        <NavLink to="/bantuan/sertifikat" className="nav-item" activeClassName="active">
          <img src="/assets/icon/certificate.png" alt="akun" />
          <span>Sertifikat</span>
        </NavLink>
        <NavLink to="/bantuan/mentor" className="nav-item" activeClassName="active">
          <img src="/assets/icon/mentor.png" alt="akun" />
          <span>Mentor</span>
        </NavLink>
        <NavLink to="/bantuan/lainya" className="nav-item" activeClassName="active">
          <img src="/assets/icon/etc.png" alt="akun" />
          <span>Lainnya</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
