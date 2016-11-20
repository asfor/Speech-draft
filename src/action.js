export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND'
export function changeBackground(color, title) {
	return {
		type: CHANGE_BACKGROUND,
		color,
		title
	}
}
