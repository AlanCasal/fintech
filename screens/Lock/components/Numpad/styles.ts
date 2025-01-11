import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/constants/Utils';

export const styles = StyleSheet.create({
	numbersView: {
		marginHorizontal: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	buttonNumber: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		marginVertical: 20,
	},
	number: {
		fontSize: 32,
		fontFamily: PRIMARY_FONT_FAMILY,
		color: Colors.lightGray,
	},
});
