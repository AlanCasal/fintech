import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.dark,
	},
	video: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	content: {
		marginTop: 80,
		padding: 20,
	},
	header: {
		fontSize: 36,
		fontWeight: '900',
		textTransform: 'uppercase',
		color: Colors.white,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 20,
		marginBottom: 60,
		paddingHorizontal: 20,
	},
	button: {
		flex: 1,
	},
	buttonText: {
		fontWeight: '500',
		fontSize: 22,
	},
	buttonSignIn: {
		backgroundColor: Colors.dark,
	},
	buttonTextSignIn: {
		color: Colors.white,
	},
	buttonSignUp: {
		backgroundColor: Colors.white,
	},
	buttonTextSignUp: {
		color: Colors.dark,
	},
});
