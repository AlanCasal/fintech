import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 25,
		zIndex: 1,
	},
	cyberDots: {
		position: 'absolute',
		width: '100%',
		height: '30%',
		left: 0,
		transform: [{ scale: 1.5 }],
	},
	top: {
		top: 0,
		height: '15%',
	},
	bottom: {
		bottom: -100,
	},
	headerContainer: {
		position: 'relative',
		alignSelf: 'flex-start',
		width: '100%',
		alignItems: 'center',
		paddingVertical: 10,
	},
	headerBorder: {
		margin: 10,
	},
});
