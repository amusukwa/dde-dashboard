import { combineReducers } from 'redux'
import FetchLocationsReducer from './fetch-locations-reducer'
import AuthReducer from './authReducer'

const rootReducer = combineReducers({
	facilities: FetchLocationsReducer,
	loginResponse: AuthReducer
})

export default rootReducer
