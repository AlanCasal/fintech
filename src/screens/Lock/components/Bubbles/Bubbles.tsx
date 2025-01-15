import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { styles } from './styles';
import Colors from '@/src/constants/Colors';
import CyberButtonSquare from '@/src/components/Buttons/CyberButtonSquare';

const FAKE_CODE = [1, 2, 3, 4, 5, 6];
const HARDCODED_CODE = '111111';
const OFFSET = 20;
const TIME = 100;

const Bubbles = ({ code }: { code: string[] }) => {
	const router = useRouter();

	const offset = useSharedValue(0);
	const style = useAnimatedStyle(() => ({
		transform: [{ translateX: offset.value }],
	}));

	useEffect(() => {
		if (code.length === 6) {
			if (code.join('') === HARDCODED_CODE)
				router.push('/(authenticated)/(tabs)/home');
			else {
				offset.value = withSequence(
					withTiming(-OFFSET, { duration: TIME / 2 }),
					withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
					withTiming(0, { duration: TIME / 2 })
				);
				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code]);

	return (
		<Animated.View style={[styles.animatedView, style]}>
			{FAKE_CODE.map((_, index) => (
				<CyberButtonSquare
					key={index}
					width={20}
					fillColor={code[index] ? Colors.primary : Colors.gray}
					strokeColor={code[index] ? Colors.primaryMuted : Colors.gray}
					disabled
				/>
			))}
		</Animated.View>
	);
};

export default Bubbles;
