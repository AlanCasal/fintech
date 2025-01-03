import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	centerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	errorTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.dark,
	},
	errorMessage: {
		fontSize: 16,
		color: Colors.gray,
		textAlign: 'center',
	},
});
