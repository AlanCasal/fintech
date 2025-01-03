import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	headerRight: {
		flexDirection: 'row',
		gap: 10,
	},
	headerComponentWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 16,
	},
	headerComponentSubtitle: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 20,
		color: Colors.gray,
	},
	headerComponentLogo: {
		width: 60,
		height: 60,
	},
	overview: {
		marginTop: 20,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.gray,
	},
	description: {
		color: Colors.gray,
	},
});
