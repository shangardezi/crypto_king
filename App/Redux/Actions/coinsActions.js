export const GET_COINS_REQUEST = 'GET_COINS_REQUEST'
export const GET_COINS_DETAIL_REQUEST = 'GET_COINS_DETAIL_REQUEST'
export const GET_COINS_DETAIL_SUCCESS = 'GET_COINS_DETAIL_SUCCESS'
export const GET_COINS_DETAIL_FAILURE = 'GET_COINS_DETAIL_FAILURE'
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS'
export const GET_COINS_FAILURE = 'GET_COINS_FAILURE'
export const GET_COIN_PRICE_REQUEST = 'GET_COIN_PRICE_REQUEST'
export const GET_COIN_PRICE_SUCCESS = 'GET_COIN_PRICE_SUCCESS'
export const GET_COIN_PRICE_FAILURE = 'GET_COIN_PRICE_FAILURE'


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

export const getCoinsDetailRequest = (id) => ({
	type: GET_COINS_DETAIL_REQUEST,
	id
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


export const getCoinPriceRequest = (symbol) => ({
	type: GET_COIN_PRICE_REQUEST,
	symbol
})

export const getCoinPriceSuccess = (results, symbol) => ({
	type: GET_COIN_PRICE_SUCCESS,
	payload: {
		results,
		symbol
	}
})

export const getCoinPriceFailure = (error) => ({
	type: GET_COIN_PRICE_FAILURE,
	payload: {
		error
	}
})