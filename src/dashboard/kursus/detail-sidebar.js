import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './detail-sidebar.css';

const mapStateToProps = (state) => ({
  sections: state.kursusSaya.sections,
  contents: state.kursusSaya.contents,
  materi_tambahan: state.kursusSaya.materi_tambahan,
  loading: state.kursusSaya.loading,
});

function DetailSidebar({ sections, contents, materi_tambahan, loading }) {
  const { kursusId } = useParams();
  const [sectionCollapse, setSectionCollapse] = useState({});
  const [sectionSaya, setSectionSaya] = useState([]);
  const [materiTambahan, setMateriTambahan] = useState([]);

  useEffect(() => {
    if (!loading && sections.length) {
      const sectionSaya = sections.filter((val) => val.course_id === parseInt(kursusId));
      setSectionSaya(sectionSaya);
    }

    if (!loading && materi_tambahan.length) {
      const materi = materi_tambahan.filter((val) => val.course_id === parseInt(kursusId));
      setMateriTambahan(materi);
    }
  }, [kursusId, materi_tambahan, sections, loading]);

  function renderContents(contentSaya) {
    return contentSaya.map((val) => {
      const collapseName = `section${val.section_id}`;
      return (
        <li key={val.id} className={ClassNames({ sembunyi: sectionCollapse[collapseName] })}>
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

  function renderMateriTambahan() {
    const collapseName = 'materi_tambahan';
    return materiTambahan.length ? (
      <ul>
        <li
          className="judul"
          onClick={() => {
            setSectionCollapse((prevState) => ({
              ...prevState,
              [collapseName]: !prevState[collapseName],
            }));
          }}
        >
          <span>Section Tambahan</span>
          <i
            className={`fa fa-caret-${sectionCollapse[collapseName] ? 'left' : 'down'}`}
            aria-hidden="true"
          ></i>
        </li>
        <li className={ClassNames({ sembunyi: sectionCollapse[collapseName] })}>
          <NavLink
            to={`/dashboard/kursus/${kursusId}/tambahan`}
            activeStyle={{
              color: '#fff',
              backgroundColor: 'rgba(33, 39, 60, 0.7)',
              borderLeft: '3px solid rgba(182, 198, 255, 0.7)',
            }}
            className="menu-peserta"
          >
            Materi dan Group
          </NavLink>
        </li>
      </ul>
    ) : (
      <div></div>
    );
  }
  return (
    <div className="sidenav">
      <div className="dashboard-nav detail">
        <Link className="back-dashboard" to="/dashboard/kursus">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <span>Kembali ke Home</span>
        </Link>
        <div className="dashboard-nav-inner">
          {renderSections()}
          {renderMateriTambahan()}
        </div>
      </div>
    </div>
  );
}

DetailSidebar.propTypes = {
  sections: PropTypes.array,
  contents: PropTypes.array,
  materi_tambahan: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(DetailSidebar);
