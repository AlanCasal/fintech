import React, { useEffect, useRef, useState } from 'react';
import { StyleProp, TextStyle, Animated } from 'react-native';
import { styles as baseStyles } from './styles';

type GlitchTextProps = {
	text: string;
	styles?: StyleProp<TextStyle>;
	withShadow?: boolean;
	textShadowColor?: string;
};

const GlitchText = ({
	text,
	styles,
	withShadow = false,
	textShadowColor,
}: GlitchTextProps) => {
	const [glitchedText, setGlitchedText] = useState(text);
	const glitchCharacters = '000011111?!<>-_\\/[]{}—=+*^#___';
	const mountedRef = useRef(true);
	const opacityAnim = useRef(new Animated.Value(1)).current;

	const finalStyles = [
		withShadow && {
			...baseStyles.shadow,
			...(textShadowColor && { textShadowColor }),
		},
		styles,
	];

	useEffect(() => {
		const startGlitch = () => {
			if (!mountedRef.current) return;

			const interval = setInterval(() => {
				if (!mountedRef.current) return;

				const newText = text
					.split('')
					.map(char => {
						if (Math.random() < 0.1) {
							return glitchCharacters[
								Math.floor(Math.random() * glitchCharacters.length)
							];
						}
						return char;
					})
					.join('');

				setGlitchedText(newText);

				// Add subtle opacity animation
				Animated.sequence([
					Animated.timing(opacityAnim, {
						toValue: 0.8,
						duration: 50,
						useNativeDriver: true,
					}),
					Animated.timing(opacityAnim, {
						toValue: 1,
						duration: 50,
						useNativeDriver: true,
					}),
				]).start();
			}, 100);

			setTimeout(() => {
				if (!mountedRef.current) return;
				clearInterval(interval);
				setGlitchedText(text);

				setTimeout(startGlitch, Math.random() * 2000);
			}, 200);
		};

		const initialDelay = setTimeout(() => {
			startGlitch();
		}, 500);

		return () => {
			mountedRef.current = false;
			clearTimeout(initialDelay);
		};
	}, [text, opacityAnim]);

	return (
		<Animated.Text style={[finalStyles, { opacity: opacityAnim }]}>
			{glitchedText}
		</Animated.Text>
	);
};

export default GlitchText;
