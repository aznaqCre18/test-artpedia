import React, { Component } from 'react'
import ModalCreateRating from '../../components/ModalCreateRating';
import RatingDisplay from '../../components/RatingDisplay';

export default class RatingPage extends Component {

  state = {
    isModalActive: false,
  }

  _handleOpenModal = () => {
    this.setState({
      isModalActive: !this.state.isModalActive,
    });
  }

  render() {
    const { isModalActive } = this.state;

    return (
      <div className="container-rating-feature">
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
              <button onClick={this._handleOpenModal} className="btn-add-review">Add Review</button>
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
        <ModalCreateRating show={isModalActive} onHide={this._handleOpenModal} />
      </div>
    )
  }
}
