import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	buttonsWrapper: {
		flexDirection: 'row',
		gap: 10,
		margin: 12,
	},
	pillButton: {
		backgroundColor: Colors.primary,
		flexDirection: 'row',
		gap: 16,
	},
	buttonText: {
		color: 'white',
	},
});
