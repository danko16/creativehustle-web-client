import React, { useState } from 'react';
import ClassNames from 'classnames';

const classList = [
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
  {
    title: 'UX Brainstorming',
    level: 'Pemula',
    type: 'GRATIS',
    author: 'Angga Risky',
    job: 'Product Designer',
  },
];

function ClassList() {
  const [activePage, setActivePage] = useState({
    totalPage: Math.ceil(classList.length / 9),
    page: 1,
    from: 0,
    to: 9,
  });
  function renderClass() {
    return classList.map((val, index) => {
      return (
        <div
          className={ClassNames('col-11 col-lg-4 mb-4 d-none', {
            'd-block': index >= activePage.from && index < activePage.to,
          })}
          key={index}
        >
          <div className="course-card card card__compact card__border">
            <div className="card-body pb-0">
              <a
                href="https://www.buildwithangga.com/kelas/ux-brainstorming"
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
                    alt="class thumbnail"
                    src="assets/img/ux_brainstorm_thumb.png"
                    className="img img__cover"
                  />
                </div>
                <a href="https://www.buildwithangga.com/kelas/ux-brainstorming">
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
              <span className="badge-kelas badge-gratis">{val.type}</span>
              <hr />
              <div className="row no-gutters justify-content-between">
                <div
                  style={{ cursor: 'not-allowed' }}
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  className="col-auto d-flex align-items-center"
                  data-original-title="Benefit Kelas Premium"
                >
                  <div
                    className="mr-2 embed-responsive embed-responsive-1by1"
                    style={{ width: '32px' }}
                  >
                    <div className="embed-responsive-item">
                      <img
                        src="assets/icon/ic_sertifikat_gray.png"
                        className="p-1 img__contain"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="h7 mb-0 font-weight-light">
                    <span style={{ color: '#dcdcdc' }} className="font-weight-medium">
                      Sertifikat
                    </span>
                  </p>
                </div>

                <div
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  style={{ cursor: 'not-allowed' }}
                  className="col-auto d-flex align-items-center"
                  data-original-title="Benefit Kelas Premium"
                >
                  <div
                    className="mr-2 embed-responsive embed-responsive-1by1"
                    style={{ width: '32px' }}
                  >
                    <div className="embed-responsive-item">
                      <img
                        src="assets/icon/ic_konsultasi_gray.png"
                        className="p-1 img__contain"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="h7 mb-0 font-weight-light">
                    <span style={{ color: '#dcdcdc' }} className="font-weight-medium">
                      Konsultasi
                    </span>
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
                        src="/storage/assets/images/avatars/angga risky s buildwith angga mentor.png"
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
      );
    });
  }

  function renderPagination() {
    let paginations = [];
    const pgLength = Math.ceil(classList.length / 9);
    for (let i = 0; i < pgLength; i++) {
      const pg = (
        <li
          className={ClassNames('page-item', { active: i + 1 === activePage.page })}
          aria-current="page"
          key={i}
          onClick={() => {
            setActivePage({
              totalPage: activePage.totalPage,
              page: i + 1,
              from: i * 9,
              to: (i + 1) * 9,
            });
          }}
        >
          <span className="page-link">{i + 1}</span>
        </li>
      );

      paginations.push(pg);
    }

    return paginations;
  }

  return (
    <div className="col-11 col-lg-11">
      <div id="load-more-wrapper" className="row justify-content-center">
        {renderClass()}
      </div>

      <ul className="pagination" role="navigation">
        <li
          className={ClassNames('page-item', { disabled: activePage.page === 1 })}
          aria-label="pagination.previous"
          onClick={() => {
            if (activePage.page !== 1) {
              setActivePage((prevState) => ({
                totalPage: activePage.totalPage,
                page: prevState.page - 1,
                from: prevState.from - 9,
                to: prevState.to - 9,
              }));
            }
          }}
        >
          <span className="page-link" aria-hidden="true">
            ‹
          </span>
        </li>
        {renderPagination()}
        <li
          className={ClassNames('page-item', {
            disabled: activePage.page === activePage.totalPage,
          })}
          onClick={() => {
            if (activePage.page !== activePage.totalPage) {
              setActivePage((prevState) => ({
                totalPage: activePage.totalPage,
                page: prevState.page + 1,
                from: prevState.from + 9,
                to: prevState.to + 9,
              }));
            }
          }}
        >
          <span className="page-link" aria-hidden="true">
            ›
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ClassList;
