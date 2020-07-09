import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { month } from '../../utils/date';

const mapStateToProps = (state) => ({
  loading: state.kelasSaya.loading,
  kelas: state.kelasSaya.kelas,
});

function Kelas({ kelas, loading }) {
  function convertDate(stringDate, withYear = false) {
    let date = stringDate.split('-');
    return withYear ? `${date[0]} ${month[date[1]]}, ${date[2]}` : `${date[0]} ${month[date[1]]}`;
  }

  function renderKelasList() {
    return kelas.map((val) => {
      return (
        <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4" key={val.id}>
          <Link
            to={`/dashboard/kelas/${val.id}/1`}
            className="kursus-card card"
            style={{
              borderRadius: 8,
            }}
          >
            <div className="tanggal-kelas">
              {convertDate(val.start_date.date)} - {convertDate(val.end_date.date, true)}
            </div>
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
            </div>
          </Link>
        </div>
      );
    });
  }
  return (
    <div className="dashboard-main">
      {kelas.length && !loading ? (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow">
              <h4 className="card-title">Kelas Saya</h4>
              <p>Berikut ini adalah daftar Kelas yang anda ikuti.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow py-5 text-center">
              <h2 className="card-title">Anda Belum Memiliki Kelas</h2>
              <p>Silahkan Cari Kelas Melalui Link di Bawah Ini</p>
              <button className="et_pb_button">
                <Link to={`/kelas`} className="stretched-link">
                  <span className="sr-only">title for screen</span>
                </Link>
                <span>Lihat Kelas</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="row">{renderKelasList()}</div>
    </div>
  );
}

Kelas.propTypes = {
  kelas: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(Kelas);
