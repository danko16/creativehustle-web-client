import React, { useState, useEffect } from 'react';

import FaqsRoute from './faqsRoute';
import SearchFaqs from './searchFaqs';

import './bantuan.css';

function Bantuan() {
  const [searchQuestion, setSearchQuestion] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bantuan">
      <div className="header">
        <p>PUNYA PERTANYAAN ATAU BINGUNG ?</p>
        <h1>
          <strong>Ayo Temukan Jawaban di Pusat Bantuan</strong>
        </h1>
        <div className="input-group mt-4">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="text"
            onChange={(e) => {
              setSearchQuestion(e.target.value);
            }}
            className="form-control"
            placeholder="Cari Pertanyaan"
            aria-label="Pertanyaan"
            aria-describedby="basic-addon1"
            style={{
              maxWidth: '400px',
            }}
          />
        </div>
      </div>
      {searchQuestion ? <SearchFaqs question={searchQuestion} /> : <FaqsRoute />}
    </div>
  );
}

export default Bantuan;
