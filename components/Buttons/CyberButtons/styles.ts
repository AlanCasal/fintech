import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
	leftButton: {
		position: 'relative',
		alignItems: 'center',
		height: 72,
	},
	rightButton: {
		position: 'relative',
		alignItems: 'center',
		height: 72,
	},
	leftButtonText: {
		position: 'absolute',
		zIndex: 1,
		top: 24,
		backgroundColor: 'transparent',
		fontSize: 22,
		letterSpacing: 2,
		color: Colors.primary,
		fontWeight: '700',
		textTransform: 'uppercase',
	},
	rightButtonText: {
		position: 'absolute',
		zIndex: 1,
		top: 24,
		fontSize: 22,
		color: Colors.dark,
		fontWeight: '700',
		letterSpacing: 2,
		textTransform: 'uppercase',
	},
});
