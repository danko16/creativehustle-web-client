import React, { useEffect } from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
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
      <Header />
      <Introduction />
      <PopularCourse />
      <LearningPath />
      <BottomToRegister />
      <Footer />
    </div>
  );
}

export default LandingPage;
