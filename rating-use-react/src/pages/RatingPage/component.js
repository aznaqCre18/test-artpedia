import React, { Component } from 'react'
import RatingDisplay from '../../components/RatingDisplay/component'

export default class RatingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="add-review-section">
          <h1 className="title">The Minimalist Entrepreneur</h1>
          <div className="avrg-add-review">
            <div className="avrg-wrapper">
              <h1 className="avrg-count">0.0</h1>
              <div className="stars-avrg">
                <RatingDisplay 
                  value={3.5}
                  width={30}
                  height={30}
                  spacing={4}
                />
              </div>
            </div>
            <button className="btn-add-review">Add Review</button>
          </div>
        </div>
        <h3 className="title-review">Reviews</h3>
        <div className="list-review-sections">
          <div className="list-rating-wrapper">
            <RatingDisplay 
              value={3.5}
              width={30}
              height={30}
              spacing={4}
            />
            <div className="testimoni">
              <span className="rate-value-number">5</span>
              <span className="user-testimoni">, bintang 5</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
