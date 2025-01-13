import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { SECONDARY_FONT_FAMILY } from '@/constants/Utils';

export const styles = StyleSheet.create({
	searchWrapper: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: Colors.blackTransparent05,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.primaryMuted,
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchIcon: {
		padding: 10,
	},
	searchInput: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
});
