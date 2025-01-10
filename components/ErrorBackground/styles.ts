import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { PRIMARY_FONT_FAMILY, SECONDARY_FONT_FAMILY } from '@/constants/Utils';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.darkBackground,
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	title: {
		fontSize: 24,
		lineHeight: 24,
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		color: Colors.lightGray,
	},
	subtitle: {
		fontSize: 18,
		lineHeight: 20,
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.gray,
		textAlign: 'center',
	},
});
