import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import RatingPage from './pages/RatingPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={RatingPage} />
      </BrowserRouter>
    )
  }
}
