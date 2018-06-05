export default (
	state = {
		facilityLocations: []
	},
	action
) => {
	switch (action.type) {
		case 'FETCH_LOCATIONS':
			return {
				facilityLocations: action.payload.data
			}
		default:
			return state
	}
}
