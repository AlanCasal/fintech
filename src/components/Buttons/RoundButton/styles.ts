import Colors from '@/src/constants/Colors';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/src/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: 10,
	},
	circle: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: Colors.blackTransparent05,
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		color: Colors.gray,
	},
});
