import { Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface CyberDotsProps {
	position: 'top' | 'bottom';
	height: `${number}%`;
}

const CyberDots = ({ position, height }: CyberDotsProps) => {
	return (
		<Image
			source={require('@/assets/images/cyber-dots-primary.png')}
			style={[styles.cyberDots, { height, [position]: 0 }]}
			resizeMode="repeat"
		/>
	);
};

export default CyberDots;
