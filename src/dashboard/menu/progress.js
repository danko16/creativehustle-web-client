import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './progress.css';

const mapStateToProps = (state) => ({
  kursus: state.kursusSaya.kursus,
  contents: state.kursusSaya.contents,
  rekomendasi: state.kursusSaya.rekomendasi,
  loading: state.kursusSaya.loading,
});

function Progress({ kursus, contents, rekomendasi, loading }) {
  const [kursusSaya, setKursusSaya] = useState([]);
  const [rekomendasiSaya, setRekomendasiSaya] = useState([]);

  useEffect(() => {
    if (!loading && kursus.length) {
      setKursusSaya(kursus);
    }

    if (!loading && rekomendasi.length) {
      setRekomendasiSaya(rekomendasi);
    }
  }, [kursus, contents, rekomendasi, loading]);

  function renderRow() {
    return kursusSaya.map((val) => {
      const kursusId = val.id;
      const contentId = val.first_content;
      return (
        <tr key={val.id}>
          <td>
            <Link
              to={`/dashboard/kursus/${kursusId}/${contentId}`}
              title="Memulai Pemrograman Dengan Kotlin"
            >
              {val.title}
            </Link>
          </td>
          <td>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                style={{ width: `${val.progress}%` }}
                aria-valuemax="100"
              >
                {val.progress}%
              </div>
            </div>
          </td>
        </tr>
      );
    });
  }

  function renderTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Kursus</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>{renderRow()}</tbody>
      </table>
    );
  }

  function renderRekomendasi() {
    return rekomendasiSaya.map((val) => {
      const { star } = val.rating;
      return (
        <div key={val.id} className="col-sm-6 col-lg-4 col-xxl-3 mb-3">
          <div className="rekomendasi-wrapper">
            <Link to={`/kursus/${val.course_id}`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <img src={val.thumbnail} alt="default" />
            <div className="kursus-body">
              <div className="row no-gutters justify-content-between">
                <p className="student-subscr m-0">{val.participant} Peserta</p>
                {/*add class checked to mark star*/}
                <div className="col-auto d-flex align-items-center">
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 1,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 2,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 3,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 4,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 5,
                    })}
                  ></span>
                  <span className="rating-vote text-gray-500">({star})</span>
                </div>
              </div>
              <h6>{val.title}</h6>
              <p className="m-0">
                <img
                  className="teacher-avatar"
                  src="/assets/img/default-avatar.png"
                  alt="default"
                />
                {val.teacher_name}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="dashboard-main">
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="progress-belajar card">
            <div className="card-body ">
              <h4 className="card-title">Rekomendasi Kursus</h4>
              <p>
                Berikut ini adalah beberapa Kursus favorit di creative hustle yang mungkin sesuai
                untukmu.
              </p>
            </div>
            <div className="row">{renderRekomendasi()}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="progress-belajar card">
            <div className="card-body">
              <h4 className="card-title">Progress Belajar</h4>
              <p>Berikut ini adalah daftar Kursus yang kamu ikuti</p>
            </div>
            <div className="row">
              <div className="col-md-12">{renderTable()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Progress.propTypes = {
  kursus: PropTypes.array,
  contents: PropTypes.array,
  rekomendasi: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(Progress);
