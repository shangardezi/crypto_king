import {
	GET_COINS_DETAIL_REQUEST,
	GET_COINS_DETAIL_FAILURE,
	GET_COINS_DETAIL_SUCCESS,
	GET_COIN_PRICE_REQUEST,
	GET_COIN_PRICE_FAILURE,
	GET_COIN_PRICE_SUCCESS
} from '../Actions/coinsActions'

export const coinScreenReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_COINS_DETAIL_REQUEST:
			return {
				...state,
				isFetching: true,
				error: false
			}

		case GET_COINS_DETAIL_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true
			}

		case GET_COINS_DETAIL_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: false,
				coinId: action.payload.results.General.Id
			}

		case GET_COIN_PRICE_REQUEST:
			return {
				...state,
				isFetching: true,
				error: false
			}

		case GET_COIN_PRICE_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true
			}

		default: return state
	}
}
