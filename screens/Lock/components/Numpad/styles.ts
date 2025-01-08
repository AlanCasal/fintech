import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	numbersView: {
		marginHorizontal: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	buttonNumber: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: Colors.lightGray,
		marginVertical: 20,
	},
	number: {
		fontSize: 32,
		fontWeight: '700',
		color: Colors.darkBackground,
	},
});
