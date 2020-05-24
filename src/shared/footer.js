import React from 'react';

function Footer() {
  return (
    <section className="footer my-5">
      <div className="container mt-5 pt-4">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-11">
            <div className="row">
              <div className="col-12 col-lg-4">
                <a className="brand" href="/#">
                  <img
                    src="https://buildwithangga.com/themes/front/images/logo-bwa.png"
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt=""
                  />
                  <span className="sr-only">Build with Angga</span>
                </a>
                <p className="mt-4 font-weight-light text-gray-500">
                  Belajar online bersama materi <br className="desktop" />
                  terkait code, design, programming, <br className="desktop" />
                  dan karir di bidang IT.
                </p>
              </div>
              <div className="col-12 col-lg-7 offset-lg-1">
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <h5 className="text-indigo-3">Bantuan</h5>
                    <ul className="list-unstyled sitemap">
                      <li>
                        <a href="https://buildwithangga.com/cara-belajar-online">
                          Cara Belajar Online
                        </a>
                      </li>
                      <li>
                        <a href="https://buildwithangga.com/cara-ikut-kelas">Tata Cara Order</a>
                      </li>
                      <li>
                        <a href="https://buildwithangga.com/cara-ambil-sertifikat">
                          Cara Dapat Sertifikat
                        </a>
                      </li>
                      <li>
                        <a href="https://buildwithangga.com/kebijakan-privasi">Kebijakan Privasi</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5 className="text-indigo-3">Explore</h5>
                    <ul className="list-unstyled sitemap">
                      <li>
                        <a href="https://buildwithangga.com/cek-sertifikat">Cek Sertifikat</a>
                      </li>
                      <li>
                        <a href="https://buildwithangga.com/biaya-belajar">Biaya Belajar Online</a>
                      </li>
                      <li>
                        <a href="https://buildwithangga.com/donasi">Donasi Bersama</a>
                      </li>
                      <li>
                        <a href="mailto:admin@buildwithangga.com">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-lg-7">
                    <h5 className="text-indigo-3">Office</h5>
                    <ul className="list-unstyled sitemap">
                      <li className="line-height-2 font-weight-light">
                        admin@buildwithangga.com
                        <br /> Jakarta Selatan, Indonesia
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5 className="text-indigo-3">Social</h5>
                    <ul className="list-unstyled sitemap">
                      <li>
                        <a href="http://instagram.com/buildwithangga">Instagram</a>
                      </li>
                      <li>
                        <a href="http://t.me/buildwithangga">Telegram</a>
                      </li>
                      <li>
                        <a href="https://youtube.com/anggarisky">YouTube</a>
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
            © 2019 - 2020 BuildWith Angga • All rights reserved • Love from Jakarta
          </div>
          <div className="col-auto">
            <img
              src="https://buildwithangga.com/themes/front/images/monas.svg"
              height="50"
              className="ic_monas"
              alt="ills monas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
