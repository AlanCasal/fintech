import Colors from '@/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	notifications: {
		position: 'absolute',
		top: -8,
		left: -5,
		zIndex: 2,
		fontSize: 12,
		lineHeight: 12,
		color: Colors.primaryMuted2,
		fontFamily: PRIMARY_FONT_FAMILY,
		backgroundColor: Colors.primary,
		borderRadius: 2,
		textAlign: 'center',
		paddingHorizontal: 5,
		paddingTop: 2,
	},
});
