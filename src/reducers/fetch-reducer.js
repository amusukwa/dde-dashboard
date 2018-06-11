export default (
	state = {
		facilityLocations: [],
		totalIds: {},
		facilityIds: {}
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
		case 'FETCH_FACILITY_NPIDS':
			const fid = {}
			fid[action.doc_id] = action.payload.data.assigned_npids
			return {
				...state,
				facilityIds: { ...state.facilityIds, ...fid }
			}
			break
		default:
			return state
	}
}
