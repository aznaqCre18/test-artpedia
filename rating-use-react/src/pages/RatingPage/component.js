import React, { Component } from 'react'
import RatingDisplay from '../../components/RatingDisplay/component'

export default class RatingPage extends Component {
  render() {
    return (
      <div className="container">
        <RatingDisplay 
          value={3.5}
          width={30}
          height={30}
          spacing={4}
        />
      </div>
    )
  }
}
