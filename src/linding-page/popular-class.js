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

function PopularClass() {
  function renderClass() {
    return popularClasses.map((val, index) => (
      <div className="col-md-5 col-lg-4 col-xl-3 mb-4" key={index}>
        <div className="course-card card">
          <a href="/" className="stretched-link">
            <span className="sr-only">title for screen</span>
          </a>
          <div className="embed-responsive-item">
            <img src={val.thumbnail} alt="thumbnail kelas" className="img img__cover" />
          </div>
          <div className="card-body pb-0">
            <h6 className="line-height-1 mb-2 mt-3">{val.title}</h6>

            <p className="h7 mb-2 text-gray-500">{val.author}</p>
            <div className="row no-gutters justify-content-between">
              <div className="col-auto d-flex align-items-center">
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star"></span>
                <span className="rating-vote text-gray-500">(32.123)</span>
              </div>
            </div>

            <hr />

            <div className="row align-items-center no-gutters mb-4">
              <div className="col-auto d-flex justify-items-center">
                <span style={{ textDecoration: 'line-through' }}>Rp. 2.000.000</span>
                <h6 className="ml-2 line-height-1">Rp. 245.000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <section className="py-3 border-top">
      <div className="mt-5">
        <div className="heading text-center">
          <h1 className="text-merriweather mb-3 text-indigo-3">Kelas Popular</h1>
          <p className="font-weight-light text-indigo-3">
            Materi telah didesain bedasarkan kebutuhan <br className="desktop" />
            perusahaan dibidang teknologi
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col col-12 col-lg-11">
            <div className="row justify-content-center">{renderClass()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularClass;
