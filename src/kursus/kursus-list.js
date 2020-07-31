import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatNumber } from '../utils/format';

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  loading: state.kursus.loading,
});

function KursusList({ kursus, loading, notFound }) {
  const [kursusList, setKursusList] = useState([]);
  const [activePage, setActivePage] = useState({
    totalPage: 1,
    page: 1,
    from: 0,
    to: 9,
  });

  useEffect(() => {
    if (!loading && kursus) {
      setKursusList(kursus);
      setActivePage((prevState) => ({
        ...prevState,
        totalPage: Math.ceil(kursus.length / 9),
      }));
    }
  }, [kursus, setActivePage, loading]);

  function renderClass() {
    return kursusList.map((val, index) => {
      return (
        <div
          className={ClassNames('col-md-6 col-lg-4 mb-4 d-none', {
            'd-block': index >= activePage.from && index < activePage.to,
          })}
          key={index}
        >
          <div className="course-card card">
            <Link to={`/kursus/${val.id}`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <img src={val.thumbnail} alt="thumbnail kelas" className="img img__cover" />
            <div className="card-body">
              <div className="row no-gutters justify-content-between">
                <p className="student-subscr m-0">{val.participant} Siswa</p>
                <div className="col-auto d-flex align-items-center">
                  <span className="rating fa fa-star"></span>
                  <span className="rating fa fa-star"></span>
                  <span className="rating fa fa-star"></span>
                  <span className="rating fa fa-star"></span>
                  <span className="rating fa fa-star"></span>
                  <span className="rating-vote text-gray-500">({val.rating.reviewer})</span>
                </div>
              </div>
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
    const pgLength = Math.ceil(kursusList.length / 9);
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

      {!kursus.length && (
        <div className="container">
          <div className="card-no-shadow search-not-found">
            <h4>Kursus `{notFound}` Tidak Di Temukan</h4>
          </div>
        </div>
      )}

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

KursusList.propTypes = {
  kursus: PropTypes.array,
  notFound: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(KursusList);
