import React from 'react';
import PropTypes from 'prop-types';

import Register from '../register';
import Login from '../login';
import './modal.css';

function Modal({ displayModal, setDisplayModal }) {
  function handleClick(event) {
    if (event.target.className === 'modal') {
      setDisplayModal({
        show: false,
        type: null,
      });
    }
  }

  function renderModal() {
    if (displayModal.type === 'register') {
      return <Register setDisplayModal={setDisplayModal} />;
    } else if (displayModal.type === 'login') {
      return <Login displayModal={displayModal} setDisplayModal={setDisplayModal} />;
    }
  }
  return (
    <div
      onMouseDown={(event) => {
        handleClick(event);
      }}
      className="modal"
    >
      {renderModal()}
    </div>
  );
}

Modal.propTypes = {
  displayModal: PropTypes.object,
  setDisplayModal: PropTypes.func,
};

export default Modal;
