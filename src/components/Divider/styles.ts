import Colors from '@/src/constants/Colors';
import { SECONDARY_FONT_FAMILY } from '@/src/constants/Utils';
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
		fontFamily: SECONDARY_FONT_FAMILY,
	},
});
