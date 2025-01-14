import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		marginTop: 20,
		paddingVertical: 20,
		backgroundColor: Colors.darkBackground,
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 70,
		gap: 10,
	},
	label: {
		textAlign: 'center',
		color: Colors.primaryMuted,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		textTransform: 'uppercase',
		fontSize: 11,
		lineHeight: 12,
	},
});
