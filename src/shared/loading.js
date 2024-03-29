import React from 'react';
import { css } from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';
import './loading.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading() {
  return (
    <div className="sweet-loading">
      <RingLoader css={override} size={150} color={'#123abc'} loading={true} />
    </div>
  );
}

export default Loading;
