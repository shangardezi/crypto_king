export const READY = 'READY'
export const GET_COINS_REQUEST = 'GET_COINS_REQUEST'
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