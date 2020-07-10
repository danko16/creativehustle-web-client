import React, { useEffect } from 'react';
import BottomToCourse from '../shared/bottom-to-course';

function TentangKami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container about-us">
        <div className="row">
          <div
            className="col-lg-5"
            style={{
              padding: '0 3rem 3rem 3rem',
            }}
          >
            <img
              src="/assets/img/sa.jpg"
              alt="sa"
              className="img__cover"
              style={{
                height: 'auto',
              }}
            />
          </div>
          <div
            className="col-lg-7"
            style={{
              padding: '3rem 1.5rem',
            }}
          >
            <h5 className="et_pb_text_0">CREATIVE HUSTLE VISION</h5>
            <h1
              style={{
                marginBottom: '2rem',
              }}
            >
              <strong>Empower Indonesian People for Digital Creative Economy</strong>
            </h1>
            <div>
              <p>
                Creative Hustle id founded by Reezky Pradata and Danang Eko Yudanto in Klaten
                City.&nbsp; we’ve seen again and again how the seemingly simple act of creating can
                be a force for growth, change, and discovery in people’s lives. We want to inspire
                and multiply the kind of creative exploration that furthers expression, learning and
                application.
              </p>
              <p>
                Creative Hustle id is an online learning community with thousands of classes for
                creative and curious people, on topics including illustration, design, photography,
                video, freelancing, and more. On Creative Hustlse, millions of members come together
                to find inspiration and take the next step in their creative journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomToCourse />
    </div>
  );
}

export default TentangKami;
