//@flow
import axios from 'axios'

export default async function fetchLocation() {
	const url = 'http://71.19.156.178:3004/v1/get_locations'
	const request = axios({
		url,
		method: 'POST',
		headers: {
			Authorization: await sessionStorage.getItem('access_token')
		}
	})

	return {
		type: 'FETCH_LOCATIONS',
		payload: request
	}
}
