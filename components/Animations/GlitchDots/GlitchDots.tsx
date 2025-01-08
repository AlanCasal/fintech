import React, { useEffect, useRef } from 'react';
import { Animated, Image } from 'react-native';
import { styles } from './styles';

type GlitchDotsProps = {
	position?: 'top' | 'bottom';
	height?: `${number}%`;
	scale?: number;
};

const GlitchDots = ({
	position = 'bottom',
	height = '20%',
	scale = 1.5,
}: GlitchDotsProps) => {
	const opacityAnim = useRef(new Animated.Value(1)).current;
	const mountedRef = useRef(true);

	useEffect(() => {
		const glitchAnimation = () => {
			if (!mountedRef.current) return;

			Animated.sequence([
				Animated.timing(opacityAnim, {
					toValue: 0.2,
					duration: 100,
					useNativeDriver: true,
				}),
				Animated.timing(opacityAnim, {
					toValue: 1,
					duration: 100,
					useNativeDriver: true,
				}),
			]).start(() => {
				setTimeout(glitchAnimation, Math.random() * 3000);
			});
		};

		const initialDelay = setTimeout(glitchAnimation, 2000);

		return () => {
			mountedRef.current = false;
			clearTimeout(initialDelay);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Animated.View
			style={{
				position: 'absolute',
				opacity: opacityAnim,
				height: '100%',
				width: '100%',
				zIndex: 2,
				elevation: 2,
			}}
		>
			<Image
				source={require('@/assets/images/cyber-dots-primary.png')}
				style={[
					styles.cyberDots,
					styles[`${position}`],
					{
						height,
						transform: [{ scale }],
					},
				]}
				resizeMode="repeat"
			/>
		</Animated.View>
	);
};

export default GlitchDots;
