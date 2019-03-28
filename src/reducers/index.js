//combine reducers
import { combineReducers } from 'redux';
import FriendsReducer from './reducer-friends';

const rootReducer = combineReducers({
  friends: FriendsReducer
});

export default rootReducer;
