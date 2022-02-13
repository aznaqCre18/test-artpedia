import React, { Component } from 'react'
import ModalCreateRating from '../../components/ModalCreateRating';
import RatingDisplay from '../../components/RatingDisplay';

export default class RatingPage extends Component {

  state = {
    isModalActive: false,
    inputValue: {},
  }

  _handleSubmitRatingInput = (data) => {
    const { actions } = this.props;

    actions.saveInputRating(data);
    this._handleOpenModal();
  }

  _handleOpenModal = () => {
    this.setState({
      isModalActive: !this.state.isModalActive,
    });
  }

  _calculateAverage = () => {
    const { setRatingInput } = this.props;
    let sumOfAllRating = 0;
    let average = 0;
    
    setRatingInput?.allRatingInput?.map(item => {
      sumOfAllRating += Number(item.starValue);
      average = sumOfAllRating / setRatingInput?.allRatingInput?.length
    });

    let avrgValue = average.toFixed(1);
    return avrgValue;
  }

  render() {
    const { isModalActive, avrgValue } = this.state;
    const { setRatingInput } = this.props;

    return (
      <div className="container-rating-feature">
        <div className="container">
          <div className="add-review-section">
            <h1 className="title">The Minimalist Entrepreneur</h1>
            <div className="avrg-add-review">
              <div className="avrg-wrapper">
                <h1 className="avrg-count">{!this._calculateAverage() ? '0.0' : this._calculateAverage()}</h1>
                <div className="stars-avrg">
                  <RatingDisplay 
                    value={this._calculateAverage()}
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
            {
              setRatingInput?.allRatingInput?.length < 1 ? (
                <div>Tidak ada rating teradftar</div>
              ) : (
                setRatingInput?.allRatingInput?.map((item, idx) => {
                  return (
                    <div key={idx} className="list-rating-wrapper">
                      <RatingDisplay 
                        value={Number(item.starValue)}
                        width={30}
                        height={30}
                        spacing={4}
                      />
                      <div className="testimoni">
                        <span className="rate-value-number">{item.starValue}</span>
                        <span className="user-testimoni">{`, ${item.textReview}`}</span>
                      </div>
                    </div>
                  )
                })
              )
            }
          </div>
        </div>
        <ModalCreateRating show={isModalActive} onHide={this._handleOpenModal} onSubmit={this._handleSubmitRatingInput} />
      </div>
    )
  }
}
