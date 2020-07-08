import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../shared/loading';
import { month } from '../utils/date';
import Title from '../shared/title';
import './detail-kelas.css';

const mapStateToProps = (state) => ({
  kelas: state.kelas.kelas,
  loading: state.kelas.loading,
});

function DetailKelas({ kelas, loading }) {
  const [kelasDetail, setKelasDetail] = useState(null);
  const { kelasId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && kelas.length) {
      kelas.forEach((val) => {
        if (val.id === parseInt(kelasId)) {
          setTimeout(() => {
            setKelasDetail(val);
          }, 1000);
        }
      });
    }
  }, [kelas, kelasId, loading]);

  function convertDate(stringDate) {
    let date = stringDate.split('-');
    return `${date[0]} ${month[date[1]]} ${date[2]}`;
  }

  function renderSections(sections) {
    return sections.map((val, index) => (
      <li key={index}>
        {index + 1}. {val}
      </li>
    ));
  }

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function calcDuration() {
    const startTime = kelasDetail.start_date.started_time.split(':');
    const endTime = kelasDetail.start_date.ended_time.split(':');
    const startHour = parseInt(startTime[0]) * 60;
    const endHour = parseInt(endTime[0]) * 60;
    let startMinutes = startTime[1];
    let endMinutes = endTime[1];

    if (startMinutes[0] === '0') {
      startMinutes = parseInt(startMinutes[1]);
    } else {
      startMinutes = parseInt(startMinutes);
    }

    if (endMinutes[0] === '0') {
      endMinutes = parseInt(endMinutes[1]);
    } else {
      endMinutes = parseInt(endMinutes);
    }

    return endHour + endMinutes - (startHour + startMinutes);
  }

  return kelasDetail ? (
    <div className="detail-kelas">
      <Title />
      <div className="container">
        <div className="row dk-thumbnail-wrapper">
          <div className="col-lg-6">
            <img
              src="/assets/img/kelas full stack web javascript developer buildwith angga.png"
              alt="test"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="col-lg-6 p-0">
            <div className="et_pb_text_inner">
              <h4>
                {convertDate(kelasDetail.start_date.date)} -{' '}
                {convertDate(kelasDetail.end_date.date)}
              </h4>
              <h1>
                <strong>{kelasDetail.title}</strong>
              </h1>
            </div>
            <div className="btn-wrp">
              <button className="subscribe-kelas">
                <span>Daftar Kelas</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row dk-content-wrapper">
          <div
            className="col-lg-8"
            style={{
              paddingRight: '2rem',
            }}
          >
            <h3>
              <strong>Tentang Kelas</strong>
            </h3>
            <p>{kelasDetail.desc}</p>
            <h3>
              <strong>Yang Akan Dipelajari</strong>
            </h3>
            <ul>{renderSections(kelasDetail.sections)}</ul>
            <h3>
              <strong>Mentor Kelas</strong>
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="/assets/img/header-img.png"
                  alt="header"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="col-lg-6">
                <h5>Reezky pradata</h5>
                <h6
                  style={{
                    paddingTop: 10,
                    color: '#aaa',
                  }}
                >
                  Asik
                </h6>
                <p>
                  Your content goes here. Edit or remove this text inline or in the module Content
                  settings. You can also style every aspect of this content in the module Design
                  settings and even apply custom CSS to this text in the module Advanced settings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h3>
              <strong>Investasi Mengikuti Kelas</strong>
            </h3>
            <div>
              <h3>Rp. {formatNumber(kelasDetail.price)}/orang</h3>
              <p className="akses font-weight-light">sekali bayar untuk selamanya</p>
            </div>
            <h3>
              <strong>Jadwal dan Durasi</strong>
            </h3>
            <ul>
              <li>
                Tanggal : {convertDate(kelasDetail.start_date.date)} -{' '}
                {convertDate(kelasDetail.end_date.date)}
              </li>
              <li>
                Pukul : {kelasDetail.start_date.started_time} - {kelasDetail.start_date.ended_time}{' '}
              </li>
              <li>Durasi : {calcDuration()} Menit</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="et_pb_row_2">
        <h3
          className="text-center"
          style={{
            color: '#fff',
          }}
        >
          Ayo segera ikuti kelas ini untuk investasi ilmunya
        </h3>
        <button className="et_pb_button">
          <Link to={`/kelas`} className="stretched-link">
            <span className="sr-only">title for screen</span>
          </Link>
          <span>Lihat Kelas</span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

DetailKelas.propTypes = {
  kelas: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(DetailKelas);
