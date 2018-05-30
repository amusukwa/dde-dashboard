import axios from 'axios'
export default function checkCredentials(username, password) {
	const credentials = {
		username: username,
		password: password
	}

	const URL = 'http://192.168.12.228:3000/v1/login'
	const request = axios.post(URL, { credentials })
	//request['access_token']
	console.log(request)

	return {
		type: 'CHECK_CREDENTIALS',
		payload: request
	}
}
