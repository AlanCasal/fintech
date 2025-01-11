import { Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface CyberDotsProps {
	position: 'top' | 'bottom';
	height: `${number}%`;
	scale?: number;
}

const CyberDots = ({ position, height, scale = 1.5 }: CyberDotsProps) => {
	const extraStyles = {
		height,
		[position]: 0,
		transform: [{ scale }, { rotate: position === 'top' ? '180deg' : '0deg' }],
	};
	return (
		<Image
			source={require('@/assets/images/cyber-dots-primary.png')}
			style={[styles.cyberDots, extraStyles]}
			resizeMode="repeat"
		/>
	);
};

export default CyberDots;
