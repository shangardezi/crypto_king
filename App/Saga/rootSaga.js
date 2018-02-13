import {
	all,
	takeLatest,
	call,
	put
} from 'redux-saga/effects'
import {GET_COINS_REQUEST, getCoinsFailure, getCoinsSuccess} from '../Redux/Actions/applicationActions'
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

function* rootSaga () {
	yield takeLatest(GET_COINS_REQUEST, getCoinsFromApi)
}

export default rootSaga