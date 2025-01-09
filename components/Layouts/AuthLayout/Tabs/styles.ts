import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	blurView: {
		flex: 1,
	},
	tabBarStyle: {
		backgroundColor: Colors.blackTransparent05,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		borderTopWidth: 0,
		elevation: 0,
	},
});
