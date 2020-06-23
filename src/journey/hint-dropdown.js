import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HintDropdown() {
  const [togglePb, setTogglePb] = useState({
    et_pb_toggle_1: false,
    et_pb_toggle_2: false,
    et_pb_toggle_3: false,
    et_pb_toggle_4: false,
  });
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
          <div className="col-lg-6">
            <div
              className={`et_pb_toggle pd_sm_dyn mb-4 ${togglePb.et_pb_toggle_1 && 'active'}`}
              onClick={() => {
                setTogglePb({
                  ...togglePb,
                  et_pb_toggle_1: !togglePb.et_pb_toggle_1,
                });
              }}
            >
              <h4 className="et_pb_toggle_title  m-0">
                <p className="m-0"> Apakah bisa melihat kursus tanpa daftar ?</p>
                <i
                  className={`fa fa-${togglePb.et_pb_toggle_1 ? 'minus' : 'plus'}-circle`}
                  aria-hidden="true"
                ></i>
              </h4>
              <div className="et_pb_toggle_content">
                <p>
                  Teman-teman dapat melihat sekilas materi yang ada dalam <br /> kelas online dan
                  video trailer.
                </p>
              </div>
            </div>
            <div
              className={`et_pb_toggle pd_dyn mb-4 ${togglePb.et_pb_toggle_2 && 'active'}`}
              onClick={() => {
                setTogglePb({
                  ...togglePb,
                  et_pb_toggle_2: !togglePb.et_pb_toggle_2,
                });
              }}
            >
              <h4 className="et_pb_toggle_title  m-0">
                <p className="m-0"> Apakah bisa mengikuti Kursus dan Kelas Online bersamaan ?</p>
                <i
                  className={`fa fa-${togglePb.et_pb_toggle_2 ? 'minus' : 'plus'}-circle`}
                  aria-hidden="true"
                ></i>
              </h4>
              <div className="et_pb_toggle_content">
                <p>
                  Your content goes here. Edit or remove this text inline or in the module Content
                  settings. You can also style every aspect of this content in the module Design
                  settings and even apply custom CSS to this text in the module Advanced settings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`et_pb_toggle mb-4 ${togglePb.et_pb_toggle_3 && 'active'}`}
              onClick={() => {
                setTogglePb({
                  ...togglePb,
                  et_pb_toggle_3: !togglePb.et_pb_toggle_3,
                });
              }}
            >
              <h4 className="et_pb_toggle_title  m-0">
                <p className="m-0"> Cara Mendapatkan sertifikat</p>
                <i
                  className={`fa fa-${togglePb.et_pb_toggle_3 ? 'minus' : 'plus'}-circle`}
                  aria-hidden="true"
                ></i>
              </h4>
              <div className="et_pb_toggle_content">
                <p>
                  Sertifikat kelulusan setiap kelas yang kamu ikuti bisa <br /> didapatkan dengan
                  menekan tombol<span>&nbsp;</span>
                  <strong>
                    SELESAI <br /> BELAJAR
                  </strong>
                  <span>&nbsp;</span>pada halaman kelas.
                </p>
                <p>
                  Kamu juga dapat melihat laporan belajar pada halaman<span>&nbsp;</span>
                  <strong>Progress Belajar</strong>
                  <span>&nbsp;</span>dan jika ada kelas yang telah <br /> selesai maka kamu bisa
                  menekan tombol<span>&nbsp;</span>
                  <strong>AMBIL SERTIFIKAT</strong>
                  <span>&nbsp;</span>secara langsung.
                </p>
              </div>
            </div>
            <div
              className={`et_pb_toggle ${togglePb.et_pb_toggle_4 && 'active'}`}
              onClick={() => {
                setTogglePb({
                  ...togglePb,
                  et_pb_toggle_4: !togglePb.et_pb_toggle_4,
                });
              }}
            >
              <h4 className="et_pb_toggle_title  m-0">
                <p className="m-0"> Your Title Goes Here</p>
                <i
                  className={`fa fa-${togglePb.et_pb_toggle_4 ? 'minus' : 'plus'}-circle`}
                  aria-hidden="true"
                ></i>
              </h4>
              <div className="et_pb_toggle_content">
                <p>
                  Your content goes here. Edit or remove this text inline or in the module Content
                  settings. You can also style every aspect of this content in the module Design
                  settings and even apply custom CSS to this text in the module Advanced settings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center et_pb_row">
          <span>
            Pertanyaanmu masih belum terjawab melalui informasi diatas ? Jangan sungkan untuk
            bertanya melalui
          </span>
          <button
            className="to-learn-path ml-2"
            style={{
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            <Link to={`/journey`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span>kontak kami</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HintDropdown;
