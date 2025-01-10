import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const STICKY_HEADER_PADDING_FIX = 100;

export const styles = StyleSheet.create({
	container: {
		marginTop: STICKY_HEADER_PADDING_FIX,
		backgroundColor: Colors.darkBackground,
	},
});
