import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	currencyWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
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
		fontWeight: '600',
		color: Colors.dark,
	},
	currencySymbol: {
		color: Colors.gray,
	},
	currencyPriceWrapper: {
		gap: 4,
		alignItems: 'flex-end',
	},
	currencyPrice: {
		fontWeight: '600',
		color: Colors.dark,
	},
	priceChangeWraper: {
		flexDirection: 'row',
		gap: 4,
		alignItems: 'center',
	},
});
