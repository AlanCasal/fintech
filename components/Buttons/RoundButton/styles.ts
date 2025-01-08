import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: 10,
	},
	circle: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: Colors.lightGray,
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		fontSize: 16,
		fontWeight: '500',
		color: Colors.darkBackground,
	},
});
