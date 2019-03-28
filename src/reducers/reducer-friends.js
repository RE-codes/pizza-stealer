import { FETCH_FRIENDS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      return console.log(action.payload.data);
    default:
      return state;
  }
}
