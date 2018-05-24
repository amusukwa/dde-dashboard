import { combineReducers } from 'redux';
import FetchDataReducer from './fetch-data-reducer';

const rootReducer = combineReducers({
  facilities: FetchDataReducer,
});

export default rootReducer;