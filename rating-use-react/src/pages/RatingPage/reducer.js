import * as actionTypes from './actionTypes';

const initialState = {
  allRatingInput: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RATING_INPUT:
      return {
        ...state,
        allRatingInput: [...state.allRatingInput, action.data]
      }
    default:
      return state;
  }
}

export default reducer;

