export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND'
export function changeBackground(color) {
	return {
		type: CHANGE_BACKGROUND,
		color
	}
}
