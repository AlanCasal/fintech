import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	transactions: {
		marginHorizontal: 20,
		padding: 14,
		backgroundColor: Colors.white,
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
