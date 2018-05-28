export default (
	state = {
		facilityLocation: []
	},
	action
) => {
	switch (action.type) {
		case 'FETCH_LOCATIONS':
			return {
				facilityLocation: action.payload.data
			}

		default:
			return state
	}
}
