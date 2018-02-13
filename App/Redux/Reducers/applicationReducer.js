import { READY } from '../Actions/applicationActions'

const INITIAL_STORE = Object.freeze({
	greeting: null
})

const applicationReducer = (state = INITIAL_STORE, action) => {
	switch (action.type) {
		case READY:
			return {
			...state,
			greeting: action.payload.greeting
		}
		break;
		default: return state

	}
}

export default applicationReducer