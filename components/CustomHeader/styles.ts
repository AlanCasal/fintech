import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		height: 60,
		backgroundColor: 'transparent',
		paddingHorizontal: 20,
	},
	userButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: Colors.lightGray,
		justifyContent: 'center',
		alignItems: 'center',
	},
	userText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 16,
	},
	searchWrapper: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: Colors.lightGray,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchIcon: {
		padding: 10,
	},
	searchInput: {
		flex: 1,
		borderColor: Colors.gray,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		color: Colors.dark,
	},
	circle: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: Colors.lightGray,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
