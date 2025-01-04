import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		gap: 40,
	},
	greeting: {
		fontSize: 24,
		fontWeight: '700',
		alignSelf: 'center',
		color: Colors.dark,
	},
	codeView: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 20,
	},
	codeEmpty: {
		width: 20,
		height: 20,
		backgroundColor: Colors.lightGray,
		borderRadius: 10,
	},
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
		color: Colors.dark,
	},
	forgotPassword: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
		marginBottom: 40,
	},
	forgotPasswordText: {
		color: Colors.primary,
		fontSize: 16,
		fontWeight: '700',
	},
});
