import { StyleSheet } from 'react-native';
import { PRIMARY_FONT_FAMILY } from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	svgWrapper: {
		width: '100%',
	},
	contentContainer: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
	text: {
		fontSize: 18,
		fontFamily: PRIMARY_FONT_FAMILY,
		letterSpacing: 3,
		textTransform: 'uppercase',
		includeFontPadding: false,
		textAlignVertical: 'center',
	},
});
