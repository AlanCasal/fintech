import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	editRow: {
		flexDirection: 'row',
		gap: 12,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		color: Colors.white,
	},
	nameWrapper: {
		flexDirection: 'row',
		gap: 6,
	},
	nameInput: {
		width: 140,
		height: 40,
		borderWidth: 1,
		borderColor: Colors.gray,
		padding: 10,
		borderRadius: 10,
		backgroundColor: Colors.white,
	},
});
