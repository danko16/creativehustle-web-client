import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

const mapStateToProps = (state) => ({
  kelas: state.kelas.kelas,
  loading: state.kelas.loading,
});

function ClassList({ kelas }) {
  const [activePage, setActivePage] = useState({
    totalPage: Math.ceil(kelas.length / 9),
    page: 1,
    from: 0,
    to: 9,
  });

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function renderClass() {
    return kelas.map((val, index) => {
      return (
        <div
          className={ClassNames('col-md-6 col-lg-4 mb-4 d-none', {
            'd-block': index >= activePage.from && index < activePage.to,
          })}
          key={val.id}
        >
          <div
            className="course-card card"
            style={{
              border: 0,
            }}
          >
            <Link to={`/kelas/${val.id}`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <div className="tanggal-kelas">Jun 29th - Jul 27th, 2020</div>
            <img
              src={val.thumbnail}
              alt="thumbnail kelas"
              className="img img__cover_kelas"
              style={{
                paddingTop: 40,
              }}
            />
            <div className="card-body">
              <h6 className="kursus-title line-height-1">{val.title}</h6>
              <p className="m-0">
                <img
                  className="teacher-avatar"
                  src="/assets/img/default-avatar.png"
                  alt="default"
                />
                {val.teacher_name}
              </p>
              <hr />
              <div className="row align-items-center no-gutters">
                <div className="col-auto d-flex justify-items-center">
                  <span style={{ textDecoration: 'line-through' }}>
                    Rp {formatNumber(val.price)}
                  </span>
                  <h6 className="ml-2 line-height-1">Rp {formatNumber(val.promo_price)}</h6>
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
    const pgLength = Math.ceil(kelas.length / 9);
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
    <div className="py-5 container">
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

ClassList.propTypes = {
  kelas: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(ClassList);
