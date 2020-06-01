import React from 'react';

function FifthSection() {
  return (
    <section className="border-top mt-5">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-11 d-flex justify-content-start">
            <div className="row main-title justify-content-center">
              <div
                className="col-lg-12 col-12 d-flex align-items-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <div>
                  <h1 className="text-merriweather mb-3 text-indigo-3">
                    Persiapan Kerja <br className="desktop" />
                    Jadi Lebih Optimal
                  </h1>
                  <p className="font-weight-light text-indigo-3">
                    BuildWith Angga menggunakan tools yang sering <br className="desktop" />
                    digunakan oleh perusahaan besar IT di dunia
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8"></div>
              <div
                className="col-lg-4 col-12 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img
                  className="d-none d-sm-block"
                  height="348"
                  alt="tools belajar yang digunakan di buildwithangga"
                  src="assets/img/ill_tools.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
