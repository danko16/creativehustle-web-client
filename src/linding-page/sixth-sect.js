import React from 'react';

function SixthSection() {
  return (
    <section className="py-5 border-top mt-7" id="startlearn">
      <div className="container mt-3">
        <div className="heading text-center">
          <h1 className="text-merriweather mb-3 text-indigo-3">Untuk Generasi Instan</h1>
          <p className="font-weight-light text-indigo-3">
            Akuisisi keahlian IT terbaru hanya dengan tiga <br className="desktop" />
            cara yang mudah (bisa sambil duduk manis)
          </p>
        </div>

        <div className="row justify-content-center mt-7">
          <div className="col col-12 col-lg-11">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-4 mb-4 aos-init aos-animate" data-aos="zoom-out-down">
                <div className="card-guide card card__border text-center h-100">
                  <div className="card-body py-5">
                    <div
                      className="embed-responsive embed-responsive-1by1 mx-auto"
                      style={{ width: '120px' }}
                    >
                      <div className="embed-responsive-item">
                        <img
                          src="https://buildwithangga.com/themes/front/images/tata-cara-bwa-1.png"
                          className="img img__cover"
                          alt="cara belajar di buildwithangga"
                        />
                      </div>
                    </div>
                    <h6 className="line-height-1 mt-4 pt-1 text-merriweather">Memulai</h6>
                    <span className="h7 text-gray-500">
                      Ada banyak kelas menarik
                      <br className="desktop" />
                      sesuai dengan minatmu
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="col-10 col-lg-4 mb-4 aos-init aos-animate"
                data-aos="zoom-out-down"
                data-aos-delay="500"
              >
                <div className="card-guide card card__border text-center h-100">
                  <div className="card-body py-5">
                    <div
                      className="embed-responsive embed-responsive-1by1 mx-auto"
                      style={{ width: '120px' }}
                    >
                      <div className="embed-responsive-item">
                        <img
                          src="https://buildwithangga.com/themes/front/images/tata-cara-bwa-2.png"
                          className="img img__cover"
                          alt="cara belajar di buildwithangga"
                        />
                      </div>
                    </div>
                    <h6 className="line-height-1 mt-4 pt-1 text-merriweather">Mempelajari</h6>
                    <span className="h7 text-gray-500">
                      Belajar langsung dari video <br className="desktop" />
                      tutorial berkualitas tinggi
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="col-10 col-lg-4 mb-4 aos-init aos-animate"
                data-aos="zoom-out-down"
                data-aos-delay="1000"
              >
                <div className="card-guide card-guide-primary card card__border text-center h-100">
                  <div className="card-body py-5">
                    <div
                      className="embed-responsive embed-responsive-1by1 mx-auto"
                      style={{ width: '120px' }}
                    >
                      <div className="embed-responsive-item">
                        <img
                          src="https://buildwithangga.com/themes/front/images/tata-cara-bwa-3.png"
                          className="img img__cover"
                          alt="cara belajar di buildwithangga"
                        />
                      </div>
                    </div>
                    <h6 className="line-height-1 mt-4 pt-1 text-merriweather">Konsultasi</h6>
                    <span className="h7">
                      Tingkatkan keahlian langsung <br className="desktop" />
                      dari mentor kelas
                    </span>
                    <div className="d-block mt-5">
                      <a
                        href="https://buildwithangga.com/kelas"
                        className="btn btn-primary font-weight-medium"
                      >
                        MULAI BELAJAR
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
