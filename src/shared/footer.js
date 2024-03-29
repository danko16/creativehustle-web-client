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
                <Link to="/fitur-kursus">Fitur Kursus</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/fitur-webinar">Fitur Webinar</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/cara-pembayaran">Cara Pembayaran</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/bantuan">Bantuan</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ul className="list-unstyled sitemap">
              <h2 className="footer-head">Company</h2>
              <li>
                <Link to="/tentang-kami">Tentang Kami</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/kontak-kami">Hubungi Kami</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/mentor-kami">Mentor Kami</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/jadi-mentor">Jadi Mentor</Link>
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
                  href="https://www.youtube.com/channel/UCBTdM9L7Ixmou4vsL5gGDtA?view_as=subscriber"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              <li>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/creativehustle"
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link className="copyright" to="/verifikasi-sertifikat" style={{ margin: 0 }}>
              Verifikasi Sertifikat
            </Link>
            <Link className="copyright" to="/kebijakan-privasi">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
