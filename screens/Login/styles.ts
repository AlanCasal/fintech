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
	loginButton: {
		marginBottom: 20,
	},
	loginEnabled: {
		backgroundColor: Colors.dark,
	},
	loginDisabled: {
		backgroundColor: Colors.primaryMuted,
	},
	dividerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	divider: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: Colors.gray,
	},
	continueWithButton: {
		flexDirection: 'row',
		gap: 10,
		backgroundColor: 'white',
	},
	continueWithText: {
		color: Colors.dark,
	},
});
