import axios from 'axios'

export default function fetchLocation() {
	const URL = 'http://71.19.156.178:3004/v1/list_locations'
	const request = axios.get(URL)
	return {
		type: 'FETCH_LOCATION',
		payload: request
	}
}
