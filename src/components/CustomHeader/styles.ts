import Colors from '@/src/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		backgroundColor: Colors.darkBackground,
		paddingHorizontal: 20,
	},
});
