import {
	GET_COINS_REQUEST,
	GET_COINS_DETAIL_REQUEST,
	GET_COINS_DETAIL_SUCCESS,
	GET_COINS_DETAIL_FAILURE,
	GET_COINS_SUCCESS,
	GET_COINS_FAILURE,
	GET_COIN_PRICE_SUCCESS
} from '../Actions/coinsActions'

export const coinsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_COINS_SUCCESS:
			return {
				...state,
				...action.payload.results
			}

		case GET_COINS_DETAIL_SUCCESS:
			const { results } = action.payload
			const { General } = results

			return {
				...state,
				[General.Symbol]: {
					...state[General.Symbol],
					...results
				}
			}

		case GET_COIN_PRICE_SUCCESS:
			const { symbol } = action.payload

			return {
				...state,
				[symbol]: {
					...state[symbol],
					price: action.payload.results
				}
			}

		default: return state
	}
}