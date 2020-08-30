import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const toggleValues = [
  {
    id: 1,
    title: 'Apakah bisa melihat kursus tanpa daftar ?',
    desc: `Teman-teman dapat melihat sekilas materi yang ada dalam <br /> Webinar online dan video trailer.`,
    transition: '250ms',
  },
  {
    id: 2,
    title: 'Apakah bisa mengikuti Kursus dan Webinar Online bersamaan ?',
    desc: `Teman-teman dapat mengambil sebanyak mungkin kursus dan Webinar Online pada Creative Hustle.`,
    transition: '250ms',
  },
  {
    id: 3,
    title: 'Cara Mendapatkan sertifikat',
    desc: `Sertifikat kelulusan setiap Webinar yang kamu ikuti bisa <br class="xl"/> didapatkan dengan
    menekan tombol<span>&nbsp;</span>
    <strong>
      SELESAI <br class="xl"/> BELAJAR
    </strong>
    <span>&nbsp;</span>pada halaman Webinar.
    <br /> <br />
    Kamu juga dapat melihat laporan belajar pada halaman<span>&nbsp;</span>
    <strong>Progress Belajar</strong>
    <span>&nbsp;</span>dan jika ada Webinar yang telah <br class="xl" /> selesai maka kamu bisa
    menekan tombol<span>&nbsp;</span>
    <strong>AMBIL SERTIFIKAT</strong>
    <span>&nbsp;</span>secara langsung.`,
    transition: '500ms',
  },
  {
    id: 4,
    title: 'Apakah ada Webinar dan kursus Gratisan ?',
    desc:
      'Tentu ada, akan ada beberapa Webinar dan kursus yang dapat diikuti secara gratis untuk teman-teman.',
    transition: '250ms',
  },
];
function HintDropdown() {
  const [togglePb, setTogglePb] = useState({});

  function renderToggler(start, end) {
    return toggleValues.slice(start, end).map((val) => {
      const toggleName = `et_pb_toggle_${val.id}`;
      return (
        <div
          key={val.id}
          className={`et_pb_toggle mb-4 ${toggleName} ${togglePb[toggleName] ? 'active' : ''}`}
          onClick={() => {
            setTogglePb((prevState) => ({
              ...prevState,
              [toggleName]: !prevState[toggleName],
            }));
          }}
          style={{
            transition: `all ${val.transition} linear 0s`,
          }}
          onTransitionEnd={(el) => {
            if (togglePb[toggleName]) {
              el.target.children[0].style.setProperty('color', '#3874ff');
              el.target.children[1].className = 'fa fa-minus-circle';
            } else {
              el.target.children[0].style.setProperty('color', '#0c1460');
              el.target.children[1].className = 'fa fa-plus-circle';
            }
          }}
        >
          <h4 className="et_pb_toggle_title">{val.title}</h4>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
          <div className="et_pb_toggle_content">
            <p dangerouslySetInnerHTML={{ __html: val.desc }}></p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="et_pb_section">
      <div className="container">
        <div className="text-center et_pb_row">
          <h2
            style={{
              fontSize: 26,
            }}
          >
            <strong>Kalau masih bertanya-tanya…</strong>
          </h2>
        </div>
        <div className="row et_pb_row">
          <div className="col-lg-6">{renderToggler(0, 2)}</div>
          <div className="col-lg-6">{renderToggler(2, toggleValues.length)} </div>
        </div>
        <div className="text-center et_pb_row fs-18">
          <p>Pertanyaanmu masih belum terjawab melalui informasi diatas ?</p>
          <span>
            Jangan sungkan untuk bertanya melalui{' '}
            <button
              className="to-learn-path ml-2"
              style={{
                fontSize: 18,
              }}
            >
              <Link to={`/kontak-kami`} className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span>kontak kami</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>{' '}
            atau lihat{' '}
            <button
              className="to-learn-path ml-2"
              style={{
                fontSize: 18,
              }}
            >
              <Link to={`/bantuan`} className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span>Pusat Bantuan</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HintDropdown;
