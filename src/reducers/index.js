import { combineReducers } from 'redux'
import FetchLocationsReducer from './fetch-locations-reducer'

const rootReducer = combineReducers({
	facilities: FetchLocationsReducer
})

export default rootReducer
