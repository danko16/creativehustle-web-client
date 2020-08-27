import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { webinarSayaActions } from '../redux/reducers/webinar-saya';
import { headerActions } from '../redux/reducers/header';
import { cartActions } from '../redux/reducers/cart';
import { invoiceActions } from '../redux/reducers/invoice';
import { isAuthenticated } from '../utils/auth';
import { formatNumber } from '../utils/format';
import Loading from '../shared/loading';
import CartModal from '../shared/cart-modal';
import { month } from '../utils/date';
import Title from '../shared/title';
import './detail-webinar.css';

const mapStateToProps = (state) => ({
  webinar: state.webinar.webinar,
  loading: state.webinar.loading,
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
      free: webinarSayaActions.free,
    },
    dispatch
  );

function DetailWebinar({
  webinar,
  loading,
  showModal,
  addCart,
  carts,
  setCart,
  free,
  recently_added,
  addInvoice,
  deleteCart,
  clearRecent,
}) {
  const history = useHistory();
  const [webinarDetail, setWebinarDetail] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [isCartExist, setIsCartExist] = useState(false);
  const { webinarId } = useParams();
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
    if (!loading && webinar.length) {
      webinar.forEach((val) => {
        if (val.id === parseInt(webinarId)) {
          setWebinarDetail(val);
        }
      });
    }
  }, [webinar, webinarId, loading]);

  useEffect(() => {
    if (carts.length && webinarDetail) {
      carts.forEach((val) => {
        if (val.webinar_id === webinarDetail.id) {
          setIsCartExist(true);
        }
      });
    }
  }, [carts, webinarDetail]);

  useEffect(() => {
    if (webinarDetail && recently_added && recently_added.webinar_id === webinarDetail.id) {
      setShowCartModal(true);
    }
  }, [recently_added, webinarDetail]);

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
    const startTime = webinarDetail.start_date.started_time.split(':');
    const endTime = webinarDetail.start_date.ended_time.split(':');
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
    if (isCartExist) {
      history.push('/pembelian/keranjang');
      return;
    }

    const isAuth = isAuthenticated();

    if (isAuth) {
      clearRecent('recent_invoice', null);
      addCart({
        webinar_id: webinarDetail.id,
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
      webinars_id = [parseInt(webinarId)];

    deleteCart({ type: 'all', cart_id: null });
    addInvoice({ courses_id, webinars_id });
    history.push('/pembelian/bayar');
  }

  function handleFree() {
    const isAuth = isAuthenticated();
    if (isAuth) {
      free({ webinar_id: webinarDetail.id });
    } else {
      showModal({
        show: true,
        type: 'login',
      });
    }
  }

  return webinarDetail ? (
    <div className="detail-webinar">
      <Title title={webinarDetail.title} />
      {showCartModal && <CartModal setShowCartModal={setShowCartModal} detail={webinarDetail} />}
      <div className="container">
        <div className="row dk-thumbnail-wrapper">
          <div className="col-lg-6">
            <img
              src={webinarDetail.thumbnail}
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
                {convertDate(webinarDetail.start_date.date)} -{' '}
                {convertDate(webinarDetail.end_date.date)}
              </h4>
              <h1>
                <strong>{webinarDetail.title}</strong>
              </h1>
            </div>
            <div className="btn-wrp">
              <button
                onClick={webinarDetail.type !== 'free' ? handleAddCart : handleFree}
                style={{
                  maxWidth: '250px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 22,
                }}
                className="subscribe"
              >
                {webinarDetail.type !== 'free' ? (
                  <span>{isCartExist ? 'Lihat' : 'Masukan'} Keranjang</span>
                ) : (
                  <span>Ikuti Webinar</span>
                )}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
              {webinarDetail.type !== 'free' && (
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
              )}
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
            <p>{webinarDetail.desc}</p>
            <h3>
              <strong>Yang Akan Dipelajari</strong>
            </h3>
            <ul>{renderSections(webinarDetail.sections)}</ul>
            <h3>
              <strong>Mentor Webinar</strong>
            </h3>
            <div className="row">
              <div className="col-md-4">
                <img src="/assets/img/header-img.png" alt="profile" width="100%" height="auto" />
              </div>
              <div className="col-md-8">
                <h5>{webinarDetail.teacher_name}</h5>
                <h6
                  style={{
                    paddingTop: 10,
                    color: '#aaa',
                  }}
                >
                  {webinarDetail.teacher_job}
                </h6>
                <p>{webinarDetail.teacher_biography}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 list-detail">
            <div className="price">
              {webinarDetail.promo_price && (
                <h5>
                  Rp. <strong>{formatNumber(webinarDetail.price)}</strong>
                </h5>
              )}
              <h2>
                <strong>
                  {webinarDetail.type === 'free'
                    ? 'Gratis'
                    : `Rp. ${formatNumber(
                        webinarDetail.promo_price ? webinarDetail.promo_price : webinarDetail.price
                      )}`}
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
                  Tanggal : {convertDate(webinarDetail.start_date.date)} -{' '}
                  {convertDate(webinarDetail.end_date.date)}
                </li>
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true"></i> Waktu :{' '}
                  {webinarDetail.start_date.started_time} - {webinarDetail.start_date.ended_time}{' '}
                </li>
                <li>
                  <i className="fa fa-hourglass-half" aria-hidden="true"></i>
                  Durasi : {calcDuration()} Menit{' '}
                </li>
                <li>
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>
                  Topik Webinar : {webinarDetail.topics}
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
          <button
            className="et_pb_button"
            onClick={webinarDetail.type !== 'free' ? handlePayment : handleFree}
          >
            {webinarDetail.type !== 'free' ? (
              <span>Beli Sekarang</span>
            ) : (
              <span>Ikuti Webinar</span>
            )}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

DetailWebinar.propTypes = {
  webinar: PropTypes.array,
  loading: PropTypes.bool,
  free: PropTypes.func,
  showModal: PropTypes.func,
  recently_added: PropTypes.object,
  addInvoice: PropTypes.func,
  deleteCart: PropTypes.func,
  clearRecent: PropTypes.func,
  carts: PropTypes.array,
  addCart: PropTypes.func,
  setCart: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(DetailWebinar);
