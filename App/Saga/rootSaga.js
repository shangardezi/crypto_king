import {
	all,
	takeLatest,
	call,
	put
} from 'redux-saga/effects'
import {
	GET_COINS_DETAIL_REQUEST, GET_COINS_REQUEST, getCoinsFailure,
	getCoinsSuccess, getCoinsDetailSuccess, getCoinsDetailFailure,
	getCoinPriceSuccess, getCoinPriceFailure, GET_COIN_PRICE_REQUEST
} from '../Redux/Actions/coinsActions'
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
		`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${payload.id}`)

	if (response.status === 200)  {
		yield put(getCoinsDetailSuccess(response.data.Data))
	} else {
		yield put(getCoinsDetailFailure(response.error))
	}
}

function* getCoinPriceFromApi(payload) {
	const response = yield call(api.getRequest,
		`https://min-api.cryptocompare.com/data/price?fsym=${payload.symbol}&tsyms=BTC,USD,EUR`)

	if (response.status === 200)  {
		yield put(getCoinPriceSuccess(response.data, payload.symbol))
	} else {
		yield put(getCoinPriceFailure(response.error))
	}
}

function* rootSaga () {
	yield takeLatest(GET_COINS_REQUEST, getCoinsFromApi)
	yield takeLatest(GET_COINS_DETAIL_REQUEST, getCoinDetailsFromApi)
	yield takeLatest(GET_COIN_PRICE_REQUEST, getCoinPriceFromApi)
}

export default rootSaga