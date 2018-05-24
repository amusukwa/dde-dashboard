import axios from 'axios';

export default function fetchData() {
  const URL = 'http://localhost:3000/explorer/#/Facility/Facility_find';
  const request = axios.get(URL);
  return {
    type: 'FETCH_DETAILS',
    payload: request,
  };
}
