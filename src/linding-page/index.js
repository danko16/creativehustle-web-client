import React, { useEffect } from 'react';
import BottomToRegister from '../shared/bottom-to-register';
import Introduction from './introduction';
import PopularCourse from './popular-course';
import LearningPath from './learning-path';

import './landing-page.css';

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing-page">
      <Introduction />
      <PopularCourse />
      <LearningPath />
      <BottomToRegister />
    </div>
  );
}

export default LandingPage;
