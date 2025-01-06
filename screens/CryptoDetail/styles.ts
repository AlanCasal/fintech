import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const STICKY_HEADER_PADDING_FIX = 100;

export const styles = StyleSheet.create({
	container: {
		marginTop: STICKY_HEADER_PADDING_FIX,
		backgroundColor: Colors.background,
	},
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
