import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="border-top footer">
      <div className="container mt-5 pt-4">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-11">
            <div className="row">
              <div className="col-12 col-lg-4">
                <Link className="brand" to="/">
                  <img
                    src="/assets/img/creative-hustle.png"
                    width="270"
                    height="30"
                    className="d-inline-block align-top"
                    style={{
                      marginLeft: '-8px',
                    }}
                    alt=""
                  />
                </Link>
                <p className="mt-4 font-weight-light text-gray-500">
                  Belajar online sesuai kebutuhan <br className="desktop" />
                  industri saat ini dan dapatkan <br className="desktop" />
                  kesempatan berkarir sesuai passionmu.
                </p>
              </div>
              <div className="col-12 col-lg-7 offset-lg-1">
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <h5 className="text-indigo-3">Bantuan</h5>
                    <ul className="list-unstyled sitemap">
                      <li>
                        <Link to="/">Cara Belajar Online</Link>
                      </li>
                      <li>
                        <Link to="/">Tata Cara Order</Link>
                      </li>
                      <li>
                        <Link to="/">Cara Melamar Pekerjaan</Link>
                      </li>
                      <li>
                        <Link to="/">Kebijakan Privasi</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5 className="text-indigo-3">Explore</h5>
                    <ul className="list-unstyled sitemap">
                      <li>
                        <Link to="/">Cek Kategori</Link>
                      </li>
                      <li>
                        <Link to="/">Biaya Belajar Online</Link>
                      </li>
                      <li>
                        <Link to="/">Donasi Bersama</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-lg-7">
                    <h5 className="text-indigo-3">Office</h5>
                    <ul className="list-unstyled sitemap">
                      <li className="line-height-2 font-weight-light">
                        admin@creativehustle.com
                        <br /> Klaten Selatan, Indonesia
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5 className="text-indigo-3">Social</h5>
                    <ul className="list-unstyled sitemap">
                      <li>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="http://instagram.com/buildwithangga"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="http://t.me/buildwithangga"
                        >
                          Telegram
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://youtube.com/anggarisky"
                        >
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-5 pt-4">
          <div className="col-auto text-gray-500 font-weight-light">
            © 2019 - 2020 Creative Hustle • All rights reserved • Love from Klaten
          </div>
          <div className="col-auto">
            <img src="/assets/logo/monas.svg" height="50" className="ic_monas" alt="ills monas" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
