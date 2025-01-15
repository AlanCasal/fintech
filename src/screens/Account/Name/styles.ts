import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	editRow: {
		flex: 1,
		flexDirection: 'row',
		gap: 20,
		marginTop: 20,
		marginHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	fullName: {
		fontSize: 26,
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		color: Colors.lightGray,
		top: 3,
	},
	nameWrapper: {
		flexDirection: 'row',
		gap: 6,
	},
	nameInput: {
		width: 140,
		height: 40,
		fontFamily: PRIMARY_FONT_FAMILY,
		padding: 10,
	},
	buttonsContainer: {
		height: 40,
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
