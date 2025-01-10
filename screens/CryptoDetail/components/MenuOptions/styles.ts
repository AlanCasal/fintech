import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY } from '@/constants/Utils';

export const styles = StyleSheet.create({
	menuWrapper: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		gap: 10,
		paddingBottom: 8,
		backgroundColor: Colors.darkBackground,
		borderBottomColor: Colors.gray,
	},
	menuButton: {
		padding: 10,
		paddingHorizontal: 14,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
	},
	menuButtonActive: {
		padding: 10,
		paddingHorizontal: 14,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: Colors.lightGray,
	},
	menuText: {
		fontSize: 14,
		color: Colors.gray,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	menuTextActive: {
		fontSize: 14,
		color: Colors.darkBackground,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
});
