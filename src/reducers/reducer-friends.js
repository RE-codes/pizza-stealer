import { FETCH_FRIENDS } from '../actions';
import { FETCH_PIZZA } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      return action.payload.data.contactList;
    case FETCH_PIZZA:
      return [
        ...state,
        {
          phone:
            action.payload.data.Envelope.Body.GetTrackerDataResponse
              .OrderStatuses.OrderStatus.phone,
          pizzaType:
            action.payload.data.Envelope.Body.GetTrackerDataResponse
              .OrderStatuses.OrderStatus.OrderStatus,
          timeOrdered:
            action.payload.data.Envelope.Body.GetTrackerDataResponse
              .OrderStatuses.OrderStatus.StartTime
        }
      ];
    default:
      return state;
  }
}
