import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { SIZE } from '../Config';
import {
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';

export const styles = StyleSheet.create({
	container: {
		width: SIZE - 20,
		height: 150,
		backgroundColor: Colors.blackTransparent02,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.primaryMuted,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.25,
		shadowRadius: 2,
		elevation: 5,
		padding: 14,
		alignSelf: 'center',
	},
	title: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY,
		fontSize: 16,
	},
	subtitle: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
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
		backgroundColor: Colors.primaryMuted,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cashbackTitle: {
		color: Colors.white,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 18,
	},
	cashbackSubtitle: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 18,
	},
	noTransactions: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 18,
		paddingTop: 10,
	},
	transactionAmount: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 18,
		paddingVertical: 10,
	},
	textSuccess: {
		color: Colors.success,
	},
	transactionTitle: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 16,
	},
	cardsTitle: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY,
		fontSize: 16,
	},
	cardsIcon: {
		marginTop: 20,
		alignSelf: 'center',
	},
});
