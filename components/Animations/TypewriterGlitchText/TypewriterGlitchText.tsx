import React, { useEffect, useRef, useState } from 'react';
import { StyleProp, TextStyle, Animated } from 'react-native';
import { styles } from './styles';

type TypewriterGlitchProps = {
	text: string;
	extraStyle?: StyleProp<TextStyle>;
	onComplete?: () => void;
	withGlow?: boolean;
};

const TypewriterGlitchText = ({
	text,
	extraStyle,
	onComplete,
	withGlow = true,
}: TypewriterGlitchProps) => {
	const [displayText, setDisplayText] = useState('');
	const [isTypingComplete, setIsTypingComplete] = useState(false);
	const glitchCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	const cursorOpacity = useRef(new Animated.Value(1)).current;
	const mountedRef = useRef(true);
	const cursorChar = '_';

	// Typing and glitch animations
	useEffect(() => {
		let currentIndex = 0;
		let glitchInterval: NodeJS.Timeout;

		const typeNextChar = () => {
			if (!mountedRef.current) return;

			if (currentIndex < text.length) {
				// Clear previous glitch interval
				clearInterval(glitchInterval);

				// Glitch animation
				glitchInterval = setInterval(() => {
					if (!mountedRef.current) return;
					setDisplayText(
						text.slice(0, currentIndex + 1) +
							glitchCharacters[
								Math.floor(Math.random() * glitchCharacters.length)
							] +
							cursorChar
					);
				}, 15); // glitch interval

				currentIndex += 1;
				setTimeout(typeNextChar, 50); // typing interval
			} else {
				clearInterval(glitchInterval);
				setDisplayText(text + cursorChar);
				setIsTypingComplete(true);
				onComplete?.();
			}
		};

		setTimeout(typeNextChar, 500);

		return () => {
			mountedRef.current = false;
			clearInterval(glitchInterval);
		};
	}, [text, onComplete]);

	// Cursor blink animation after typing is complete
	useEffect(() => {
		if (!isTypingComplete) return;

		const blinkCursor = () => {
			Animated.sequence([
				Animated.timing(cursorOpacity, {
					toValue: 0,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(cursorOpacity, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				}),
			]).start(() => {
				if (mountedRef.current) {
					blinkCursor();
				}
			});
		};

		blinkCursor();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTypingComplete]);

	const combinedStyle = [extraStyle, withGlow ? styles.textGlow : null];

	return (
		<Animated.Text style={combinedStyle}>
			{displayText.slice(0, -1)}
			<Animated.Text style={{ opacity: cursorOpacity }}>
				{cursorChar}
			</Animated.Text>
		</Animated.Text>
	);
};

export default TypewriterGlitchText;
