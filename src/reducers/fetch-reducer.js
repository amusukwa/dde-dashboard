export default (
	state = {
		facilityLocations: [],
		totalIds: {}
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
			const tid = {}
			tid[action.doc_id] = action.payload.data.allocated_npids
			return {
				...state,
				totalIds: { ...state.totalIds, ...tid }
			}
			break
		default:
			return state
	}
}
