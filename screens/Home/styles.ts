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
});
