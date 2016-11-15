import {CHANGE_BACKGROUND, SWITCH_VIEW} from '../action'

export default function rootReducer(state = {}, action) {
	switch(action.type) {
		case CHANGE_BACKGROUND:
			return Object.assign({}, state, {
				color: action.color,
				title: action.title
			})

		case SWITCH_VIEW:
			const newArr = state.activeIndex.slice();
			newArr.splice(action.index, 1, action.activeIndex)

			return Object.assign({}, state, {
				activeIndex: newArr
			})

		default:
			return state
	}
}