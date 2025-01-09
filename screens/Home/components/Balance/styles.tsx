import { PRIMARY_FONT_FAMILY } from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	account: {
		marginTop: 20,
		paddingTop: 60,
		paddingBottom: 20,
		marginHorizontal: 20,
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
	},
	balanceCurrency: {
		fontSize: 30,
		fontFamily: PRIMARY_FONT_FAMILY,
	},
});
