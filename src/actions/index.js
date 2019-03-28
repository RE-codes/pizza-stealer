import axios from 'axios';

export const FETCH_FRIENDS = 'fetch_friends';
export const FETCH_PIZZA = 'FETCH_PIZZA';

const ROOT_URL = `https://my-json-server.typicode.com/marielklem/practice-api/db`;

export function fetchFriends() {
  const request = axios.get(`${ROOT_URL}`);

  console.log('Request', request);

  return {
    type: FETCH_FRIENDS,
    payload: request
  };
}

const pizzaRootUrl = `https://order.dominos.com/orderstorage/GetTrackerData?Phone=`;

export const fetchPizza = phone => {
  const request = axios.get(`${pizzaRootUrl}${phone}`);

  return {
    type: FETCH_PIZZA,
    payload: request
  };
};
