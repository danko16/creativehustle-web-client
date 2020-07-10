import React, { useEffect } from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import BottomToCourse from '../shared/bottom-to-course';
import Introduction from './introduction';
import PopularClass from './popular-class';
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
      <PopularClass />
      <LearningPath />
      <BottomToCourse />
      <Footer />
    </div>
  );
}

export default LandingPage;
