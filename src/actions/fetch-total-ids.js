import axios from 'axios'

export default async function fetchTotalIds(doc_id) {
	const url = 'http://71.19.156.178:3004/v1/total_allocated_npids'
	const request = await axios({
		url,
		method: 'POST',
		data: {
			doc_id
		},
		headers: {
			Authorization: await sessionStorage.getItem('access_token')
		}
	})

	return {
		type: 'FETCH_TOTAL_NPIDS',
		payload: request,
		doc_id
	}
}
