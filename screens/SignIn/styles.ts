import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	container: {
		gap: 20,
	},
	signInButton: {
		marginBottom: 20,
	},
	signInEnabled: {
		backgroundColor: Colors.darkBackground,
	},
	signInDisabled: {
		backgroundColor: Colors.primaryMuted,
	},
});
