import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	captureButton: {
		width: 100,
		height: 100,
		borderRadius: 50,
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
