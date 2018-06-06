export default (
	state = {
		facilityLocations: [],
		totalNpids: [],
		counts: {}
	},
	action
) => {
	switch (action.type) {
		case 'FETCH_LOCATIONS':
			const facilityLocations = action.payload.data ? action.payload.data : []
			return {
				...state,
				facilityLocations
			}
		case 'FETCH_TOTAL_NPIDS':
			console.log(action)
			const currentState = { ...state }
			if (action.payload.data) {
				currentState['counts'][action.docId] =
					action.payload.data.allocated_npids
			}
			return currentState
			break
		default:
			return state
	}
}
