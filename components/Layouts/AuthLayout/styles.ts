import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	blurView: {
		flex: 1,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		elevation: 5,
	},
	tabBarStyle: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		borderTopWidth: 0,
		elevation: 0,
	},
});
