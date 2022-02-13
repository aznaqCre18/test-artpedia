import { combineReducers } from 'redux';

import setRatingInputReducer from './../pages/RatingPage/reducer';

const rootReducer = combineReducers({
  setRatingInput: setRatingInputReducer,
})

export default rootReducer;