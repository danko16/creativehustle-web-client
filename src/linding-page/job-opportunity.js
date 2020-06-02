import React from 'react';

const jobs = [
  {
    thumbline: 'assets/img/android_developer_080520091734.png',
    type: 'fulltime',
    position: 'android developer',
    desc: 'Android Developer',
    by: 'Algostudio',
    exp: new Date('2021-04-11T10:20:30Z'),
  },
  {
    thumbline: 'assets/img/ios_android_dsp_engineer_050520212104.png',
    type: 'fulltime',
    position: 'fulltime ios developer',
    desc: 'iOS/Android/DSP Engineer',
    by: 'GFI System',
    exp: new Date('2021-04-11T10:20:30Z'),
  },
  {
    thumbline: 'assets/img/android_developer_080520091734.png',
    type: 'fulltime',
    position: 'android developer',
    desc: 'Android Developer',
    by: 'Algostudio',
    exp: new Date('2021-04-11T10:20:30Z'),
  },
  {
    thumbline: 'assets/img/ios_android_dsp_engineer_050520212104.png',
    type: 'fulltime',
    position: 'fulltime ios developer',
    desc: 'iOS/Android/DSP Engineer',
    by: 'GFI System',
    exp: new Date('2021-04-11T10:20:30Z'),
  },
];
function JobOpportunity() {
  function renderJobOpportunity() {
    return jobs.map((value, index) => {
      const expiredDay = (value.exp - Date.now()) / (1000 * 60 * 60 * 24);
      return (
        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
          <div className="job card mb-3">
            <a href="/" className="stretched-link">
              <span className="sr-only">title for screen</span>
            </a>
            <img className="img__cover" src={value.thumbline} alt="lowongan" />
            <div className="card-body pb-0">
              <div className="type py-2">
                <span>{value.type}</span>
              </div>
              <div className="desc pt-2">{value.desc}</div>
              <div className="by pt-1">by {value.by}</div>
              <hr />
              <div className="pos mb-1">{value.position}</div>
              <div className="exp mb-3">{Math.floor(expiredDay)} Hari lagi</div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <section className="py-5 border-top">
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="heading text-center mb-5">
            <h1 className="text-merriweather mb-3 text-indigo-3">Lowongan Pekerjaan</h1>
            <p className="font-weight-light text-indigo-3">
              Dapatkan kesempatan belajar dan mencari kerja
              <br className="desktop" />
              sesuai dengan bidang dan keinginanmu
            </p>
          </div>
          <div className="row justify-content-center">{renderJobOpportunity()}</div>
        </div>
      </div>
    </section>
  );
}

export default JobOpportunity;
