import { StyleSheet } from 'react-native';
import {
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	tableItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	itemDivider: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: Colors.gray,
		paddingBottom: 16,
		borderBottomLeftRadius: '15%',
		borderBottomRightRadius: '1%',
	},
	itemContent: {
		flex: 1,
		gap: 4,
	},
	text: {
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.lightGray,
	},
	itemTitle: {
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.lightGray,
	},
	itemSubtitle: {
		fontSize: 12,
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.gray,
	},
	textSuccess: {
		color: Colors.success,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
	},
});
