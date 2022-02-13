import React from 'react'

const RatingDisplay = ({ value, width, height, spacing }) => {

  let star = [];
  let starPlaceholder = [];
  let leftPos = 0;

  let decimal = value % 1;

  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div 
        className="star placeholder" 
        key={`star-placeholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    )
  }

  for (let index = 0; index < 5 && index < value - decimal; index++) {
    leftPos = leftPos + width;
    star.push(
      <div 
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    )
  }

  if(decimal > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        style={{
          left: leftPos,
          width: (width * decimal),
          height: height,
          marginRight: spacing,
        }}
      ></div>
    )
  }

  return (
    <div className="stars" style={{width: width * 5, height: 30}}>
      {starPlaceholder}
      {star}
    </div>
  )

}

export default RatingDisplay;