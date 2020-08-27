import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import { bindActionCreators } from 'redux';
import { useParams, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertDate } from '../../utils/date';
import { webinarSayaActions } from '../../redux/reducers/webinar-saya';

import Loading from '../../shared/loading';

const mapStateToProps = (state) => ({
  webinar: state.webinarSaya.webinar,
  schedules: state.webinarSaya.schedules,
  materi_tambahan: state.webinarSaya.materi_tambahan,
  tel_group: state.webinarSaya.tel_group,
  rekaman_webinar: state.webinarSaya.rekaman_webinar,
  loading: state.webinarSaya.loading,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators({ reqSchedules: webinarSayaActions.reqSchedules }, dispatch);

function DetailWebinar({
  webinar,
  schedules,
  reqSchedules,
  rekaman_webinar,
  materi_tambahan,
  tel_group,
}) {
  const { webinarId, no } = useParams();
  const [teacherName, setTeacherName] = useState('');

  useEffect(() => {
    if (webinar.length) {
      webinar.forEach((el) => {
        if (el.id === parseInt(webinarId)) {
          setTeacherName(el.teacher_name);
        }
      });
      reqSchedules({ webinar_id: webinarId });
    }
  }, [webinar, webinarId, reqSchedules]);

  function renderHead() {
    let idx = 1;
    switch (no) {
      case '1':
        return (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow mb-4">
              <h4 className="card-title">Jadwal Webinar</h4>
              <p>Berikut ini jadwal webinar anda</p>
            </div>
            <table className="table">
              <thead className="thead">
                <tr>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Waktu</th>
                  <th scope="col">Link</th>
                  <th scope="col">Password</th>
                  <th scope="col">Mentor</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((val) => (
                  <tr key={val.id}>
                    <td>{convertDate(val.date)}</td>
                    <td>
                      {val.started_time} - {val.ended_time}
                    </td>
                    <td>{val.link}</td>
                    <td>{val.password}</td>
                    <td>
                      <img
                        className="teacher-avatar"
                        src="/assets/img/default-avatar.png"
                        alt="default"
                      />
                      {teacherName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case '2':
        return (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow mb-4">
              <h4 className="card-title">Ketentuan Webinar</h4>
              <p>Berikut ini ketentuan dari webinar yang anda ikuti</p>
            </div>
            <div className="card-no-shadow">
              <p
                style={{
                  textIndent: '2em',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis gravida
                tellus in convallis. Nullam molestie fermentum turpis vitae posuere. Suspendisse
                vitae tincidunt augue. Donec lobortis neque sit amet nibh lacinia volutpat.
                Suspendisse id arcu lacus. Proin faucibus imperdiet pulvinar. Sed mattis elit
                consequat interdum viverra. Sed velit neque, ultrices ac sapien a, pharetra pharetra
                eros. Suspendisse nec mauris dictum, ornare mi quis, ullamcorper elit. Nulla aliquam
                libero in ullamcorper ultrices. Nunc a molestie nibh, nec molestie augue. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Nullam felis
                nisi, aliquet sed nibh a, lobortis tristique mi. Cras tincidunt erat a neque cursus
                varius.
              </p>
            </div>
          </div>
        );
      case '3':
        return rekaman_webinar ? (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow mb-4">
              <h4 className="card-title">Rekaman Webinar</h4>
              <p>Berikut ini Rekaman dari webinar yang anda ikuti</p>
            </div>
          </div>
        ) : (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow py-5 text-center">
              <h2 className="card-title">Rekaman Belum Tersedia</h2>
              <p>Silahkan Lihat Kembali Jadwal Webinar Anda</p>
              <button className="et_pb_button">
                <NavLink to={`/dashboard/webinar/${webinarId}/1`} className="stretched-link">
                  <span className="sr-only">title for screen</span>
                </NavLink>
                <span>Lihat Jadwal</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow mb-4">
              <h4 className="card-title">Materi Webinar</h4>
              <p>Berikut ini Materi dari webinar yang anda ikuti</p>
            </div>
            <div
              className={ClassNames('card-no-shadow', {
                'd-none': !materi_tambahan.length && !tel_group,
              })}
            >
              {materi_tambahan.map((el, index) => {
                idx = idx + 1;
                return (
                  <div key={el.id} className="st-separator">
                    <h5 className="mb-3">
                      {index + 1}. {el.title}
                    </h5>
                    <a href={el.matter}>Download Materi</a>
                  </div>
                );
              })}
              {tel_group && (
                <div className="st-separator">
                  <h5>{idx}. Group Telegram dengan Mentor</h5>
                  <p className="m-0">
                    <img
                      src="/assets/icon/icons8-telegram-app-48.png"
                      alt="telegram group"
                      style={{
                        height: 45,
                        width: 45,
                        marginRight: 6,
                      }}
                    />
                    {tel_group}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
    }
  }
  return schedules.length ? (
    renderHead()
  ) : (
    <div className="dashboard-main">
      <Loading />
    </div>
  );
}

DetailWebinar.propTypes = {
  webinar: PropTypes.array,
  schedules: PropTypes.array,
  materi_tambahan: PropTypes.array,
  rekaman_webinar: PropTypes.object,
  tel_group: PropTypes.string,
  loading: PropTypes.bool,
  reqSchedules: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(DetailWebinar);
