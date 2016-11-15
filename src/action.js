export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND'
export function changeBackground(color, title) {
	return {
		type: CHANGE_BACKGROUND,
		color,
		title
	}
}


export const SWITCH_VIEW = 'SWITCH_VIEW'
export function switchView(index, activeIndex) {
	return {
		type: SWITCH_VIEW,
		index,
		activeIndex
	}
}
