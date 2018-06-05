import { combineReducers } from 'redux'
import FetchReducer from './fetch-reducer'
import AuthReducer from './authReducer'

const rootReducer = combineReducers({
	facilities: FetchReducer,
	auth: AuthReducer
})

export default rootReducer
