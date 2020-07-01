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
                    width="200"
                    className="d-inline-block align-top"
                    style={{
                      marginLeft: '-12px',
                    }}
                    alt=""
                  />
                </Link>
                <p className="my-4 font-weight-light text-gray-500">
                  Belajar online sesuai kebutuhan <br className="desktop" />
                  industri kreatif saat ini dan dapatkan <br className="desktop" />
                  penghasilan tambahanmu sekarang juga.
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
                        <Link to="/">Mentor</Link>
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
                        <Link to="/">Jadi Mentor</Link>
                      </li>
                      <li>
                        <Link to="/">Kontak Kami</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-lg-7">
                    <h5 className="text-indigo-3">Office</h5>
                    <ul className="list-unstyled sitemap">
                      <li className="line-height-2 font-weight-light">
                        admin@creativehustle.id
                        <br /> Klaten Selatan, Indonesia
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5 className="text-indigo-3">Social</h5>
                    <ul className="list-unstyled sitemap">
                      <li>
                        <a rel="noopener noreferrer" href="/">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a rel="noopener noreferrer" href="/">
                          Telegram
                        </a>
                      </li>
                      <li>
                        <a rel="noopener noreferrer" href="/">
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
