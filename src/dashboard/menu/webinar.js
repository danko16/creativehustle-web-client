import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { month } from '../../utils/date';

const mapStateToProps = (state) => ({
  loading: state.webinarSaya.loading,
  webinar: state.webinarSaya.webinar,
});

function Webinar({ webinar, loading }) {
  function convertDate(stringDate, withYear = false) {
    let date = stringDate.split('-');
    return withYear ? `${date[0]} ${month[date[1]]}, ${date[2]}` : `${date[0]} ${month[date[1]]}`;
  }

  function renderWebinarList() {
    return webinar.map((val) => {
      return (
        <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4" key={val.id}>
          <Link
            to={`/dashboard/webinar/${val.id}/1`}
            className="kursus-card card"
            style={{
              borderRadius: 8,
            }}
          >
            <div className="tanggal-webinar">
              {convertDate(val.start_date.date)} - {convertDate(val.end_date.date, true)}
            </div>
            <img
              src={val.thumbnail}
              alt="thumbnail webinar"
              className="img img__cover_webinar"
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
      {webinar.length && !loading ? (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow">
              <h4 className="card-title">webinar Saya</h4>
              <p>Berikut ini adalah daftar webinar yang anda ikuti.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow py-5 text-center">
              <h2 className="card-title">Anda Belum Memiliki Webinar</h2>
              <p>Silahkan Cari Webinar Melalui Link di Bawah Ini</p>
              <button className="et_pb_button">
                <Link to={`/webinar`} className="stretched-link">
                  <span className="sr-only">title for screen</span>
                </Link>
                <span>Lihat Webinar</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="row">{renderWebinarList()}</div>
    </div>
  );
}

Webinar.propTypes = {
  webinar: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(Webinar);
