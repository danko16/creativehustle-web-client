import React from 'react';
import PropTypes from 'prop-types';

import './inputImage.css';

function InputImage(props) {
  const { onChange, image, style } = props;
  return (
    <div className="img-container" style={{ ...style }}>
      <label className="img-label">
        <input type="file" style={{ display: 'none' }} onChange={onChange} />
        <img
          src={image ? image : '/assets/img/default-input-avatar.png'}
          style={{ width: 150, height: 150, borderRadius: 100, objectFit: 'cover' }}
          alt="Input"
        />
      </label>
    </div>
  );
}

InputImage.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.object,
  image: PropTypes.any,
};

export default InputImage;
