import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: Colors.blackTransparent05,
	},
	modalContainer: {
		backgroundColor: Colors.darkBackground,
		padding: 5,
	},
	tableItem: {
		padding: 10,
		flexDirection: 'row',
		gap: 20,
		alignItems: 'center',
	},
	actionText: {
		fontSize: 14,
		lineHeight: 16,
		fontFamily: SECONDARY_FONT_FAMILY,
		flex: 1,
		color: Colors.lightGray,
		textTransform: 'capitalize',
	},
});
