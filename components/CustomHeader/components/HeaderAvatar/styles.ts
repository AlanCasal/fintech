import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	userButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: Colors.lightGray,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	userIconWrapper: {
		marginBottom: 2,
	},
});
