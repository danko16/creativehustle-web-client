import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { headerActions } from '../redux/reducers/header';
import { cartActions } from '../redux/reducers/cart';
import { invoiceActions } from '../redux/reducers/invoice';
import { isAuthenticated } from '../utils/auth';
import { formatNumber } from '../utils/format';
import Loading from '../shared/loading';
import CartModal from '../shared/cart-modal';
import { month } from '../utils/date';
import Title from '../shared/title';
import './detail-kelas.css';

const mapStateToProps = (state) => ({
  kelas: state.kelas.kelas,
  loading: state.kelas.loading,
  carts: state.cart.carts,
  recently_added: state.cart.recently_added,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      showModal: headerActions.showModal,
      addCart: cartActions.addCart,
      setCart: cartActions.setData,
      deleteCart: cartActions.deleteCart,
      addInvoice: invoiceActions.addInvoice,
      clearRecent: invoiceActions.setData,
    },
    dispatch
  );

function DetailKelas({
  kelas,
  loading,
  showModal,
  addCart,
  carts,
  setCart,
  recently_added,
  addInvoice,
  deleteCart,
  clearRecent,
}) {
  const history = useHistory();
  const [kelasDetail, setKelasDetail] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [isCartExist, setIsCartExist] = useState(false);
  const { kelasId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      setCart('recently_added', null);
      showModal({
        show: false,
        type: null,
      });
    };
  }, [showModal, setCart]);

  useEffect(() => {
    if (!loading && kelas.length) {
      kelas.forEach((val) => {
        if (val.id === parseInt(kelasId)) {
          setKelasDetail(val);
        }
      });
    }
  }, [kelas, kelasId, loading]);

  useEffect(() => {
    if (carts.length && kelasDetail) {
      carts.forEach((val) => {
        if (val.class_id === kelasDetail.id) {
          setIsCartExist(true);
        }
      });
    }
  }, [carts, kelasDetail]);

  useEffect(() => {
    if (kelasDetail && recently_added && recently_added.class_id === kelasDetail.id) {
      setShowCartModal(true);
    }
  }, [recently_added, kelasDetail]);

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

  function handleAddCart() {
    const isAuth = isAuthenticated();
    if (isAuth) {
      clearRecent('recent_invoice', null);
      addCart({
        class_id: kelasDetail.id,
      });
    } else {
      showModal({
        show: true,
        type: 'login',
      });
    }
  }

  function handlePayment() {
    const courses_id = [],
      classes_id = [parseInt(kelasId)];

    deleteCart({ type: 'all', cart_id: null });
    addInvoice({ courses_id, classes_id });
    history.push('/pembelian/bayar');
  }

  return kelasDetail ? (
    <div className="detail-kelas">
      <Title title={kelasDetail.title} />
      {showCartModal && <CartModal setShowCartModal={setShowCartModal} detail={kelasDetail} />}
      <div className="container">
        <div className="row dk-thumbnail-wrapper">
          <div className="col-lg-6">
            <img
              src={kelasDetail.thumbnail}
              alt="test"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="col-lg-6 et_pb_text_wrapper p-0">
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
              <button
                onClick={() => {
                  if (isCartExist) {
                    history.push('/pembelian/keranjang');
                  } else {
                    handleAddCart();
                  }
                }}
                style={{
                  maxWidth: '250px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 22,
                }}
                className="subscribe"
              >
                <span>{isCartExist ? 'Lihat' : 'Masukan'} Keranjang</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
              <button
                onClick={handlePayment}
                className="subscribe"
                style={{
                  backgroundColor: '#ff6161',
                  maxWidth: '250px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 22,
                }}
              >
                <span>Beli Sekarang</span>
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
              <strong>Tentang Webinar</strong>
            </h3>
            <p>{kelasDetail.desc}</p>
            <h3>
              <strong>Yang Akan Dipelajari</strong>
            </h3>
            <ul>{renderSections(kelasDetail.sections)}</ul>
            <h3>
              <strong>Mentor Webinar</strong>
            </h3>
            <div className="row">
              <div className="col-md-4">
                <img src="/assets/img/header-img.png" alt="profile" width="100%" height="auto" />
              </div>
              <div className="col-md-8">
                <h5>{kelasDetail.teacher_name}</h5>
                <h6
                  style={{
                    paddingTop: 10,
                    color: '#aaa',
                  }}
                >
                  {kelasDetail.teacher_job}
                </h6>
                <p>{kelasDetail.teacher_biography}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 list-detail">
            <div className="price">
              {kelasDetail.promo_price && (
                <h5>
                  Rp. <strong>{formatNumber(kelasDetail.price)}</strong>
                </h5>
              )}
              <h2>
                <strong>
                  Rp.{' '}
                  {formatNumber(
                    kelasDetail.promo_price ? kelasDetail.promo_price : kelasDetail.price
                  )}
                </strong>
              </h2>
              <p>Investasi mengikuti Webinar</p>
            </div>
            <div className="desc">
              <h3>
                <strong>Detail Pelaksanaan Webinar</strong>
              </h3>
              <ul>
                <li>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  Tanggal : {convertDate(kelasDetail.start_date.date)} -{' '}
                  {convertDate(kelasDetail.end_date.date)}
                </li>
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true"></i> Waktu :{' '}
                  {kelasDetail.start_date.started_time} - {kelasDetail.start_date.ended_time}{' '}
                </li>
                <li>
                  <i className="fa fa-hourglass-half" aria-hidden="true"></i>
                  Durasi : {calcDuration()} Menit{' '}
                </li>
                <li>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>
                  Topik Webinar : {kelasDetail.topics}
                </li>
                <li>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  Maksimal Peserta: 50 Orang
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="et_pb_row_2 mb-5">
          <h1
            className="text-center"
            style={{
              color: '#fff',
            }}
          >
            <strong>Segera Daftar Webinar ini</strong>
          </h1>
          <p
            className="text-center"
            style={{
              color: '#fff',
              marginBottom: ' 2.75%',
            }}
          >
            Investasi murah ! Kuota terbatas ! Ya kali nanti-nanti daftarnya, keburu penuh kuotanya
          </p>
          <button className="et_pb_button" onClick={handlePayment}>
            <span>Beli Sekarang</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

DetailKelas.propTypes = {
  kelas: PropTypes.array,
  loading: PropTypes.bool,
  subscribe: PropTypes.func,
  showModal: PropTypes.func,
  recently_added: PropTypes.object,
  addInvoice: PropTypes.func,
  deleteCart: PropTypes.func,
  clearRecent: PropTypes.func,
  carts: PropTypes.array,
  addCart: PropTypes.func,
  setCart: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(DetailKelas);
