import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import DetailDashboardSidebar from './detail-dashboard-sidebar';
import { kursusSayaAction } from '../../redux/reducers/kursus-saya';

const mapStateToProps = (state) => ({
  contents: state.kursusSaya.contents,
  loading: state.kursusSaya.loading,
});

const mapActionToProps = (disatch) => bindActionCreators({ done: kursusSayaAction.done }, disatch);

function DetailKursus({ contents, done, loading }) {
  const { kursusId, contentId } = useParams();
  const [contentSaya, setContentSaya] = useState({});
  const [nextId, setNextId] = useState();
  useEffect(() => {
    if (!loading && contents.length) {
      let content;
      const kursusContent = contents.filter((val) => val.course_id === parseInt(kursusId));
      kursusContent.forEach((val, index) => {
        if (val.id === parseInt(contentId)) {
          content = val;
          if (index + 1 < kursusContent.length) {
            setNextId(kursusContent[index + 1].id);
          } else {
            setNextId(val.id);
          }
        }
      });
      setContentSaya(content);
    }
  }, [contentId, kursusId, contents, loading]);
  return (
    <div>
      <div className="dashboard-main">
        <Link className="back-dashboard top-side-bar" to="/dashboard/kursus">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <span>Kembali ke Home</span>
        </Link>
        <DetailDashboardSidebar />
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
    </div>
  );
}

DetailKursus.propTypes = {
  contents: PropTypes.array,
  done: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(DetailKursus);
