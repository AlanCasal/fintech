import { StyleSheet } from 'react-native';
import { PRIMARY_FONT_FAMILY } from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
	button: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	text: {
		position: 'absolute',
		top: 29,
		fontSize: 18,
		fontFamily: PRIMARY_FONT_FAMILY,
		letterSpacing: 3,
		textTransform: 'uppercase',
	},
});
