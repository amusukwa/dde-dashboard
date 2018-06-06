export default (
	state = {
		totalNpids: {}
	},
	action
) => {
	switch (action.type) {
		case 'FETCH_TOTAL_NPIDS':
			if (action.payload.data) {
				sessionStorage.setItem('token', action.payload.data.access_token)
			}
			return {
				totalNpids: action.payload.data
			}
		default:
			return state
	}
}
