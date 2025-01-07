import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.dark,
	},
	video: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	content: {
		marginTop: 80,
		padding: 20,
	},
	header: {
		fontSize: 36,
		fontWeight: '900',
		textTransform: 'uppercase',
		color: Colors.white,
	},
});
