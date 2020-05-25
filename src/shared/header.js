import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.css';

function Header({ children, style }) {
  return (
    <section className="bg-home" style={style}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/logo/logo-bwa.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo buildwithangga"
            />
            <span className="sr-only">BuildWith Angga</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar-mobile-bwa" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="/kelas"
                  activeStyle={{
                    color: '#59abe3',
                  }}
                >
                  Kelas
                </NavLink>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/showcase">
                  Showcase
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/talent">
                  Talent
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/journey">
                  Alur Belajar
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-divider"></span>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/register">
                  Daftar
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link btn btn-masuk-bwa" href="/login">
                  Masuk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}
    </section>
  );
}

Header.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};

export default Header;
