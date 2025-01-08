import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LoadingSpinner from '../LoadingSpinner';
import Logo from '../Logo';
import CyberDots from '../CyberDots';

const LoadingBackground = () => {
	const { bottom } = useSafeAreaInsets();

	return (
		<View style={[styles.container, { padding: bottom + 10 }]}>
			<CyberDots position="top" height="30%" />
			<View />
			<LoadingSpinner />
			<Logo />
			<CyberDots position="bottom" height="30%" />
		</View>
	);
};

export default LoadingBackground;
