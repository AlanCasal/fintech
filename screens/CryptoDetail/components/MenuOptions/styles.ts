import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	menuWrapper: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		gap: 10,
		paddingBottom: 8,
		backgroundColor: Colors.background,
		borderBottomColor: Colors.gray,
		// borderBottomWidth: StyleSheet.hairlineWidth,
	},
	menuButton: {
		padding: 10,
		paddingHorizontal: 14,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
	},
	menuButtonActive: {
		padding: 10,
		paddingHorizontal: 14,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: 'white',
	},
	menuText: {
		fontSize: 14,
		color: Colors.gray,
	},
	menuTextActive: {
		fontSize: 14,
		color: Colors.dark,
	},
});
