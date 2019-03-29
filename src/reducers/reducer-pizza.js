import { FETCH_PIZZA } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PIZZA:
      return [
        ...state,
        {
          phone:
            action.payload.data.Envelope.Body.GetTrackerDataResponse
              .OrderStatuses.OrderStatus.Phone,
          pizzaType:
            action.payload.data.Envelope.Body.GetTrackerDataResponse
              .OrderStatuses.OrderStatus.OrderDescription,
          timeOrdered:
            action.payload.data.Envelope.Body.GetTrackerDataResponse
              .OrderStatuses.OrderStatus.StartTime
        }
      ];
    default:
      return state;
  }
}
