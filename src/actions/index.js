import axios from 'axios';

export const FETCH_FRIENDS = 'fetch_friends';
export const FETCH_PIZZA = 'fetch_pizza';

const ROOT_URL = `https://my-json-server.typicode.com/marielklem/practice-api/db`;

export function fetchFriends() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_FRIENDS,
    payload: request
  };
}

const pizzaRootUrl = `https://my-json-server.typicode.com/marielklem/pizza-api/db`;

export const fetchPizza = phone => {
  const request = axios.get(`${pizzaRootUrl}`);

  return {
    type: FETCH_PIZZA,
    payload: request
  };
};
