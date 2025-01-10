import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/constants/Utils';

export const styles = StyleSheet.create({
	menuWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		gap: 15,
		height: 30,
		marginBottom: 20,
		backgroundColor: Colors.darkBackground,
		borderBottomColor: Colors.gray,
	},
	menuButton: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	menuButtonActive: {
		borderBottomWidth: 3,
		borderBottomColor: Colors.primary,
	},
	menuText: {
		fontSize: 16,
		lineHeight: 16,
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		textAlign: 'center',
	},
	menuTextActive: {
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		color: Colors.primary,
	},
});
