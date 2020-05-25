import React from 'react';

const popularClasses = [
  {
    title: 'Full-Stack Web Developer',
    thumbnail: 'assets/img/thumbnail_kelas_fullstack_web_developer_buildwithangga.png',
    level: 'All Levels',
    type: 'GRATIS',
    author: 'Galih Pratama',
    job: 'CTO at Lexar',
  },
  {
    title: 'Flutter Mobile Apps Developer',
    thumbnail: 'assets/img/kelas online flutter apps developer buildwith angga.png',
    level: 'All Levels',
    type: 'GRATIS',
    author: 'Erico Darmawan',
    job: 'Expert Flutter Developer',
  },
  {
    title: 'Full-Stack JavaScript Developer',
    thumbnail: 'assets/img/kelas full stack web javascript developer buildwith angga.png',
    level: 'All Levels',
    type: 'GRATIS',
    author: 'Yein Narayana',
    job: 'Front-End Developer',
  },
];

function SecondSection() {
  function renderClass() {
    return popularClasses.map((val, index) => (
      <div className="col-11 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" key={index}>
        <div className="course-card card card__compact card__border">
          <div className="card-body pb-0">
            <a
              href="https://www.buildwithangga.com/kelas/full-stack-web-developer"
              className="stretched-link"
            >
              <span className="sr-only">title for screen</span>
            </a>
            <div
              className="thumbnail embed-responsive embed-responsive-16by9"
              style={{ height: '170px' }}
            >
              <div className="embed-responsive-item">
                <img
                  src={val.thumbnail}
                  alt="thumbnail kelas online buildwithangga"
                  className="img img__cover"
                />
              </div>
              <a href="https://www.buildwithangga.com/kelas/full-stack-web-developer">
                <div className="hover-content">
                  <div className="icon-wrapper icon-wrapper__bigger">
                    <div className="icon">
                      <i className="material-icons">remove_red_eye</i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <h6 className="line-height-1 mb-0 mt-3">{val.title}</h6>
            <span className="h7 text-gray-500">{val.level}</span>
            <hr />
            <div className="row no-gutters justify-content-between">
              <div className="col-auto d-flex align-items-center">
                <div
                  className="mr-2 embed-responsive embed-responsive-1by1"
                  style={{ width: '32px' }}
                >
                  <div className="embed-responsive-item">
                    <img
                      src="assets/icon/ic-sertifikat.png"
                      className="p-1 img__contain"
                      alt="sertifikat buildwithangga"
                    />
                  </div>
                </div>
                <p className="h7 mb-0 font-weight-light">
                  <span className="font-weight-medium">Sertifikat</span>
                </p>
              </div>

              <div className="col-auto d-flex align-items-center">
                <div
                  className="mr-2 embed-responsive embed-responsive-1by1"
                  style={{ width: '32px' }}
                >
                  <div className="embed-responsive-item">
                    <img src="assets/icon/ic-konsultasi.png" className="p-1 img__contain" alt="" />
                  </div>
                </div>
                <p className="h7 mb-0 font-weight-light">
                  <span className="font-weight-medium">Konsultasi</span>
                </p>
              </div>
            </div>
            <hr />

            <div className="row align-items-center no-gutters">
              <div className="col-auto">
                <div
                  className="mr-2 embed-responsive embed-responsive-1by1 d-inline-block"
                  style={{ width: '50px' }}
                >
                  <div className="embed-responsive-item">
                    <img
                      src="/storage/assets/images/avatars/galih-pratama-buildwithangga.png"
                      className="img__contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col pl-2">
                <h6 className="mb-0 line-height-1">{val.author}</h6>
                <p className="h7 mb-0 text-gray-500">{val.job}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <section className="py-5 border-top" id="kelas-popular">
      <div className="container mt-5">
        <div className="heading text-center">
          <h1 className="text-merriweather mb-3 text-indigo-3">Kelas Popular</h1>
          <p className="font-weight-light text-indigo-3">
            Materi telah didesain bedasarkan kebutuhan <br className="desktop" />
            perusahaan dibidang teknologi
          </p>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col col-12 col-lg-11">
            <div className="row justify-content-center">{renderClass()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
