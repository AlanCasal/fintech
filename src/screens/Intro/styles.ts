import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { PRIMARY_FONT_FAMILY } from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.darkBackground,
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
		fontFamily: PRIMARY_FONT_FAMILY,
		letterSpacing: 1,
		lineHeight: 45,
		fontSize: 36,
		fontWeight: '900',
		textTransform: 'uppercase',
		color: Colors.white,
	},
	logoContainer: {
		alignSelf: 'center',
		marginBottom: 20,
		padding: 15,
	},
	buttonsContainer: {
		zIndex: 2,
		elevation: 2,
	},
});
