import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	indicator: {
		position: 'absolute',
		height: 3,
		backgroundColor: Colors.primary,
		bottom: -10,
		left: 0,
	},
});
