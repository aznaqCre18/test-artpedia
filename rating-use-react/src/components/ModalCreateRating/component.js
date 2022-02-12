import React from 'react';
import InputRating from '../InputRating/component';

const ModalCreateRating = ({show, onHide}) => {
  return (
    <div className={`modal-overlay ${show ? 'open' : ''}`}>
      <div className="modal-container">
        <h1>What's your rating?</h1>
        <div className="rating-container">
          <p className="rating-title">Insert Rating</p>
          <InputRating />
        </div>
        <div className="review-container">
          <p className="review-title">Insert Review</p>
          <textarea className="user-review-input" name="review" id="review-id" cols="30" rows="10" placeholder="Star typing..." ></textarea>
        </div>
        <button className="btn-rating submit">Submit Review</button>
        <button onClick={onHide} className="btn-rating cancel">Cancel</button>
      </div>
    </div>
  )
}

export default ModalCreateRating;