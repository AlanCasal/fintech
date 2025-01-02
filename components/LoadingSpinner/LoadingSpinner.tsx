import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

const LoadingSpinner = ({ size: height = 90 }: { size?: number }) => {
	return (
		<View style={{ height, aspectRatio: 1 }}>
			<LottieView
				style={{ flex: 1 }}
				source={require('./loadingSpinner.json')}
				autoPlay
				loop
			/>
		</View>
	);
};

export default LoadingSpinner;
