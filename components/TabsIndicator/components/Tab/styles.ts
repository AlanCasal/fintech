import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		lineHeight: 16,
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		textAlign: 'center',
	},
});
