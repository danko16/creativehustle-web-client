import React from 'react';

function Testimony() {
  return (
    <section className="py-5 border-top container--light-grey">
      <div className="row justify-content-center mt-3 mb-5">
        <div className="col-11">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="text-merriweather text-indigo-3">Testimoni Siswa</h1>
              <p className="font-weight-light text-indigo-3">
                Dengar apa kata mereka tentang belajar di sini
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card testimony">
                <div className="profile">
                  <img src="assets/img/danang.jpg" alt="pic" />
                  <p>Danang Eko Yudanto</p>
                </div>
                <hr />
                <p className="message">
                  Udemy is a life saver. I don`t have the time or money for a college education. My
                  goal is to become a freelance web developer, and thanks to Udemy, I`m really
                  close.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card testimony">
                <div className="profile">
                  <img src="assets/img/danang.jpg" alt="pic" />
                  <p>Danang Eko Yudanto</p>
                </div>
                <hr />
                <p className="message">
                  Udemy is a life saver. I don`t have the time or money for a college education. My
                  goal is to become a freelance web developer, and thanks to Udemy, I`m really
                  close.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card testimony">
                <div className="profile">
                  <img src="assets/img/danang.jpg" alt="pic" />
                  <p>Danang Eko Yudanto</p>
                </div>
                <hr />
                <p className="message">
                  Udemy is a life saver. I don`t have the time or money for a college education. My
                  goal is to become a freelance web developer, and thanks to Udemy, I`m really
                  close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
