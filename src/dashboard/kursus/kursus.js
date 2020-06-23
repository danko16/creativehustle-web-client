import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardSidebar from '../dashboard-sidebar';

const mapStateToProps = (state) => ({
  kursus: state.kursusSaya.kursus,
  contents: state.kursusSaya.contents,
  loading: state.kursusSaya.loading,
});

function Kursus({ kursus, contents, loading }) {
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

  function renderKursusList() {
    return kursusSaya.map((val) => {
      const kursusId = val.id;
      const content = contentSaya.filter((content) => content.course_id === val.id);
      const contentId = content[0].id;
      return (
        <div key={val.id} className="col-md-6 col-lg-6 col-xl-3 mb-4">
          <Link className="kursus-card card" to={`/dashboard/kursus/${kursusId}/${contentId}`}>
            <img src={`${val.thumbnail}`} alt="default" />
            <div className="kursus-body card-body">
              <h5 className="m-0">{val.title}</h5>
              <p>{val.teacher_name}</p>
            </div>
          </Link>
        </div>
      );
    });
  }
  return (
    <div className="dashboard-main">
      <DashboardSidebar />
      {kursusSaya.length ? (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow">
              <h4 className="card-title">Kursus Saya</h4>
              <p>Berikut ini adalah daftar kursus yang anda ikuti.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow py-5 text-center">
              <h2 className="card-title">Anda Belum Memiliki Kursus</h2>
              <p>Silahkan Cari Kursus Melalui Link di Bawah Ini</p>
              <button className="et_pb_button">
                <Link to={`/kursus`} className="stretched-link">
                  <span className="sr-only">title for screen</span>
                </Link>
                <span>Lihat Kursus</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="row">{renderKursusList()}</div>
    </div>
  );
}

Kursus.propTypes = {
  kursus: PropTypes.array,
  contents: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(Kursus);
