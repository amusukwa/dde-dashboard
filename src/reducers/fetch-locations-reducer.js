export default (
	state = {
		facilityLocation: []
	},
	action
) => {
	switch (action.type) {
		case 'FETCH_LOCATION':
			return {
				facilityLocation: action.payload.data
			}

		default:
			return state
	}
}
