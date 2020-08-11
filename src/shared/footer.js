import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <section className="border-top fs-18 footer">
      <div className="container py-5">
        <div className="row justify-content-center no-gutters">
          <div className="col-12 col-lg-4">
            <Link className="brand" to="/">
              <img
                src="/assets/img/creative-hustle.png"
                width="180"
                height="auto"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Link>
            <p className="my-4 text-gray-500" style={{ fontWeight: 500 }}>
              Belajar online sesuai kebutuhan <br />
              industri kreatif saat ini dan <br /> dapatkan penghasilan <br /> tambahanmu sekarang
              juga.
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ul className="list-unstyled sitemap">
              <h2 className="footer-head">Explore</h2>
              <li>
                <Link to="/journey">Cara Belajar</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/footer/fitur">Fitur Kursus</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/">Fitur Webinar</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/">Cara Pembayaran</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/">Bantuan</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ul className="list-unstyled sitemap">
              <h2 className="footer-head">Company</h2>
              <li>
                <Link to="/footer/tentang">Tentang Kami</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/">Hubungi Kami</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/">Mentor Kami</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/">Jadi Mentor</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <ul className="list-unstyled follow-us">
              <h2 className="footer-head">Follow Us</h2>
              <li>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/creativehustle.id/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/creativehustle.id/"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              <li>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/creativehustle.id/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row copyright-wrapper">
          <span className="copyright" style={{ marginLeft: 0 }}>
            Copyright © 2020. Creative Hustle. All rights reserved. Made in Klaten
          </span>
          <div>
            <Link className="copyright" to="/">
              Verifikasi Sertifikat
            </Link>
            <Link className="copyright" to="/">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
