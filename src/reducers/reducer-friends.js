import { FETCH_FRIENDS } from "../actions";

export default function(state = {}, action) {
  console.log("Action", action)
  switch (action.type) {
    case FETCH_FRIENDS:
      return action.payload;
    default:
      return state;
  }
}