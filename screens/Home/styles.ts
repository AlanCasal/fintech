import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
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
	actionRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
	},
	transactions: {
		marginHorizontal: 20,
		padding: 14,
		backgroundColor: 'white',
		borderRadius: 16,
		gap: 20,
	},
	noTransactions: {
		fontSize: 16,
		fontWeight: '500',
		color: Colors.gray,
	},
	transaction: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	circle: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: Colors.lightGray,
		justifyContent: 'center',
		alignItems: 'center',
	},
	transactionDetails: {
		flex: 1,
	},
	transactionTitle: {
		fontSize: 16,
		fontWeight: '400',
		color: Colors.dark,
	},
	transactionDate: {
		fontSize: 12,
		fontWeight: '500',
		color: Colors.gray,
	},
});
