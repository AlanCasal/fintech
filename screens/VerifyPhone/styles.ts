import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
	codeFieldRoot: {
		marginVertical: 20,
		marginLeft: 'auto',
		marginRight: 'auto',
		gap: 12,
	},
	cellRoot: {
		width: 45,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.lightGray,
		borderRadius: 8,
	},
	cellText: {
		color: Colors.darkBackground,
		fontSize: 36,
		textAlign: 'center',
	},
	focusCell: {
		borderColor: Colors.darkBackground,
	},
	separator: {
		height: 2,
		width: 10,
		backgroundColor: Colors.gray,
		alignSelf: 'center',
	},
});
