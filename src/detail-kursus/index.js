import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { kursusSayaAction } from '../redux/reducers/kursus-saya';
import { isAuthenticated } from '../utils/auth';
import './detail-kursus.css';

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  contents: state.kursus.contents,
  loading: state.kursus.loading,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      subscribe: kursusSayaAction.subscribe,
    },
    dispatch
  );

function DetailKursus({ kursus, contents, subscribe, loading }) {
  const { kursusId } = useParams();
  const [detailKursus, setDetailKursus] = useState(null);
  const [detailContent, setDetailContent] = useState(null);

  useEffect(() => {
    if (!loading && kursus.length) {
      const [detail] = kursus.filter((val) => val.id === parseInt(kursusId));
      setDetailKursus(detail);
    }

    if (!loading && contents.length) {
      const details = contents.filter((val) => val.course_id === parseInt(kursusId));
      setDetailContent(details[0]);
    }
  }, [kursus, kursusId, contents, loading]);
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function handleSubscribe() {
    const isAuth = isAuthenticated();
    if (isAuth) {
      subscribe({
        kursus_id: detailKursus.id,
      });
    } else {
      alert('silahkan login untuk mengikuti kursus');
    }
  }
  return detailKursus && detailContent ? (
    <div className="detail-kursus">
      <Header />
      <div className="title">
        <h1>
          <strong>{detailKursus.title}</strong>
        </h1>
        <span> Taruh deskirpsi kursus di sini</span>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8">
            <iframe
              title={detailContent.title}
              src={detailContent.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: '100%',
                height: 364,
                marginBottom: 25,
              }}
            ></iframe>
            <h3 className="mb-4">
              <strong>Tentang Kursus</strong>
            </h3>
            <p className="mb-4">
              Your content goes here. Edit or remove this text inline or in the module Content
              settings. You can also style every aspect of this content in the module Design
              settings and even apply custom CSS to this text in the module Advanced settings.
            </p>
          </div>
          <div className="col-lg-4">
            <p>Kategori Kursus</p>
            <h2>
              Rp{' '}
              {formatNumber(
                detailKursus.promo_price ? detailKursus.promo_price : detailKursus.price
              )}
            </h2>
            <p>sekali bayar untuk selamanya</p>
            <p className="mt-4 mb-1">Kursus ini mencakup</p>
            <ul className="pl-3">
              <li>Video atas permintaan 38 mnt</li>
              <li>2 sumber daya yang dapat diunduh</li>
              <li>Akses penuh seumur hidup</li>
              <li>Akses di perangkat seluler dan TV</li>
              <li>Sertifikat Penyelesaian</li>
            </ul>
            <button onClick={handleSubscribe} className="subscribe-Kursus">
              Ikuti Kursus
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
}

DetailKursus.propTypes = {
  kursus: PropTypes.array,
  contents: PropTypes.array,
  subscribe: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(DetailKursus);
