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
		color: Colors.darkBackground,
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
