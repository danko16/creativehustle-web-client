import React from 'react';

function RegisterOffer() {
  return (
    <section className="border-top container--light-blue py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mentor-assign">
            <h4 className="mb-3 text-center">Daftar Sebagai Mentor</h4>
            <p className="text-center">
              Bergabunglah dengan para mentor terbaik di indonesia dan mulailah karirmu sebagai
              pengajar online profesional dan dapatkan penghasilan dari kelasmu sendiri
            </p>
            <button>Daftar Sebagai Mentor</button>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center student-assign">
            <h4 className="mb-3 text-center">Daftar Sebagai Siswa</h4>
            <p className="text-center">
              Dapatkanlah materi terbaik yang up to date dengan perkembangan industri saat ini
              dengan harga yang terjangkau dan dapatkanlah kesempatan bekerja sesuai dengan
              passionmu
            </p>
            <button>Daftar Sebagai Siswa</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterOffer;
