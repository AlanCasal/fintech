import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		gap: 20,
	},
	inputContainer: {
		flexDirection: 'row',
		gap: 10,
	},
	input: {
		backgroundColor: Colors.lightGray,
		padding: 20,
		borderRadius: 16,
		fontSize: 20,
	},
	inputMobileNumber: {
		flex: 1,
	},
	signUpButton: {
		marginBottom: 20,
	},
	signUpEnabled: {
		backgroundColor: Colors.dark,
	},
	signUpDisabled: {
		backgroundColor: Colors.primaryMuted,
	},
});
