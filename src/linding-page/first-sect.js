import React from 'react';

function FirstSection() {
  return (
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
  );
}

export default FirstSection;
