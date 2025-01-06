import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	dividerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	divider: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: Colors.gray,
	},
	centerText: {
		fontSize: 18,
		color: Colors.gray,
	},
});
