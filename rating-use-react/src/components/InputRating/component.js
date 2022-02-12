import React, { useState, useRef } from 'react';
import { IconStarPlaceholder, IconStarOn } from './../../configs/icons';

const InputRating = ({ precision = 1, totalStar = 5 }) => {
  const [star, setStar] = useState(-1);
  const [starPlaceholder, setStarPlaceholder] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const starWrapperRef = useRef(null);

  const _calculateRating = (e) => {
    const { width, left } = starWrapperRef.current.getBoundingClientRect();
    let percent = (e.clientX - left) / width;

    let numberInStar = percent * totalStar;
    let nearestNumber = Math.round((numberInStar + precision / 2) / precision) * precision;
    
    return nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0);
  }

  const _handleClick = (e) => {
    setIsHovered(false);
    setStar(_calculateRating(e));
  }

  const _handleMouseMove = (e) => {
    setIsHovered(true);
    setStarPlaceholder(_calculateRating(e));
  }

  const _handleMouseOut = (e) => {
    console.log('jalan');
    setStarPlaceholder(-1);
    setIsHovered(false);
  }

  const IconStarON = () => <img src={IconStarOn} alt="ic-star-on" />
  const IconStarPlaceHolder = () => <img src={IconStarPlaceholder} alt="ic-star-placeholder" />

  return (
    <div 
      id="star-wrap" 
      className="star-wrapper"
      ref={starWrapperRef}
      onMouseMove={_handleMouseMove}
      onMouseOut={_handleMouseOut}
      onClick={_handleClick}
    >
      {
        [...new Array(totalStar)].map((value, idx) => {

          const activeState = isHovered ? starPlaceholder : star;
          const showEmptyIcon = activeState === -1 || activeState < idx + 1;

          const isActiveRating = activeState !== 1;
          const isRatingWithPrecision = activeState % 1 !== 0;
          const isRatingEqualToIndex = Math.ceil(activeState) === idx + 1
          const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

          return (
            <div key={`star-${idx}`} className="wrapper-half-star">
              <div
                id="one-star"
                style={{
                  width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%',
                }}
              >
                <IconStarON />
              </div>
              <div id="one-star">
                {
                  showEmptyIcon ? <IconStarPlaceHolder /> : <IconStarON />
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default InputRating


