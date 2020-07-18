import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams, Link, withRouter } from 'react-router-dom';
import Title from '../shared/title';
import PropTypes from 'prop-types';
import { kursusActions } from '../redux/reducers/kursus';
import { headerActions } from '../redux/reducers/header';
import { cartActions } from '../redux/reducers/cart';
import { isAuthenticated } from '../utils/auth';
import Loading from '../shared/loading';
import CartModal from '../shared/cart-modal';
import YtPlayer from '../yt-player';
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

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function handleAddCart() {
    const isAuth = isAuthenticated();
    if (isAuth) {
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

  function handlePayment() {}

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

  return detailKursus && detailContent ? (
    <div className="detail-kursus">
      <Title title={detailKursus.title} />
      {showCartModal && (
        <CartModal setShowCartModal={setShowCartModal} detailKursus={detailKursus} />
      )}
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
              <p>1.000</p>
            </div>
            <div className="col-md-6 col-lg-3 p-0">
              <h6 className="et_pb_module_header">
                <span>Level</span>
              </h6>
              <p>SEMUA LEVEL</p>
            </div>
            <div className="col-md-6 col-lg-3 p-0">
              <h6 className="et_pb_module_header">
                <span>Topik Kursus</span>
              </h6>
              <p>MICROSTOCK</p>
            </div>
            <div className="col-md-6 col-lg-3 p-0">
              <h6 className="et_pb_module_header">
                <span>Tipe</span>
              </h6>
              <p>PREMIUM</p>
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
            <div className="kursus-benefit">
              <div className="price">
                {detailKursus.promo_price && (
                  <h5>
                    Rp. <strong>{formatNumber(detailKursus.promo_price)}</strong>
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
                  className="subscribe-Kursus"
                >
                  <span>{isCartExist ? 'Lihat' : 'Masukan'} Keranjang</span>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <button
                  onClick={handlePayment}
                  className="subscribe-Kursus"
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
            <div className="mentor-profile">
              <div className="mentor-photo">
                <img src="/assets/img/header-img.png" alt="profile" />
              </div>
              <div className="mentor-detail">
                <h5>{detailKursus.teacher_name}</h5>
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
        </div>
      </div>

      <div className="et_pb_row_2">
        <h3
          className="text-center"
          style={{
            color: '#fff',
          }}
        >
          Ayo segera ikuti kursus ini untuk investasi ilmunya
        </h3>
        <button className="et_pb_button">
          <Link to={`/kursus`} className="stretched-link">
            <span className="sr-only">title for screen</span>
          </Link>
          <span>Lihat Kursus</span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
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
  carts: PropTypes.array,
  setData: PropTypes.func,
  showModal: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(withRouter(DetailKursus));
