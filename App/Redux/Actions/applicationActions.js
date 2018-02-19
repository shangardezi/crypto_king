export const READY = 'READY'
export const GET_COINS_REQUEST = 'GET_COINS_REQUEST'
export const GET_COINS_DETAIL_REQUEST = 'GET_COINS_DETAIL_REQUEST'
export const GET_COINS_DETAIL_SUCCESS = 'GET_COINS_DETAIL_SUCCESS'
export const GET_COINS_DETAIL_FAILURE = 'GET_COINS_DETAIL_FAILURE'
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS'
export const GET_COINS_FAILURE = 'GET_COINS_FAILURE'

export const ready = (greeting) => {
	return {
		type: READY,
		payload: {
			greeting
		}
	}
}

export const getCoinsRequest = () => ({
	type: GET_COINS_REQUEST
})

export const getCoinsSuccess = (results) => ({
	type: GET_COINS_SUCCESS,
		payload: {
			results
	}
})

export const getCoinsFailure = (error) => ({
	type: GET_COINS_FAILURE,
		payload: {
			error
	}
})

export const getCoinsDetailRequest = (symbol) => ({
	type: GET_COINS_DETAIL_REQUEST,
	symbol
})

export const getCoinsDetailSuccess = (results) => ({
	type: GET_COINS_DETAIL_SUCCESS,
	payload: {
		results
	}
})

export const getCoinsDetailFailure = (error) => ({
	type: GET_COINS_DETAIL_FAILURE,
	payload: {
		error
	}
})