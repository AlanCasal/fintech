import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LoadingSpinner from '../LoadingSpinner';
import Logo from '../Logo';
import CyberDots from '../CyberDots';

interface LoadingBackgroundProps {
	additionalPaddingBottom?: number;
}

const LoadingBackground = ({
	additionalPaddingBottom = 0,
}: LoadingBackgroundProps) => {
	const { bottom } = useSafeAreaInsets();

	return (
		<>
			<CyberDots position="top" height="30%" />
			<CyberDots position="bottom" height="30%" />
			<View
				style={[
					styles.container,
					{ padding: bottom + additionalPaddingBottom },
				]}
			>
				<View />
				<LoadingSpinner />
				<Logo />
			</View>
		</>
	);
};

export default LoadingBackground;
