import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.darkBackground,
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: -1,
	},
});
