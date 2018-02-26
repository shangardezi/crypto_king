import { combineReducers } from 'redux'
import generateStore from '../Store/store'
import { coinsReducer } from "./coinsReducer"
import { homeScreenReducer} from "./homeScreenReducer";
import { coinScreenReducer} from "./coinScreenReducer";

const createReducers = () => {
	const rootReducer = combineReducers({
		ui: combineReducers({
			homeScreen: homeScreenReducer,
			coinScreen: coinScreenReducer
		}),
		data: combineReducers({
			coins: coinsReducer
		})
	})

	return generateStore(rootReducer)
}

export default createReducers