import React, { useState } from 'react';
import InputRating from '../InputRating/component';

const ModalCreateRating = ({show, onHide, onSubmit}) => {
  const [textReview, setTextReview] = useState('');
  const [starValue, setStarValue] = useState(-1);

  const _handleChangeTextReview = (e) => {
    setTextReview(e.target.value);
  }

  const _handleSetStarValue = (value) => {
    setStarValue(value);
  }

  const _handleSubmitModal = async () => {
    await onSubmit({starValue, textReview});
    setTextReview('');
    setStarValue(-1);
  }

  return (
    <div className={`modal-overlay ${show ? 'open' : ''}`}>
      <div className="modal-container">
        <h1>What's your rating?</h1>
        <div className="rating-container">
          <p className="rating-title">Insert Rating</p>
          <InputRating starValue={starValue} setStarValue={_handleSetStarValue} />
        </div>
        <div className="review-container">
          <p className="review-title">Insert Review</p>
          <textarea value={textReview} onChange={_handleChangeTextReview} className="user-review-input" name="review" id="review-id" cols="30" rows="10" placeholder="Star typing..." ></textarea>
        </div>
        <button onClick={_handleSubmitModal} className="btn-rating submit">Submit Review</button>
        <button onClick={onHide} className="btn-rating cancel">Cancel</button>
      </div>
    </div>
  )
}

export default ModalCreateRating;