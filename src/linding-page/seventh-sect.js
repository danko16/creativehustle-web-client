import React from 'react';

function SeventhSection() {
  return (
    <section className="bwa-invitation mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="heading text-center">
              <img
                className="members-bwa mb-4"
                alt="member yang belajar di buildwithangga"
                src="https://buildwithangga.com/themes/front/images/members-buildwithangga.png"
              />
              <h1 className="text-merriweather mb-3 text-indigo-3">
                “ Bergabung dengan puluhan ribu lainnya untuk menyambut era teknologi;
              </h1>
              <p className="font-weight-light text-indigo-3">
                Tidak perlu download / kartu kredit. Cukup daftar langsung belajar.
              </p>
              <div className="row">
                <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up">
                  <a
                    href="https://class.buildwithangga.com/register"
                    className="btn btn-primary mt-2 mt-lg-4 font-weight-medium"
                  >
                    UJI COBA GRATIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeventhSection;
