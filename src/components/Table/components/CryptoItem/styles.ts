import { StyleSheet } from 'react-native';
import { SECONDARY_FONT_FAMILY_SEMI_BOLD } from '@/src/constants/Utils';
import Colors from '@/src/constants/Colors';
import { styles as tableStyles } from '@/src/components/Table/styles';

export const styles = StyleSheet.create({
	...tableStyles,
	currencyImage: {
		width: 30,
		height: 30,
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
