//@flow
import axios from 'axios'
import settings from '../settings'
export default async function checkCredentials(username, password) {
	const credentials = {
		username,
		password
	}

	const response = axios.post(
		'http://71.19.156.178:3004/v1/login/',
		credentials
	)

	return {
		type: 'CHECK_CREDENTIALS',
		payload: response
	}
}
