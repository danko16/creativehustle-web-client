import React, { useState, useEffect } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import faqs from './faqs';
import './search-bantuan.css';

function SearchFaqs({ question }) {
  const [searchedFaqs, setSearchedFaqs] = useState([]);
  const [renderedFaqs, setRenderedFaqs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchedFaqs = [];
    setRenderedFaqs([]);
    faqs.forEach((faq) => {
      if (faq.title.toLowerCase().includes(question.toLowerCase())) {
        searchedFaqs.push(faq);
      }
    });
    setRenderedFaqs(searchedFaqs.slice(0, 4));
    setSearchedFaqs(searchedFaqs);
  }, [question]);

  function renderSearched() {
    return renderedFaqs.map((val) => (
      <div className="card" key={val.id} style={{ margin: '3rem 0', padding: '2rem' }}>
        <h4
          style={{
            marginBottom: '1rem',
          }}
        >
          <strong>{val.title}</strong>
        </h4>
        <div dangerouslySetInnerHTML={{ __html: val.desc }}></div>
      </div>
    ));
  }

  function setData(start) {
    const from = start * 4;
    const end = (start + 1) * 4;
    setRenderedFaqs(searchedFaqs.slice(from, end));
  }

  function renderPagination() {
    const page = Math.ceil(searchedFaqs.length / 5);
    const pagination = [];

    for (let i = 1; i <= page; i++) {
      pagination.push(
        <li
          key={i}
          className={ClassNames('page-item', {
            active: i === currentPage,
          })}
          onClick={() => {
            setCurrentPage(i);
            setData(i - 1);
          }}
        >
          <div className="page-link">{i}</div>
        </li>
      );
    }
    return pagination;
  }

  function handleNext() {
    const page = Math.ceil(searchedFaqs.length / 5);
    if (currentPage < page) {
      setData(currentPage);
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      setData(currentPage - 2);
      setCurrentPage(currentPage - 1);
    }
  }

  function emptySearched() {
    return (
      <div className="card emtpy-searched">
        <h5>
          <strong>Pertanyaan Tidak di Temukan</strong>
        </h5>
        <p className="m-0">Coba Cari Lagi...</p>
      </div>
    );
  }

  return (
    <div className="search-bantuan container fs-18">
      {searchedFaqs.length ? renderSearched() : emptySearched()}
      <nav>
        <ul className="pagination">
          <li onClick={handlePrev} className="page-item">
            <div className="page-link">Prev</div>
          </li>
          {renderPagination()}
          <li onClick={handleNext} className="page-item">
            <div className="page-link">Next</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

SearchFaqs.propTypes = {
  question: PropTypes.string,
};

export default SearchFaqs;
