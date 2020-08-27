import React from 'react';
import { Link } from 'react-router-dom';

function DifClassCourse() {
  return (
    <div className="et_pb_section et_pb_section_7 fs-18">
      <div className="container">
        <div className="text-center et_pb_row">
          <h2
            style={{
              fontSize: 26,
            }}
          >
            <strong>Perbedaan Fitur Kursus dan Webinar Online ?</strong>
          </h2>
          <p>
            Buat teman-teman yang bingung apa sih perbedaan Kursus dan Webinar <br /> premium di
            Creative Hustle id coba lihat perbedaanya.
          </p>
        </div>
        <div className="row et_pb_row">
          <div className="col-lg-6 mb-4">
            <div className="et_pb_column_19">
              <div className="et_pb_text_19">
                <h3 className="text-center">
                  <strong>Kursus Premium</strong>
                </h3>
              </div>
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Investasi mulai Rp. 150.000</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Berlangsung secara tidak langsung</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Durasi kursus minimal 45 menit</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Mendapatkan bahan belajar</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Video dapat didownload offline</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Peserta tidak terbatas dalam satu kursus</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Video berkualitas HD</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p> Mendapatkan e-sertifikat kursus</p>
                </li>
                <li>
                  <Link className="fitur-link" to="/footer/fitur-kursus">
                    <span>Lihat Fitur Kursus</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="et_pb_column_19">
              <div className="et_pb_text_19">
                <h3 className="text-center">
                  <strong>Webinar Premium</strong>
                </h3>
              </div>
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Investasi mulai Rp. 50.000</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Berlangsung secara live</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Durasi Webinar minimal 60 menit</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Mendapatkan bahan belajar</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Mendapatkan sekilas rekaman webinar</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Peserta maksimal hanya 50 orang persesi</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Live video berkualitas HD</p>
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>Mendapatkan e-sertifikat webinar</p>
                </li>
                <li>
                  <Link className="fitur-link" to="/footer/fitur-webinar">
                    <span>Lihat Fitur Webinar</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DifClassCourse;
