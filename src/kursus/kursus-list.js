import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  loading: state.kursus.loading,
});

function KursusList({ kursus, loading }) {
  const [kursusList, setKursusList] = useState([]);
  const [activePage, setActivePage] = useState({
    totalPage: Math.ceil(kursusList.length / 9),
    page: 1,
    from: 0,
    to: 9,
  });

  useEffect(() => {
    if (!loading && kursus.length) {
      setKursusList(kursus);
    }
  }, [kursus, loading]);
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
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
            <div className="card-body pb-0">
              <h6 className="line-height-1 mb-2 mt-3">{val.title}</h6>

              <p className="h7 mb-2 text-gray-500">{val.teacher_name}</p>
              <div className="row no-gutters justify-content-between">
                <div className="col-auto d-flex align-items-center">
                  <span className="rating fa fa-star checked"></span>
                  <span className="rating fa fa-star checked"></span>
                  <span className="rating fa fa-star checked"></span>
                  <span className="rating fa fa-star checked"></span>
                  <span className="rating fa fa-star"></span>
                  <span className="rating-vote text-gray-500">(123)</span>
                </div>
              </div>

              <hr />

              <div className="row align-items-center no-gutters mb-4">
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
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(KursusList);
