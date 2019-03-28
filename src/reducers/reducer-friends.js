import { FETCH_FRIENDS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      return action.payload.data.contactList;
    default:
      return state;
  }
}
