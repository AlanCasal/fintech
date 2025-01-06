import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
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
});
