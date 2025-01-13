import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	tableContainer: {
		overflow: 'hidden',
	},
	seeMoreContainer: {
		marginHorizontal: 20,
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.blackTransparent02,
	},
	seeMoreText: {
		color: Colors.primary,
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
	},
});
