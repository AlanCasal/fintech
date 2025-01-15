import { Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface CyberDotsProps {
	position: 'top' | 'bottom';
	height: `${number}%`;
}

const CyberDots = ({ position, height }: CyberDotsProps) => {
	const extraStyles = {
		height,
		[position]: 0,
		transform: [{ rotate: position === 'top' ? '180deg' : '0deg' }],
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
