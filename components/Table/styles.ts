import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY } from '@/constants/Utils';

export const styles = StyleSheet.create({
	tableContainer: {
		padding: 14,
		backgroundColor: Colors.blackTransparent02,
		gap: 20,
	},
	emptyMessage: {
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.gray,
		textAlign: 'center',
	},
});
