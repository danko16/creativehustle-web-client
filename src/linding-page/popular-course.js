import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { formatNumber } from '../utils/format';

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  loading: state.kursus.loading,
  categories: state.category.categories,
});

function PopularCourse({ kursus, categories, loading }) {
  const [courses, setCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const scrollOffset = useRef();

  useEffect(() => {
    if (!loading && kursus.length) {
      setCourses(kursus);
    }
  }, [kursus, loading]);

  function renderCategory() {
    return categories.slice(0, 6).map((category, index) => {
      return (
        <li
          key={category.id}
          className={ClassNames({
            active: activeCategory === index,
          })}
        >
          <div
            className="category-item"
            onClick={() => {
              setActiveCategory(index);
            }}
          >
            {category.name}
          </div>
        </li>
      );
    });
  }

  function renderCourse() {
    return courses.map((val) => {
      const { star } = val.rating;
      return (
        <div className="col-md-6 col-lg-4 mb-4" key={val.id}>
          <div className="course-card card">
            <Link to={`/kursus/${val.id}`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <img src={val.thumbnail} alt="thumbnail webinar" className="img img__cover" />
            <div className="card-body">
              <div className="row no-gutters justify-content-between">
                <p className="student-subscr m-0">{val.participant} Peserta</p>
                <div className="col-auto d-flex align-items-center">
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 1,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 2,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 3,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 4,
                    })}
                  ></span>
                  <span
                    className={ClassNames('rating fa fa-star', {
                      checked: star >= 5,
                    })}
                  ></span>
                  <span className="rating-vote text-gray-500">({star})</span>{' '}
                </div>
              </div>
              <h6 className="kursus-title line-height-1">{val.title}</h6>
              <p className="m-0">
                <img
                  className="teacher-avatar"
                  src="/assets/img/default-avatar.png"
                  alt="default"
                />
                {val.teacher_name}
              </p>
              <hr />
              <div className="row align-items-center no-gutters">
                <div className="col-auto d-flex justify-items-center">
                  <span style={val.promo_price ? { textDecoration: 'line-through' } : null}>
                    {val.type === 'free' ? 'Gratis' : `Rp ${formatNumber(val.price)}`}
                  </span>
                  {val.promo_price && (
                    <h6 className="ml-2 line-height-1">Rp {formatNumber(val.promo_price)}</h6>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="py-3 border-top popular-course">
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
            <div className="category-wrapper">
              <i
                className="fa fa-angle-left"
                aria-hidden="true"
                onClick={() => {
                  scrollOffset.current.scrollLeft += -160;
                }}
              ></i>
              <i
                className="fa fa-angle-right"
                aria-hidden="true"
                onClick={() => {
                  scrollOffset.current.scrollLeft += 160;
                }}
              ></i>
              <ul className="category-list" ref={scrollOffset}>
                {renderCategory()}
              </ul>
            </div>
            <div className="row">{renderCourse()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

PopularCourse.propTypes = {
  kursus: PropTypes.array,
  categories: PropTypes.array,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(PopularCourse);
