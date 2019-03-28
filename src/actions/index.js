import axios from 'axios';

export const FETCH_FRIENDS = 'fetch_friends';

const ROOT_URL =
  'https://my-json-server.typicode.com/marielklem/practice-api/db';

export function fetchFriends() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_FRIENDS,
    payload: request
  };
}
