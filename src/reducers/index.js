//combine reducers
import { combineReducers } from 'redux';
import FriendsReducer from './reducer-friends';
import PizzaFriendsReducer from './reducer-friends';

const rootReducer = combineReducers({
  friends: FriendsReducer,
  pizzaFriends: PizzaFriendsReducer
});

export default rootReducer;
