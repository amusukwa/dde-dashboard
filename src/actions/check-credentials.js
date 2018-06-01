import axios from 'axios'
import settings from '../settings'
export default function checkCredentials(email, password) {
	const END_POINT = `${settings.hostname}/api/`
	const RESOURCE = `Users/login/`
	const credentials = {
		username: email,
		password: password
	}

	const URL = `${END_POINT}${RESOURCE}`
	const request = axios.post(URL, credentials)
	console.log(credentials)
	return {
		type: 'CHECK_CREDENTIALS',
		payload: request
	}
}
