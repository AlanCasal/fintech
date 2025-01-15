import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
	shadow: {
		textShadowColor: Colors?.primaryMuted || 'blue',
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 1,
	},
});
