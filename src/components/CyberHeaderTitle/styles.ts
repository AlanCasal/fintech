import { StyleSheet } from 'react-native';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/src/constants/Utils';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
	container: {
		gap: 20,
	},
	titleContainer: {
		alignItems: 'center',
		paddingVertical: 10,
	},
	headerText: {
		fontSize: 40,
		lineHeight: 40,
		color: Colors.primary,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		margin: 10,
	},
});
