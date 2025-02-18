import Colors from '@/src/constants/Colors';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/src/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		lineHeight: 16,
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		textAlign: 'center',
	},
});
