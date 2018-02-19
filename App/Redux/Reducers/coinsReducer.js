import {
	GET_COINS_REQUEST,
	GET_COINS_DETAIL_REQUEST,
	GET_COINS_DETAIL_SUCCESS,
	GET_COINS_DETAIL_FAILURE,
	GET_COINS_SUCCESS,
	GET_COINS_FAILURE
} from '../Actions/applicationActions'

export const coinsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_COINS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: false
			}

		case GET_COINS_SUCCESS:
			return {
				...state,
				isFetching: false,
				results: action.payload.results
			}

		case GET_COINS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true,
				errorMessage: action.payload.error
		}

		case GET_COINS_DETAIL_REQUEST:
			return {
				...state,
				isFetching: true,
				error: false
			}

		case GET_COINS_DETAIL_SUCCESS:
			return {
				...state,
				isFetching: false,
				results: action.payload.results
			}

		case GET_COINS_DETAIL_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true,
				errorMessage: action.payload.error
			}

		default: return state
	}
}