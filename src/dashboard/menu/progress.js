import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardSidebar from '../dashboard-sidebar';

const mapStateToProps = (state) => ({
  kursus: state.kursusSaya.kursus,
  contents: state.kursusSaya.contents,
  loading: state.kursusSaya.loading,
});

function Progress({ kursus, contents, loading }) {
  const [kursusSaya, setKursusSaya] = useState([]);
  const [contentSaya, setContentSaya] = useState([]);

  useEffect(() => {
    if (!loading && kursus.length) {
      setKursusSaya(kursus);
    }

    if (!loading && contents.length) {
      setContentSaya(contents);
    }
  }, [kursus, contents, loading]);

  function renderRow() {
    return kursusSaya.map((val) => {
      const kursusId = val.id;
      const content = contentSaya.filter((content) => content.course_id === val.id);
      const contentId = content[0].id;
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

  return (
    <div className="dashboard-main">
      <DashboardSidebar />
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="progress-belajar card">
            <div className="card-body">
              <h4 className="card-title">Rekomendasi Kursus</h4>
              <p>
                Berikut ini adalah beberapa Kursus favorit di creative hustle yang mungkin sesuai
                untukmu.
              </p>
            </div>
            <div className="row">
              <div className="kursus col-md-12 col-lg-6">
                <img src="/assets/img/default-img.svg" alt="default" />
                <div className="kursus-body">
                  <h4 className="m-0">Judul Kursus</h4>
                  <p className="pl-1">Author kursus</p>
                </div>
              </div>
              <div className="kursus col-md-12 col-lg-6">
                <img src="/assets/img/default-img.svg" alt="default" />
                <div className="kursus-body">
                  <h4 className="m-0">Judul Kursus</h4>
                  <p className="pl-1">Author kursus</p>
                </div>
              </div>
            </div>
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
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(Progress);
