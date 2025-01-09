import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	actionRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		backgroundColor: Colors.darkBackground,
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
	label: {
		textAlign: 'center',
		color: Colors.primaryMuted,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		textTransform: 'uppercase',
		fontSize: 12,
	},
});
