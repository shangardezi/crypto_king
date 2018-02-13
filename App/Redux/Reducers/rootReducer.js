import { combineReducers } from 'redux'
import applicationReducer from './applicationReducer'
import generateStore from '../Store/store'
import { coinsReducer } from "./coinsReducer"

const createReducers = () => {
	const rootReducer = combineReducers({
		application: applicationReducer,
		coins: coinsReducer
	})

	return generateStore(rootReducer)
}

export default createReducers