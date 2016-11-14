import {CHANGE_BACKGROUND} from '../action'

export default function rootReducer(state = {}, action) {
	switch(action.type) {
		case CHANGE_BACKGROUND:
			return Object.assign({}, state, {color: action.color})

		default:
			return state
	}
}