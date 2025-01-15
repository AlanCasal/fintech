import Colors from '@/src/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/src/constants/Utils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: Colors.blackTransparent05,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		marginBottom: 10,
	},
	title: {
		fontSize: 20,
		lineHeight: 20,
		color: Colors.lightGray,
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
	},
	modalContainer: {
		marginHorizontal: 10,
		flex: 1,
		backgroundColor: Colors.darkBackground,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: Colors.blackTransparent05,
	},
});
