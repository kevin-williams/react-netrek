import { combineReducers } from 'redux';
import starHopReducer from '../containers/starhop/starHopReducer';

// this appends all the sub reducers with these names for the root reducer
export default combineReducers({
  starhop: starHopReducer
});
