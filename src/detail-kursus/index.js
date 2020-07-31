import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import Title from '../shared/title';
import PropTypes from 'prop-types';
import { kursusActions } from '../redux/reducers/kursus';
import { headerActions } from '../redux/reducers/header';
import { cartActions } from '../redux/reducers/cart';
import { invoiceActions } from '../redux/reducers/invoice';
import { isAuthenticated } from '../utils/auth';
import Loading from '../shared/loading';
import CartModal from '../shared/cart-modal';
import YtPlayer from '../yt-player';
import { formatNumber } from '../utils/format';
import './detail-kursus.css';

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  sections: state.kursus.sections,
  contents: state.kursus.contents,
  loading: state.kursus.loading,
  carts: state.cart.carts,
  recently_added: state.cart.recently_added,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setData: kursusActions.setData,
      reqContents: kursusActions.reqContents,
      showModal: headerActions.showModal,
      addCart: cartActions.addCart,
      setCart: cartActions.setData,
      deleteCart: cartActions.deleteCart,
      addInvoice: invoiceActions.addInvoice,
      clearRecent: invoiceActions.setData,
    },
    dispatch
  );

function DetailKursus({
  kursus,
  reqContents,
  setData,
  sections,
  showModal,
  addCart,
  carts,
  setCart,
  history,
  recently_added,
  addInvoice,
  deleteCart,
  clearRecent,
  contents,
  loading,
}) {
  const { kursusId } = useParams();
  const [detailKursus, setDetailKursus] = useState(null);
  const [detailContent, setDetailContent] = useState(null);
  const [detailSections, setDetailSections] = useState(null);
  const [detailContents, setDetailContents] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [isCartExist, setIsCartExist] = useState(false);
  const [toggler, setToggler] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (kursus.length) {
      reqContents({ course_id: parseInt(kursusId) });
    }
  }, [reqContents, kursus, kursusId, setData]);

  useEffect(() => {
    return () => {
      setData('contents', []);
      setCart('recently_added', null);
      showModal({
        show: false,
        type: null,
      });
    };
  }, [setData, setCart, showModal]);

  useEffect(() => {
    if (!loading && kursus.length) {
      const [detail] = kursus.filter((val) => val.id === parseInt(kursusId));
      setDetailKursus(detail);
    }

    if (!loading && contents.length) {
      setDetailContents(contents);
      setDetailContent(contents[0]);
    }

    if (!loading && sections.length) {
      setDetailSections(sections);
    }
  }, [kursusId, kursus, sections, contents, loading]);

  useEffect(() => {
    if (carts.length && detailKursus) {
      carts.forEach((val) => {
        if (val.course_id === detailKursus.id) {
          setIsCartExist(true);
        }
      });
    }
  }, [carts, detailKursus]);

  useEffect(() => {
    if (detailKursus && recently_added && recently_added.course_id === detailKursus.id) {
      setShowCartModal(true);
    }
  }, [recently_added, detailKursus]);

  function handleAddCart() {
    const isAuth = isAuthenticated();
    if (isAuth) {
      clearRecent('recent_invoice', null);
      addCart({
        course_id: detailKursus.id,
      });
    } else {
      showModal({
        show: true,
        type: 'login',
      });
    }
  }

  function handlePayment() {
    const courses_id = [parseInt(kursusId)],
      classes_id = [];

    deleteCart({ type: 'all', cart_id: null });
    addInvoice({ courses_id, classes_id });
    history.push('/pembelian/bayar');
  }

  function renderSections() {
    return detailSections.map((val) => {
      const collapseName = `section${val.id}`;
      const sectionContents = detailContents.filter((ct) => ct.section_id === val.id);
      return (
        <div key={val.id} className={`materi-kelas-public ${toggler[collapseName] && 'active'}`}>
          <div
            className="parent-content"
            onClick={() => {
              setToggler((prevState) => ({
                ...prevState,
                [collapseName]: !prevState[collapseName],
              }));
            }}
          >
            <i
              className={`fa fa-${toggler[collapseName] ? 'minus' : 'plus'}-circle`}
              aria-hidden="true"
            ></i>
            {val.title}
          </div>
          <ul>
            {sectionContents.map((ct) => (
              <li key={ct.id} className="content">
                <i className="fa fa-lock" aria-hidden="true"></i> {ct.title}
              </li>
            ))}
          </ul>
        </div>
      );
    });
  }

  function convertLevel(level) {
    switch (level) {
      case 'all':
        return 'SEMUA LEVEL';
      case 'beginner':
        return 'PEMULA';
      case 'intermediate':
        return 'MENENGAH';
      case 'expert':
        return 'EXPERT';
      default:
        return 'SEMUA LEVEL';
    }
  }

  return detailKursus && detailContent ? (
    <div className="detail-kursus">
      <Title title={detailKursus.title} />
      {showCartModal && <CartModal setShowCartModal={setShowCartModal} detail={detailKursus} />}
      <div className="title">
        <div>
          <h1 className="text-center">
            <strong>{detailKursus.title}</strong>
          </h1>
          <p
            className="text-center"
            style={{
              fontSize: 18,
            }}
          >
            Dimentori oleh <strong>{detailKursus.teacher_name}</strong>
          </p>
          <div className="et_pb_divider_0"></div>
        </div>
        <div className="container">
          <div className="row info">
            <div className="col-md-6 col-lg-3 p-0">
              <h6 className="et_pb_module_header">
                <span>Total Peserta</span>
              </h6>
              <p>{detailKursus.participant}</p>
            </div>
            <div className="col-md-6 col-lg-3 p-0">
              <h6 className="et_pb_module_header">
                <span>Level</span>
              </h6>
              <p style={{ textTransform: 'uppercase' }}>{convertLevel(detailKursus.level)}</p>
            </div>
            <div className="col-md-6 col-lg-3 p-0">
              <h6 className="et_pb_module_header">
                <span>Topik Kursus</span>
              </h6>
              <p style={{ textTransform: 'uppercase' }}>{detailKursus.topics}</p>
            </div>
            <div className="col-md-6 col-lg-3 p-0">
              <h6 className="et_pb_module_header">
                <span>Tipe</span>
              </h6>
              <p style={{ textTransform: 'uppercase' }}>{detailKursus.type}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container mb-5"
        style={{
          marginTop: '-50px',
        }}
      >
        <div className="row">
          <div className="col-lg-8">
            <YtPlayer detailContent={detailContent} />
          </div>

          <div className="col-lg-4">
            <div className="list-detail">
              <div className="price">
                {detailKursus.promo_price && (
                  <h5>
                    Rp. <strong>{formatNumber(detailKursus.price)}</strong>
                  </h5>
                )}
                <h2>
                  <strong>
                    Rp.{' '}
                    {formatNumber(
                      detailKursus.promo_price ? detailKursus.promo_price : detailKursus.price
                    )}
                  </strong>
                </h2>
                <p>Investasi sekali untuk selamanya</p>
              </div>
              <div className="desc">
                <h3>
                  <strong>Kursus ini mencakup</strong>
                </h3>
                <ul>
                  <li>
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    45 menit total durasi kursus
                  </li>
                  <li>
                    <span className="material-icons">description</span>8 sumber daya dapat diunduh
                  </li>
                  <li>
                    <i className="fa fa-spinner" aria-hidden="true"></i>
                    Akses penuh seumur hidup{' '}
                  </li>
                  <li>
                    <i className="fa fa-comments-o" aria-hidden="true"></i>
                    Private telegram group
                  </li>
                  <li>
                    <i className="fa fa-cloud-download" aria-hidden="true"></i>
                    Dapat didownload offline{' '}
                  </li>
                </ul>
                <button
                  onClick={() => {
                    if (isCartExist) {
                      history.push('/pembelian/keranjang');
                    } else {
                      handleAddCart();
                    }
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
                    marginTop: 10,
                  }}
                >
                  <span>Beli Sekarang</span>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h3 className="mb-4">
              <strong>Tentang Kursus</strong>
            </h3>
            <p className="mb-4">{detailKursus.desc}</p>
            <h3 className="mb-4">
              <strong>Materi Kursus</strong>
            </h3>
            {renderSections()}
            <h3 className="mb-4">
              <strong>Mentor Kursus</strong>
            </h3>
            <div className="row">
              <div className="col-md-4">
                <img src="/assets/img/header-img.png" alt="profile" width="100%" height="auto" />
              </div>
              <div className="col-md-8">
                <h5>{detailKursus.teacher_name}</h5>
                <h6
                  style={{
                    paddingTop: 10,
                    color: '#aaa',
                  }}
                >
                  {detailKursus.teacher_job}
                </h6>
                <p>{detailKursus.teacher_biography}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="et_pb_row_2 mt-5">
          <h5
            className="text-center"
            style={{
              textTransform: 'uppercase',
              color: '#3bed9a',
            }}
          >
            <strong>Tunggu Apa Lagi ?</strong>
          </h5>
          <h2
            className="text-center"
            style={{
              color: '#fff',
              marginBottom: '2.75%',
            }}
          >
            <strong> Ayo segera ikuti kursus ini untuk investasi ilmunya</strong>
          </h2>
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

DetailKursus.propTypes = {
  kursus: PropTypes.array,
  sections: PropTypes.array,
  contents: PropTypes.array,
  reqContents: PropTypes.func,
  addCart: PropTypes.func,
  setCart: PropTypes.func,
  history: PropTypes.object,
  recently_added: PropTypes.object,
  addInvoice: PropTypes.func,
  deleteCart: PropTypes.func,
  clearRecent: PropTypes.func,
  carts: PropTypes.array,
  setData: PropTypes.func,
  showModal: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(withRouter(DetailKursus));
