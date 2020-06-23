import React from 'react';

function DifClassCourse() {
  return (
    <div className="et_pb_section container--light-blue">
      <div className="container">
        <div className="text-center et_pb_row">
          <h2
            style={{
              fontSize: 26,
            }}
          >
            <strong>Perbedaan Fitur Kursus dan Kelas Online ?</strong>
          </h2>
          <p>
            Buat teman-teman yang bingung apa sih perbedaan Kursus dan Kelas Online di Creative
            Hustle id coba lihat perbedaanya dibawah
          </p>
        </div>
        <div className="row et_pb_row">
          <div className="col-lg-6 mb-4">
            <div className="et_pb_column_19">
              <div className="et_pb_text_19">
                <h3 className="text-center">
                  <strong>Kursus</strong>
                </h3>
              </div>
              <ul>
                <li>Harga mulai Rp. 150.000</li>
                <li>Berlangsung secara tidak langsung</li>
                <li>Konsultasi dengan instruktur</li>
                <li>Durasi kursus minimal 45 menit</li>
                <li>Mendapatkan materi tambahan pada kursus</li>
                <li>Dapat didownload offline</li>
                <li>Peserta tidak terbatas dalam satu kursus</li>
                <li>Video berkualitas HD</li>
                <li>Mendapatkan e-sertifikat kursus</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="et_pb_column_19">
              <div className="et_pb_text_19">
                <h3 className="text-center">
                  <strong>Kelas Online</strong>
                </h3>
              </div>
              <ul>
                <li>Harga mulai Rp. 100.000</li>
                <li>Berlangsung secara live</li>
                <li>Konsultasi langsung dengan instruktur</li>
                <li>Durasi kelas online selama 1 jam</li>
                <li>Mendapatkan materi kelas online</li>
                <li>Rekaman kelas dapat diunduh</li>
                <li>Peserta maksimal hanya 50 orang dalam kelas online</li>
                <li>Live video berkualitas HD</li>
                <li>Mendapatkan e-sertifikat kelas online</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DifClassCourse;
