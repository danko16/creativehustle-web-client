import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './detail-sidebar.css';

const mapStateToProps = (state) => ({
  sections: state.kursusSaya.sections,
  contents: state.kursusSaya.contents,
  loading: state.kursusSaya.loading,
});

function DetailSidebar({ sections, contents, loading }) {
  const { kursusId } = useParams();
  const [sectionCollapse, setSectionCollapse] = useState({});
  const [sectionSaya, setSectionSaya] = useState([]);

  useEffect(() => {
    if (!loading && sections.length) {
      const sectionSaya = sections.filter((val) => val.course_id === parseInt(kursusId));
      setSectionSaya(sectionSaya);
    }
  }, [kursusId, sections, loading]);

  function renderContents(contentSaya) {
    return contentSaya.map((val) => {
      const collapseName = `section${val.section_id}`;
      return (
        <li key={val.id} className={ClassNames({ sembunyi: sectionCollapse[collapseName] })}>
          <NavLink
            to={`/dashboard/kursus/${parseInt(kursusId)}/${val.id}`}
            activeStyle={{
              borderColor: '#2a41e8',
              borderLeft: '3px solid #2a41e8',
            }}
            className="menu-peserta"
          >
            {val.title}
          </NavLink>
          {val.done && <i className={'fa fa-check-circle'} aria-hidden="true"></i>}
        </li>
      );
    });
  }
  function renderSections() {
    return sectionSaya.map((val) => {
      const collapseName = `section${val.id}`;
      const contentSaya = contents.filter((content) => content.section_id === val.id);
      return (
        <ul key={val.id}>
          <li
            className="judul"
            onClick={() => {
              setSectionCollapse((prevState) => ({
                ...prevState,
                [collapseName]: !prevState[collapseName],
              }));
            }}
          >
            <span>{val.title}</span>
            <i
              className={`fa fa-caret-${sectionCollapse[collapseName] ? 'left' : 'down'}`}
              aria-hidden="true"
            ></i>
          </li>
          {renderContents(contentSaya)}
        </ul>
      );
    });
  }
  return (
    <div className="sidenav">
      <div className="dashboard-nav detail">
        <Link className="back-dashboard" to="/dashboard/kursus">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <span>Kembali ke Home</span>
        </Link>
        <div className="dashboard-nav-inner">{renderSections()}</div>
      </div>
    </div>
  );
}

DetailSidebar.propTypes = {
  sections: PropTypes.array,
  contents: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(DetailSidebar);
