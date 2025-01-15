import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	scrollViewContainer: {
		backgroundColor: Colors.darkBackground,
	},
	container: {
		backgroundColor: Colors.darkBackground,
		justifyContent: 'space-between',
	},
	gap20: {
		gap: 20,
	},
	dividerContainer: {
		marginVertical: 10,
	},
});
