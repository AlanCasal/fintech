import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { SIZE } from '../Config';

export const styles = StyleSheet.create({
	container: {
		width: SIZE - 20,
		height: 150,
		backgroundColor: Colors.white,
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.25,
		shadowRadius: 2,
		elevation: 5,
		padding: 14,
		alignSelf: 'center',
	},
	title: {
		color: Colors.gray,
		fontWeight: '500',
		fontSize: 16,
	},
	subtitle: {
		color: Colors.dark,
		fontWeight: '700',
		fontSize: 26,
		paddingTop: 10,
	},
	cashbackContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	cashbackTextContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
	cashbackTitleContainer: {
		height: 60,
		width: 60,
		borderRadius: 30,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cashbackTitle: {
		color: Colors.white,
		fontWeight: '700',
		fontSize: 18,
	},
	cashbackSubtitle: {
		color: Colors.gray,
		fontWeight: '700',
		fontSize: 18,
	},
	noTransactions: {
		color: Colors.gray,
		fontWeight: '700',
		fontSize: 18,
		paddingTop: 10,
	},
	transactionAmount: {
		color: Colors.dark,
		fontWeight: '700',
		fontSize: 18,
		paddingVertical: 10,
	},
	textSuccess: {
		color: Colors.success,
	},
	transactionTitle: {
		color: Colors.gray,
		fontWeight: '700',
		fontSize: 16,
	},
	cardsTitle: {
		color: Colors.gray,
		fontWeight: '500',
		fontSize: 16,
	},
	cardsIcon: {
		marginTop: 20,
		alignSelf: 'center',
	},
});
