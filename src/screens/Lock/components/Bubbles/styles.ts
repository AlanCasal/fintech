import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
	animatedView: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 20,
	},
	bubbleEmpty: {
		width: 20,
		height: 20,
		backgroundColor: Colors.lightGray,
	},
});
