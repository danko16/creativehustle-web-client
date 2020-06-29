import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { kursusActions } from '../redux/reducers/kursus';
import { kursusSayaAction } from '../redux/reducers/kursus-saya';
import { isAuthenticated } from '../utils/auth';
import Loading from '../shared/loading';
import YtPlayer from '../yt-player';
import './detail-kursus.css';

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  sections: state.kursus.sections,
  contents: state.kursus.contents,
  loading: state.kursus.loading,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setData: kursusActions.setData,
      reqContents: kursusActions.reqContents,
      subscribe: kursusSayaAction.subscribe,
    },
    dispatch
  );

function DetailKursus({ kursus, reqContents, setData, sections, contents, subscribe, loading }) {
  const { kursusId } = useParams();
  const [detailKursus, setDetailKursus] = useState(null);
  const [detailContent, setDetailContent] = useState(null);
  const [detailSections, setDetailSections] = useState(null);
  const [detailContents, setDetailContents] = useState(null);
  const [toggler, setToggler] = useState({});

  useEffect(() => {
    setTimeout(() => {
      reqContents({ course_id: parseInt(kursusId) });
    }, 1000);

    return () => {
      setData('contents', []);
    };
  }, [reqContents, kursusId, setData]);

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
      <div className="title">
        <h1>
          <strong>{detailKursus.title}</strong>
        </h1>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8">
            <YtPlayer detailContent={detailContent} />
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

          <div className="col-lg-4">
            <div className="kursus-benefit">
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
                {detailKursus.benefit.map((val, index) => (
                  <li key={index}>{val}</li>
                ))}
              </ul>
              <button onClick={handleSubscribe} className="subscribe-Kursus">
                <span>Ikuti Kursus</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
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
  subscribe: PropTypes.func,
  reqContents: PropTypes.func,
  setData: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(DetailKursus);
