import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
	userButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		padding: 20,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.primaryMuted,
		backgroundColor: Colors.primaryMuted,
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
