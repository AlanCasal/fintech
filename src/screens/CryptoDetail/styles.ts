import Colors from '@/src/constants/Colors';
import { StyleSheet } from 'react-native';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/src/constants/Utils';

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
	menuTextActive: {
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		color: Colors.primary,
	},
	container: {
		flex: 1,
		backgroundColor: Colors.darkBackground,
	},
});
