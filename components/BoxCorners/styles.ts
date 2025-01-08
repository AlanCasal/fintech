import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	cornerBase: {
		position: 'absolute',
	},
	cornerTopLeft: {
		top: 0,
		left: 0,
		borderTopWidth: 2,
		borderLeftWidth: 2,
	},
	cornerTopRight: {
		top: 0,
		right: 0,
		borderTopWidth: 2,
		borderRightWidth: 2,
	},
	cornerBottomLeft: {
		bottom: 0,
		left: 0,
		borderBottomWidth: 2,
		borderLeftWidth: 2,
	},
	cornerBottomRight: {
		bottom: 0,
		right: 0,
		borderBottomWidth: 2,
		borderRightWidth: 2,
	},
});
