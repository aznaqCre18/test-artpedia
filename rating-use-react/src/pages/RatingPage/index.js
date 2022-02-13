import RatingPage from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from './action';

function mapStateToProps(state) {
  const { setRatingInput } = state;
  return {
    setRatingInput,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(RatingPage);
export default Connected;