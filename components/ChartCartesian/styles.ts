import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: Colors.gray,
	},
	chartTodayTextPrice: {
		color: Colors.dark,
		fontWeight: '700',
		fontSize: 30,
	},
	chartTodayText: {
		color: Colors.gray,
		fontSize: 18,
	},
});
