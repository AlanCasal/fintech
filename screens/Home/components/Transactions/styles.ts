import Colors from '@/constants/Colors';
import {
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	transactions: {
		marginHorizontal: 20,
		padding: 14,
		backgroundColor: Colors.blackTransparent05,
		borderRadius: 16,
		gap: 20,
	},
	noTransactions: {
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY,
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
		backgroundColor: Colors.gray,
		justifyContent: 'center',
		alignItems: 'center',
	},
	transactionDetails: {
		flex: 1,
	},
	transactionTitle: {
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.lightGray,
	},
	transactionDate: {
		fontSize: 12,
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.gray,
	},
	text: {
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.lightGray,
	},
	textSuccess: {
		color: Colors.success,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
	},
});
