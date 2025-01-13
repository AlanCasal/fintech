import {
	PRIMARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';
import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	headerRight: {
		flexDirection: 'row',
		gap: 10,
	},
	headerTitleContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	headerCriptoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	logo: {
		width: 24,
		height: 24,
	},
	headerTitleStyle: {
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		fontSize: 16,
		color: Colors.lightGray,
		top: 2,
	},
	headerPriceStyle: {
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 12,
		color: Colors.positive,
		top: 2,
	},
	headerLargeTitleStyle: {
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		color: Colors.primary,
	},
});
