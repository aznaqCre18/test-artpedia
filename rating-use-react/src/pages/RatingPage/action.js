import * as actionTypes from './actionTypes';

export const saveInputRating = (data) => {
  return {
    type: actionTypes.SET_RATING_INPUT,
    data,
  }
}