import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY } from '@/constants/Utils';

export const styles = StyleSheet.create({
	tableContainer: {
		backgroundColor: Colors.blackTransparent02,
		margin: 20,
	},
	tableItem: {
		padding: 14,
		flexDirection: 'row',
		gap: 20,
		alignItems: 'center',
	},
	itemDivider: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: Colors.gray,
		borderBottomLeftRadius: '15%',
		borderBottomRightRadius: '5%',
	},
	iconImage: {
		width: 20,
		height: 20,
		borderRadius: 5,
	},
	actionText: {
		fontSize: 18,
		fontFamily: SECONDARY_FONT_FAMILY,
		flex: 1,
		color: Colors.white,
		textTransform: 'capitalize',
	},
	activeText: {
		color: Colors.primaryMuted,
	},
	inboxBadgeWrapper: {
		backgroundColor: Colors.primaryMuted,
		paddingHorizontal: 10,
		borderRadius: 2,
		justifyContent: 'center',
	},
	inboxBadge: {
		color: Colors.white,
		fontSize: 12,
	},
});
