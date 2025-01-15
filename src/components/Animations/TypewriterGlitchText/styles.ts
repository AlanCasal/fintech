import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { isIos } from '@/src/constants/Utils';

export const styles = StyleSheet.create({
	textGlow: {
		textShadowColor: Colors.whiteGlow,
		textShadowOffset: isIos ? { width: 0, height: 0 } : { width: 1, height: 1 },
		textShadowRadius: isIos ? 10 : 2,
		elevation: 3,
	},
});
