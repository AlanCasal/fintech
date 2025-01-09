import Colors from '@/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	account: {
		marginTop: 80,
		alignItems: 'center',
	},
	balanceRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		gap: 10,
	},
	balanceAmount: {
		fontSize: 50,
		fontFamily: PRIMARY_FONT_FAMILY,
		color: Colors.lightGray,
	},
	balanceCurrency: {
		fontSize: 30,
		fontFamily: PRIMARY_FONT_FAMILY,
		color: Colors.lightGray,
	},
});
