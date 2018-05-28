import axios from 'axios'

export default function fetchLocation() {
	const URL = 'http://localhost:3000/locations'
	const request = axios.get(URL)
	return {
		type: 'FETCH_LOCATIONS',
		payload: request
	}
}
