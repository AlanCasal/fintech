import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/constants/Utils';

export const styles = StyleSheet.create({
	editRow: {
		flexDirection: 'row',
		gap: 12,
		marginTop: 20,
	},
	title: {
		fontSize: 26,
		lineHeight: 26,
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		color: Colors.lightGray,
	},
	nameWrapper: {
		flexDirection: 'row',
		gap: 6,
	},
	nameInput: {
		width: 140,
		height: 40,
		borderWidth: 1,
		borderColor: Colors.gray,
		padding: 10,
		borderRadius: 10,
		backgroundColor: Colors.lightGray,
	},
});
