import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.darkBackground,
	},
	container: {
		justifyContent: 'space-between',
	},
	gap20: {
		gap: 20,
	},
	dividerContainer: {
		marginVertical: 10,
	},
});
