import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	searchWrapper: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: Colors.blackTransparent05,
		borderRadius: 30,
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
	},
});
