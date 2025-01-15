import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { PRIMARY_FONT_FAMILY, SECONDARY_FONT_FAMILY } from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	overview: {
		marginTop: 50,
		gap: 10,
	},
	detailsContainer: {
		backgroundColor: Colors.blackTransparent02,
		padding: 20,
	},
	subtitle: {
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		fontSize: 20,
		color: Colors.lightGray,
	},
	description: {
		fontFamily: SECONDARY_FONT_FAMILY,
		fontSize: 16,
		lineHeight: 20,
		color: Colors.lightGray,
	},
});
