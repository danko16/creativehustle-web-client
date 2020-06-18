import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailDashboardSidebar from './detail-dashboard-sidebar';

const sections = [
  {
    section_id: 1,
    title: 'Section Pertama',
    contents: [
      {
        section_id: 1,
        content_id: 1,
        title: 'Konten Pertama',
        url: 'https://www.youtube.com/embed/0FcVu-BlGQg',
        done: false,
      },
      {
        section_id: 1,
        content_id: 2,
        title: 'Konten Kedua',
        url: 'https://www.youtube.com/embed/UWYPTui1wCc',
        done: false,
      },
      {
        section_id: 1,
        content_id: 3,
        title: 'Konten Ketiga',
        url: 'https://www.youtube.com/embed/ZPtSSytR8XE',
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
        url: 'https://www.youtube.com/embed/0FcVu-BlGQg',
        done: false,
      },
      {
        section_id: 2,
        content_id: 5,
        title: 'Konten Kedua',
        url: 'https://www.youtube.com/embed/0FcVu-BlGQg',
        done: false,
      },
      {
        section_id: 2,
        content_id: 6,
        title: 'Konten Ketiga',
        url: 'https://www.youtube.com/embed/0FcVu-BlGQg',
        done: false,
      },
    ],
  },
];

function DetailKursus() {
  const { sectionId, contentId } = useParams();
  const [section, setSection] = useState({});
  const [content, setContent] = useState({});
  useEffect(() => {
    const [section] = sections.filter((val) => val.section_id === parseInt(sectionId));
    const [content] = section.contents.filter((val) => val.content_id === parseInt(contentId));
    setSection(section);
    setContent(content);
  }, [sectionId, contentId]);
  return (
    <div>
      <div className="dashboard-main">
        <DetailDashboardSidebar />
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow">
              <h4 className="card-title">{content.title}</h4>
              <p>Materi bagian: {section.title}</p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="card-no-shadow">
              <iframe
                title={content.title}
                height="315"
                src={content.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: '100%',
                }}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <button className="next-kursus mr-3">Tandai Selesai</button>
              <button className="next-kursus">Next Materi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailKursus;
