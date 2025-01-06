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
		fontWeight: '700',
	},
	balanceCurrency: {
		fontSize: 30,
		fontWeight: '500',
	},
});
