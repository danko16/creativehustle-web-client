import React, { useEffect } from 'react';
import BottomToRegister from '../shared/bottom-to-register';
import './tentang-kami.css';

function TentangKami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container about-us fs-18">
        <div
          className="row"
          style={{
            borderBottom: '2px solid #0c71c3',
          }}
        >
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
            <h5 className="et_pb_text_0">
              <strong>CREATIVE HUSTLE VISION</strong>
            </h5>
            <h1
              style={{
                marginBottom: '2rem',
              }}
            >
              <strong>Empower Indonesian People for Creative Economy</strong>
            </h1>
            <div>
              <p>
                Creative Hustle id is an online learning community to learning about how to create
                side hustle in creative ways, on topics including illustration, design, photography,
                video, freelancing, and more.
              </p>
              <p>
                Creative Hustle id founded by Reezky Pradata and Danang Eko in Klaten City. they
                seen that side hustle with creative ways so really help to fight pandemic or bad
                economical situation. So they inisiate to create simple platform to learning about
                how to create new revenue streams with creative way. Connect between expert and
                people who want learn. Inspire and multiply the kind of creative exploration that
                furthers expression, learning and application.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: '3.5rem 0',
          }}
        >
          <div className="row our-curiculum">
            <div className="text-center">
              <h1>
                <strong>Our Curiculum</strong>
              </h1>
              <p>
                We believe to understanding about how to start side hustle is to master this 4
                points and we build our curriculum both <br className="xl" />
                on course and webinar with this points
              </p>
            </div>
          </div>
          <div className="row no-gutters our-curiculum-desc">
            <div className="col-md-6 col-lg-3">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <p>
                Understanding <br /> Business
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <p>
                Understanding <br /> Technical
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <p>
                Understanding <br /> Revenue Works
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <p>
                Understanding <br /> Opportunity
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomToRegister />
    </div>
  );
}

export default TentangKami;
