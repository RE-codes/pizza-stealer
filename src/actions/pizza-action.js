import axios from 'axios';

export const FETCH_PIZZA = 'FETCH_PIZZA';

const pizzaRootUrl = `https://order.dominos.com/orderstorage/GetTrackerData?Phone=`;

export const fetchPizza = phone => {
  const request = axios.get(`${pizzaRootUrl}${phone}`);

  return {
    type: FETCH_PIZZA,
    payload: request
  };
};
