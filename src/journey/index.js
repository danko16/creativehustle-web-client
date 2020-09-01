import React, { useEffect } from 'react';

import BottomToRegister from '../shared/bottom-to-register';
import JourneyPath from './journey-path';
import JourneyDetail from './journey-detail';
import DifClassCourse from './dif-class-course';
import HintDropdown from './hint-dropdown';
import './journey.css';

function Journey() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="journey">
      <div
        className="py-4 mb-5"
        style={{
          backgroundImage: 'url(/assets/img/Group-5204.png)',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
          backgroundPositionY: '40px',
        }}
      >
        <div className="text-center p-4">
          <h1 style={{ fontSize: 34 }}>
            <strong>5 Langkah Mulai Belajar di Creative Hustle</strong>
          </h1>
          <p className="fs-18">
            Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle
          </p>
        </div>
        <div className="container">
          <img
            src="/assets/img/How-it-work-1280x255.png"
            alt="growmodo-how-it-works-02"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>

      <JourneyPath />
      <JourneyDetail />
      <DifClassCourse />
      <HintDropdown />
      <BottomToRegister />
    </div>
  );
}
export default Journey;
