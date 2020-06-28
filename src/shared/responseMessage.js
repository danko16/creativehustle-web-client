import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './responseMessage.css';

function ResponseMessage(props) {
  const {
    notification: { text, isError },
    onDismiss,
  } = props;
  return (
    <div
      className={classNames('d-flex mb-4 justify-content-center', {
        'bg-success': !isError,
        'bg-gradient-danger': isError,
      })}
      style={{ borderRadius: 4, position: 'relative', color: 'white', padding: 16 }}
    >
      <p className="m-0">{text}</p>
      <button type="button" className="btn btn-tool" onClick={onDismiss}>
        <i className="right fa fa-times"></i>
      </button>
    </div>
  );
}

ResponseMessage.propTypes = {
  notification: PropTypes.object,
  onDismiss: PropTypes.func,
};

export default ResponseMessage;
