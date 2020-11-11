import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

function TopCategories({ categories }) {
  function renderCategories() {
    return categories.map((val) => (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={val.id}>
        <div className="category card p-3 mb-4">
          <a href="/" className="stretched-link">
            <span className="sr-only">title for screen</span>
          </a>
          <p className="m-0">
            <i className={`fa ${val.icon} mr-2`}></i>
            {val.name}
          </p>
        </div>
      </div>
    ));
  }
  return (
    <section className="py-5 border-top">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-2">
            <strong>Kategori Popular</strong>
          </h2>
          <p>Jelajahi berbagai macam kategori untuk meningkatkan karir dan skillmu</p>
        </div>

        <div className="row mt-5 justify-content-center">{renderCategories()}</div>
      </div>
    </section>
  );
}

TopCategories.propTypes = {
  categories: PropTypes.array,
};

export default connect(mapStateToProps)(TopCategories);
