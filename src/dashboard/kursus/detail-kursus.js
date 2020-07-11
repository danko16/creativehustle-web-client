import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import Loading from '../../shared/loading';
import { kursusSayaAction } from '../../redux/reducers/kursus-saya';

const mapStateToProps = (state) => ({
  contents: state.kursusSaya.contents,
  kursus: state.kursusSaya.kursus,
  rekomendasi: state.kursusSaya.rekomendasi,
  materi_tambahan: state.kursusSaya.materi_tambahan,
  tel_group: state.kursusSaya.tel_group,
  loading: state.kursusSaya.loading,
});

const mapActionToProps = (disatch) =>
  bindActionCreators(
    { reqContents: kursusSayaAction.reqContents, done: kursusSayaAction.done },
    disatch
  );

function DetailKursus({
  contents,
  kursus,
  rekomendasi,
  materi_tambahan,
  reqContents,
  done,
  tel_group,
  loading,
}) {
  const { kursusId, contentId } = useParams();
  const [contentSaya, setContentSaya] = useState(null);
  const [materiTambahan, setMateriTambahan] = useState([]);
  const [telGroup, setTelGroup] = useState('');
  const [nextId, setNextId] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (kursus.length && rekomendasi) {
      reqContents({ course_id: parseInt(kursusId) });
    }
  }, [reqContents, rekomendasi, kursus, kursusId]);

  useEffect(() => {
    if (!loading && contents.length) {
      let content;
      contents.forEach((val, index) => {
        if (val.id === parseInt(contentId)) {
          content = val;
          if (index + 1 < contents.length) {
            setNextId(contents[index + 1].id);
          } else {
            setNextId(val.id);
          }
        }
      });
      setContentSaya(content);
    }

    if (!loading && materi_tambahan && materi_tambahan.length) {
      const materi = materi_tambahan.filter((val) => val.course_id === parseInt(kursusId));
      setMateriTambahan(materi);
    }

    if (!loading && tel_group) {
      setTelGroup(tel_group);
    }
  }, [contentId, kursusId, contents, tel_group, materi_tambahan, loading]);

  if (contentId === 'tambahan') {
    let idx = 1;
    return materiTambahan.length || telGroup ? (
      <div className="dashboard-main">
        <div className="card-no-shadow mb-3">
          <h4 className="card-title">Section Tambahan</h4>
          <p>Berikut ini materi tambahan yang dapat di download dan group telegram dengan mentor</p>
        </div>
        <div
          className={ClassNames('card-no-shadow', {
            'd-none': !materi_tambahan.length && !tel_group,
          })}
        >
          {materiTambahan.map((el, index) => {
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
          {telGroup && (
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
                {telGroup}
              </p>
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className="dashboard-main">
        <Loading />
      </div>
    );
  } else {
    return contentSaya ? (
      <div className="dashboard-main">
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow">
              <h4 className="card-title">{contentSaya.title}</h4>
              <p>Materi bagian: {contentSaya.section_title}</p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="card-tv-wrapper">
              <iframe
                title={contentSaya.title}
                src={contentSaya.url}
                frameBorder="0"
                className="kursus-tv"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  if (!contentSaya.done) {
                    done({
                      content_id: contentSaya.id,
                      course_id: parseInt(kursusId),
                    });
                  }
                }}
                className="next-kursus mr-3"
              >
                Tandai Selesai
              </button>
              <Link
                to={`/dashboard/kursus/${parseInt(kursusId)}/${
                  nextId ? nextId : parseInt(contentId)
                }`}
                className="next-kursus"
              >
                Next Materi
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="dashboard-main">
        <Loading />
      </div>
    );
  }
}

DetailKursus.propTypes = {
  contents: PropTypes.array,
  done: PropTypes.func,
  reqContents: PropTypes.func,
  kursus: PropTypes.array,
  rekomendasi: PropTypes.array,
  materi_tambahan: PropTypes.array,
  tel_group: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(DetailKursus);
