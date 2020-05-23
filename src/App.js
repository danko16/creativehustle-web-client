import React from 'react';
import './app.css';

function App() {
  return (
    <div className="App">
      <section className="bg-home bg-indigo">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="https://www.buildwithangga.com">
              <img
                src="https://www.buildwithangga.com/themes/front/images/logo-bwa.png"
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="logo buildwithangga"
              />
              <span className="sr-only">BuildWith Angga</span>
            </a>
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
                  <a className="nav-link " href="https://www.buildwithangga.com/kelas">
                    Kelas
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="https://www.buildwithangga.com/showcase">
                    Showcase
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="https://www.buildwithangga.com/talent">
                    Talent
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="https://www.buildwithangga.com/journey">
                    Alur Belajar
                  </a>
                </li>
                <li className="nav-item">
                  <span className="nav-divider"></span>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="https://class.buildwithangga.com/register">
                    Daftar
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link btn btn-masuk-bwa" href="https://class.buildwithangga.com">
                    Masuk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-10 text-center">
                <h1 className="d-none d-sm-block header-home text-merriweather">
                  Build Your <span id="placetextheader">Future Career</span>
                </h1>
                <h1 className="d-block d-sm-none title-header-home header-home text-merriweather">
                  Build Your Future Career
                </h1>
                <p className="font-weight-light d-none d-sm-block">
                  Pelajari keahlian baru yang dibutuhkan oleh <br /> startup atau perusahaan IT
                  terbesar di seluruh dunia
                </p>
                <p className="font-weight-light text-header-home d-block d-sm-none">
                  Pelajari keahlian baru yang dibutuhkan oleh startup atau perusahaan IT terbesar di
                  seluruh dunia
                </p>
                <img
                  className="ss-header mt-4 aos-init aos-animate"
                  data-aos="zoom-in"
                  src="https://www.buildwithangga.com/images/pic_header_new.png"
                  alt="belajar coding dan design online gratis buildwith angga"
                />
                <p className="mt-5 mb-4">
                  Member kami dari berbagai <strong>kampus</strong> dan <strong>perusahaan</strong>{' '}
                  terkenal
                </p>
                <img
                  className="members-bwa kampus mb-4"
                  alt="member dari setiap kampus yang belajar di buildwithangga"
                  src="https://www.buildwithangga.com/images/members-campus-companies.png"
                />
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="bwa-tools py-5 mb-5 mt-5">
        <div className="container bwa-tools-home">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-11 d-flex justify-content-start">
              <div className="row main-title justify-content-center">
                <div className="col-lg-12 col-12 d-flex align-items-center ">
                  <div>
                    <h1 className="text-merriweather mb-3 text-indigo-3">Belajar Lebih Terarah</h1>
                    <p className="font-weight-light text-indigo-3">
                      Dapatkan jalan shortcut terbaik untuk <br className="desktop" /> memulai karir
                      IT idamanmu
                    </p>
                    <a
                      href="https://www.buildwithangga.com/journey"
                      className="btn btn-primary mt-2 mt-lg-2 font-weight-medium"
                    >
                      ARAHKAN SAYA
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-4 col-12">
                  <img
                    className="d-none d-sm-block"
                    height="348"
                    alt="tools belajar yang digunakan di buildwithangga"
                    src="https://www.buildwithangga.com/themes/front/images/alur-belajar-menjadi-designer-dan-developer-buildwithangga.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
