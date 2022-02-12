import React, { Component } from 'react';

export default class ModalCreateRating extends Component {
  render() {
    const { show, onHide } = this.props;

    return (
      <div class={`modal-overlay ${show ? 'open' : ''}`}>
        <div class="modal-container">
          <h1>What's your rating?</h1>
          <div class="rating-container">
            <p class="rating-title">Insert Rating</p>
            <div id="star-wrap" class="star-wrapper"></div>
          </div>
          <div class="review-container">
            <p class="review-title">Insert Review</p>
            <textarea class="user-review-input" name="review" id="review-id" cols="30" rows="10" placeholder="Star typing..." ></textarea>
          </div>
          <button class="btn-rating submit">Submit Review</button>
          <button onClick={onHide} class="btn-rating cancel">Cancel</button>
        </div>
      </div>
    )
  }
}
