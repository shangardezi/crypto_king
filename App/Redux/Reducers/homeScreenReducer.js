import { GET_COINS_REQUEST, GET_COINS_FAILURE, GET_COINS_SUCCESS } from '../Actions/coinsActions'
import _ from 'lodash'

export const homeScreenReducer = (state = { coinIds: [] }, action) => {
	switch (action.type) {
		case GET_COINS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: false
			}

		case GET_COINS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true
			}

		case GET_COINS_SUCCESS:
		return {
			...state,
			isFetching: false,
			error: false,
			coinIds: Object.keys(action.payload.results)
		}

		default: return state
	}
}
