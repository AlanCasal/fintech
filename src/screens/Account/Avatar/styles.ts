import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
	captureButton: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderWidth: 51,
		borderColor: Colors.primaryMuted,
		backgroundColor: Colors.gray,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: Colors.gray,
	},
	userIconWrapper: {
		marginBottom: 5,
	},
});
