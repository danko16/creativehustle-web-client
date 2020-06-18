import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ClassNames from 'classnames';
import './detail-sidebar.css';

const sections = [
  {
    section_id: 1,
    title: 'Section Pertama',
    contents: [
      {
        section_id: 1,
        content_id: 1,
        title: 'Konten Pertama',
        done: false,
      },
      {
        section_id: 1,
        content_id: 2,
        title: 'Konten Kedua',
        done: false,
      },
      {
        section_id: 1,
        content_id: 3,
        title: 'Konten Ketiga',
        done: false,
      },
    ],
  },
  {
    section_id: 2,
    title: 'Section Kedua',
    contents: [
      {
        section_id: 2,
        content_id: 4,
        title: 'Konten Pertama',
        done: false,
      },
      {
        section_id: 2,
        content_id: 5,
        title: 'Konten Kedua',
        done: false,
      },
      {
        section_id: 2,
        content_id: 6,
        title: 'Konten Ketiga',
        done: false,
      },
    ],
  },
];

function DetailSidebar() {
  const [sectionCollapse, setSectionCollapse] = useState({});
  function renderContents(contents) {
    return contents.map((val) => {
      const collapseName = `section${val.section_id}`;

      return (
        <li
          key={val.content_id}
          className={ClassNames({ sembunyi: sectionCollapse[collapseName] })}
        >
          <NavLink
            to={`/dashboard/kursus/1/${val.section_id}/${val.content_id}`}
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
    return sections.map((val) => {
      const collapseName = `section${val.section_id}`;
      return (
        <ul key={val.section_id}>
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
          {renderContents(val.contents)}
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

export default DetailSidebar;
