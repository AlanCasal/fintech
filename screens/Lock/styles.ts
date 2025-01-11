import Colors from '@/constants/Colors';
import {
	PRIMARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 40,
		backgroundColor: Colors.darkBackground,
	},
	greeting: {
		marginTop: 20,
		fontSize: 24,
		lineHeight: 24,
		fontFamily: PRIMARY_FONT_FAMILY,
		alignSelf: 'center',
		color: Colors.lightGray,
	},
	name: {
		fontFamily: PRIMARY_FONT_FAMILY,
		color: Colors.primary,
	},
	forgotPassword: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
		marginBottom: 40,
	},
	forgotPasswordText: {
		color: Colors.primary,
		fontSize: 16,
		lineHeight: 16,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		textTransform: 'uppercase',
		fontWeight: '700',
	},
});
