import React from 'react';

const categories = [
  {
    name: 'IT & Software',
    icon: 'fa-desktop',
  },
  {
    name: 'Pemasaran',
    icon: 'fa-book',
  },
  {
    name: 'Bisnis',
    icon: 'fa-bar-chart',
  },
  {
    name: 'Desain',
    icon: 'fa-book',
  },
  {
    name: 'Akademis',
    icon: 'fa-book',
  },
  {
    name: 'Pengembangan Diri',
    icon: 'fa-book',
  },
  {
    name: 'Fotografis',
    icon: 'fa-camera-retro',
  },
  {
    name: 'Seni',
    icon: 'fa-book',
  },
];

function TopCategories() {
  function renderCategories() {
    return categories.map((val, index) => (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={index}>
        <div className="category card p-3 mb-4">
          <a href="/" className="stretched-link">
            <span className="sr-only">title for screen</span>
          </a>
          <p className="m-0">
            <i className={`fa ${val.icon} mr-2`}></i>
            {val.name}
          </p>
        </div>
      </div>
    ));
  }
  return (
    <section className="mb-3 border-top">
      <div className="row justify-content-center mt-5">
        <div className="col-11">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h1 className="text-merriweather mb-2 text-indigo-3">Kategori Popular</h1>
              <p className="font-weight-light text-indigo-3">
                Jelajahi berbagai macam kategori untuk meningkatkan karir dan skillmu
              </p>
            </div>
          </div>

          <div className="row">{renderCategories()}</div>
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
