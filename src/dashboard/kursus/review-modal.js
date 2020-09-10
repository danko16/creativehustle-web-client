import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { kursusSayaAction } from '../../redux/reducers/kursus-saya';

import '../../shared/modal.css';
import './review-modal.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  review: state.kursusSaya.review,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      addReview: kursusSayaAction.reqCreateReview,
      deleteReview: kursusSayaAction.reqDeleteReview,
    },
    dispatch
  );

function ReviewModal({ setShowReview, kursusId, addReview, deleteReview, review, user }) {
  const [reviewText, setReviewText] = useState('');
  const [reviewStar, setReviewStar] = useState(0);
  const [currentReview, setCurrentReview] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (review) {
      setCurrentReview(review);
      setReviewStar(review.rating);
      setReviewText(review.message);
    }
  }, [review]);

  function renderStar(type) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={ClassNames('fa fa-star', {
            checked: i <= reviewStar,
          })}
          onClick={() => {
            if (type === 'edit-review') {
              setError('');
              setReviewStar(i);
            }
          }}
          aria-hidden="true"
        ></i>
      );
    }
    return stars;
  }

  function resetReview() {
    setReviewStar(0);
    setReviewText('');
    setCurrentReview(null);
  }

  function handleSubmit() {
    if (!reviewText || reviewStar === 0) {
      setError('tolong isikan pesan dan rating review');
      return;
    }

    addReview({ course_id: kursusId, message: reviewText, rating: reviewStar });
  }

  function renderCurrentReview() {
    return (
      <div className="modal-content current-review">
        <div className="head-wrapper">
          <div>
            <img
              className="avatar-circle"
              src={user.avatar ? user.avatar : '/assets/img/default-input-avatar.png'}
              alt="avatar"
            />
            <h5>{user.name}</h5>
          </div>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              setShowReview(false);
            }}
          ></i>
        </div>
        <div className="star-wrapper">
          {renderStar('current-review')}
          <p>{currentReview.createdAt.split(' ')[0]}</p>
        </div>
        <div className="message">
          <p>{currentReview.message}</p>
        </div>
        <div className="button-wrapper">
          <button
            className="btn-delete"
            onClick={() => {
              resetReview();
              deleteReview({ course_id: review.course_id });
            }}
          >
            Hapus
          </button>
          <button
            className="btn-edit"
            onClick={() => {
              setCurrentReview(null);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  function renderEditReview() {
    return (
      <div className="modal-content edit-review">
        <div className="head-wrapper">
          <h5>Tuliskan Review Terbaikmu</h5>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              setShowReview(false);
            }}
          ></i>
        </div>
        <div className="star-wrapper">{renderStar('edit-review')}</div>
        <textarea
          onChange={(e) => {
            setReviewText(e.target.value);
          }}
          onInputCapture={() => {
            setError('');
          }}
          className="form-control"
          placeholder="Tuliskan Reviewmu"
          value={reviewText}
        />
        <small
          className={ClassNames('error-text form-text d-none', {
            'd-block': error,
          })}
        >
          {error}
        </small>
        <div className="button-wrapper">
          <button
            className="btn-cancel"
            onClick={() => {
              setShowReview(false);
            }}
          >
            Batal
          </button>
          <button className="btn-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="review-modal modal"
      onClick={(e) => {
        if (e.target.className === 'review-modal modal') {
          setShowReview(false);
        }
      }}
    >
      {currentReview ? renderCurrentReview() : renderEditReview()}
    </div>
  );
}

ReviewModal.propTypes = {
  setShowReview: PropTypes.func,
  user: PropTypes.object,
  review: PropTypes.object,
  addReview: PropTypes.func,
  deleteReview: PropTypes.func,
  kursusId: PropTypes.string,
};

export default connect(mapStateToProps, mapActionToProps)(ReviewModal);
