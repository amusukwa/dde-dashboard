import { combineReducers } from 'redux'
import FetchReducer from './fetch-reducer'
import AuthReducer from './authReducer'
import FetchNpids from './fetch-npids'

const rootReducer = combineReducers({
	facilities: FetchReducer,
	auth: AuthReducer,
	totals: FetchNpids
})

export default rootReducer
