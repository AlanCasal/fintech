import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 16,
	},
	symbol: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 20,
		color: Colors.gray,
	},
	logo: {
		width: 60,
		height: 60,
	},
});
