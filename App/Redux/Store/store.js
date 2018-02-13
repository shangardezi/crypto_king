import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import rootSaga from '../../Saga/rootSaga'

const generateStore =  (rootReducers) => {
	const middleware = []

	//********* Logger Middleware ***********//
	middleware.push(logger)

	//********* Saga Middleware ***********//

	const sagaMiddleware = createSagaMiddleware()
	middleware.push(sagaMiddleware)


	const store = createStore(rootReducers, applyMiddleware(...middleware))

	sagaMiddleware.run(rootSaga)
	return store
}

export default generateStore