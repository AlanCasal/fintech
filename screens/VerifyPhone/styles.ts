import Colors from '@/constants/Colors';
import {
	PRIMARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		gap: 10,
		backgroundColor: Colors.darkBackground,
	},
	titleContainer: {
		alignItems: 'center',
		paddingVertical: 20,
	},
	codeFieldRoot: {
		marginVertical: 20,
		marginLeft: 'auto',
		marginRight: 'auto',
		gap: 12,
	},
	cellRoot: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	cellText: {
		position: 'absolute',
		color: Colors.darkBackground,
		fontSize: 30,
		fontFamily: PRIMARY_FONT_FAMILY,
	},
	phoneNumber: {
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		color: Colors.primary,
	},
	separator: {
		height: 2,
		width: 10,
		alignSelf: 'center',
	},
	logoContainer: {
		alignSelf: 'center',
		padding: 10,
	},
});
