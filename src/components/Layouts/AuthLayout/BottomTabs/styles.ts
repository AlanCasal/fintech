import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	blurView: {
		flex: 1,
	},
	tabBarStyle: {
		backgroundColor: Colors.blackTransparent05,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		borderTopWidth: 0,
		elevation: 0,
	},
	tabBarLabelStyle: {
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		lineHeight: 10,
	},
});
