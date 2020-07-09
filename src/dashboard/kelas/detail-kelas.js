import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertDate } from '../../utils/date';
import { kelasSayaActions } from '../../redux/reducers/kelas-saya';

import Loading from '../../shared/loading';

const mapStateToProps = (state) => ({
  kelas: state.kelasSaya.kelas,
  schedules: state.kelasSaya.schedules,
  materi_tambahan: state.kelasSaya.materi_tambahan,
  tel_group: state.kelasSaya.tel_group,
  rekaman_kelas: state.kelasSaya.rekaman_kelas,
  loading: state.kelasSaya.loading,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators({ reqSchedules: kelasSayaActions.reqSchedules }, dispatch);

function DetailKelas({
  kelas,
  schedules,
  reqSchedules,
  rekaman_kelas,
  materi_tambahan,
  tel_group,
}) {
  const { kelasId, no } = useParams();
  const [teacherName, setTeacherName] = useState('');

  useEffect(() => {
    if (kelas.length) {
      kelas.forEach((el) => {
        if (el.id === parseInt(kelasId)) {
          setTeacherName(el.teacher_name);
        }
      });
      setTimeout(() => {
        reqSchedules({ class_id: kelasId });
      }, 1000);
    }
  }, [kelas, kelasId, reqSchedules]);

  function renderHead() {
    let idx = 1;
    switch (no) {
      case '1':
        return (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow mb-4">
              <h4 className="card-title">Jadwal Kelas</h4>
              <p>Berikut ini jadwal kelas anda</p>
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
              <h4 className="card-title">Ketentuan Kelas</h4>
              <p>Berikut ini ketentuan dari kelas yang anda ikuti</p>
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
        return rekaman_kelas ? (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow mb-4">
              <h4 className="card-title">Rekaman Kelas</h4>
              <p>Berikut ini Rekaman dari kelas yang anda ikuti</p>
            </div>
          </div>
        ) : (
          <div className="dashboard-main dashboard-dk">
            <div className="card-no-shadow py-5 text-center">
              <h2 className="card-title">Rekaman Belum Tersedia</h2>
              <p>Silahkan Lihat Kembali Jadwal Kelas Anda</p>
              <button className="et_pb_button">
                <NavLink to={`/dashboard/kelas/${kelasId}/1`} className="stretched-link">
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
              <h4 className="card-title">Materi Kelas</h4>
              <p>Berikut ini Materi dari kelas yang anda ikuti</p>
            </div>
            <div className="card-no-shadow">
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
            </div>
          </div>
        );
    }
  }
  return schedules.length && materi_tambahan.length && tel_group ? (
    renderHead()
  ) : (
    <div className="dashboard-main">
      <Loading />
    </div>
  );
}

DetailKelas.propTypes = {
  kelas: PropTypes.array,
  schedules: PropTypes.array,
  materi_tambahan: PropTypes.array,
  rekaman_kelas: PropTypes.object,
  tel_group: PropTypes.string,
  loading: PropTypes.bool,
  reqSchedules: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(DetailKelas);
