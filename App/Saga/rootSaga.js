import {
	all,
	takeLatest,
	call,
	put
} from 'redux-saga/effects'
import {
	GET_COINS_DETAIL_REQUEST, GET_COINS_REQUEST, getCoinsFailure,
	getCoinsSuccess, getCoinsDetailSuccess, getCoinsDetailFailure
} from '../Redux/Actions/applicationActions'
import apiService from '../API/apiService'

const api = new apiService()

function* getCoinsFromApi() {
 	const response = yield call(api.getRequest,'https://www.cryptocompare.com/api/data/coinlist/')

	if (response.status === 200)  {
		yield put(getCoinsSuccess(response.data.Data))
	} else {
		yield put(getCoinsFailure(response.error))
	}
}

function* getCoinDetailsFromApi(payload) {
	const response = yield call(api.getRequest,
		`https://min-api.cryptocompare.com/data/price?fsym=${payload.symbol}&tsyms=USD,EUR`)

	if (response.status === 200)  {
		yield put(getCoinsDetailSuccess(response.data))
	} else {
		yield put(getCoinsDetailFailure(response.error))
	}
}

function* rootSaga () {
	yield takeLatest(GET_COINS_REQUEST, getCoinsFromApi)
	yield takeLatest(GET_COINS_DETAIL_REQUEST, getCoinDetailsFromApi)
}

export default rootSaga