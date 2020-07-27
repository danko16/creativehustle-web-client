import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatNumber } from '../utils/format';

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  loading: state.kursus.loading,
});

function PopularClass({ kursus, loading }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (!loading && kursus.length) {
      setCourses(kursus);
    }
  }, [kursus, loading]);

  function renderClass() {
    return courses.map((val) => (
      <div className="col-md-6 col-lg-4 mb-4" key={val.id}>
        <div className="course-card card">
          <Link to={`/kursus/${val.id}`} className="stretched-link">
            <span className="sr-only">title for screen</span>
          </Link>
          <img src={val.thumbnail} alt="thumbnail kelas" className="img img__cover" />
          <div className="card-body">
            <div className="row no-gutters justify-content-between">
              <p className="student-subscr m-0">124 Siswa</p>
              <div className="col-auto d-flex align-items-center">
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star checked"></span>
                <span className="rating fa fa-star"></span>
                <span className="rating-vote text-gray-500">(123)</span>
              </div>
            </div>
            <h6 className="kursus-title line-height-1">{val.title}</h6>
            <p className="m-0">
              <img className="teacher-avatar" src="/assets/img/default-avatar.png" alt="default" />
              {val.teacher_name}
            </p>
            <hr />
            <div className="row align-items-center no-gutters">
              <div className="col-auto d-flex justify-items-center">
                <span style={{ textDecoration: 'line-through' }}>Rp {formatNumber(val.price)}</span>
                <h6 className="ml-2 line-height-1">Rp {formatNumber(val.promo_price)}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <section className="py-3 container--light-blue border-top">
      <div className="mt-5">
        <div className="heading text-center">
          <h2 className="mb-3">
            <strong>Pilihan Kursus Creative Hustle</strong>
          </h2>
          <p>
            Materi telah didesain bedasarkan kebutuhan <br />
            perusahaan dibidang kreatif
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="container">
            <div className="row justify-content-center">{renderClass()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

PopularClass.propTypes = {
  kursus: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(PopularClass);
