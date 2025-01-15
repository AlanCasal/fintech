import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { SIZE } from '../Config';
import {
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	container: {
		width: SIZE - 20,
		height: 150,
		backgroundColor: Colors.blackTransparent02,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.primaryMuted,
		shadowColor: Colors.blackTransparent02,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.25,
		shadowRadius: 2,
		elevation: 5,
		padding: 14,
		alignSelf: 'center',
	},
	dragIcon: {
		position: 'absolute',
		right: 15,
		top: 15,
	},
	spentTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		backgroundColor: Colors.darkBackground,
		borderWidth: 2,
		borderColor: Colors.positive,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cashbackTitle: {
		color: Colors.positive,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 18,
	},
	cashbackSubtitle: {
		color: Colors.positive,
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
		color: Colors.positive,
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
