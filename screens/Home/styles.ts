import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

const STICKY_HEADER_PADDING_FIX = 110;

export const styles = StyleSheet.create({
	container: {
		marginTop: STICKY_HEADER_PADDING_FIX,
		backgroundColor: Colors.darkBackground,
	},
});
