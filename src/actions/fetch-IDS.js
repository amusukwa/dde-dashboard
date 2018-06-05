import axios from 'axios'

export default function fetchIDS(doc_id) {
	const credentials = doc_id
	const URL = 'http://71.19.156.178:3004/v1/npids_assigned'
	const request = axios.get(URL)
	return {
		type: 'FETCH_IDS',
		payload: request
	}
}
