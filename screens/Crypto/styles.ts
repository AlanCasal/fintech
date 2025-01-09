import Colors from '@/constants/Colors';
import {
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.darkBackground,
	},
	itemWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	itemDivider: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: Colors.gray,
		paddingBottom: 16,
		borderBottomLeftRadius: '15%',
		borderBottomRightRadius: '1%',
	},
	currencyImage: {
		width: 40,
		height: 40,
	},
	currencyInfoWrapper: {
		flex: 1,
		gap: 4,
	},
	currencyName: {
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		color: Colors.lightGray,
	},
	currencySymbol: {
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.gray,
	},
	currencyPriceWrapper: {
		gap: 4,
		alignItems: 'flex-end',
	},
	numbers: {
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		color: Colors.lightGray,
	},
	priceChangeWraper: {
		flexDirection: 'row',
		gap: 4,
		alignItems: 'center',
	},
});
