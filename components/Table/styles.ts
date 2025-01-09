import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import {
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/constants/Utils';

export const styles = StyleSheet.create({
	tableContainer: {
		padding: 14,
		backgroundColor: Colors.blackTransparent02,
		gap: 20,
	},
	emptyMessage: {
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY,
		color: Colors.gray,
		textAlign: 'center',
	},
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
