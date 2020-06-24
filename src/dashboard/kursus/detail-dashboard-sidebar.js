import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';

const mapStateToProps = (state) => ({
  sections: state.kursusSaya.sections,
  contents: state.kursusSaya.contents,
  loading: state.kursusSaya.loading,
});

function DetailDashboardSidebar({ sections, contents, loading }) {
  const { kursusId } = useParams();

  const [showDropdown, setShowDropdown] = useState(false);
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
        <li
          key={val.content_id}
          className={ClassNames({ sembunyi: sectionCollapse[collapseName] })}
        >
          <NavLink
            to={`/dashboard/kursus/${parseInt(kursusId)}/${val.id}`}
            activeStyle={{
              color: '#fff',
              backgroundColor: 'rgba(33, 39, 60, 0.7)',
              borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
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
    <div className="dashboard-sidebar">
      <div
        onClick={() => {
          setShowDropdown((prevState) => !prevState);
        }}
        className={ClassNames('dashboard-responsive-nav-trigger')}
      >
        <div className="hamburger-container">
          <span className="hamburger">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
          <span className="trigger-title">Dashboard Navigation</span>
        </div>
      </div>
      <div
        className={ClassNames('dashboard-nav detail', {
          active: showDropdown,
        })}
      >
        {renderSections()}
      </div>
    </div>
  );
}

DetailDashboardSidebar.propTypes = {
  sections: PropTypes.array,
  contents: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(DetailDashboardSidebar);
