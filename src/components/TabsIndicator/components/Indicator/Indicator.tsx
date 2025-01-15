import React from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { styles } from './styles';

const { width } = Dimensions.get('screen');

interface IndicatorProps {
	measures: { x: number; y: number; width: number; height: number }[];
	scrollX: Animated.Value;
	data: {
		name: string;
		ref: React.RefObject<View>;
		index: number;
	}[];
}

const Indicator = ({ measures, scrollX, data }: IndicatorProps) => {
	const inputRange = data.map((_, i) => i * width);
	const indicatorWidth = scrollX.interpolate({
		inputRange,
		outputRange: measures.map(measure => measure.width),
	});

	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: measures.map(measure => measure.x),
	});

	return (
		<Animated.View
			style={[
				styles.indicator,
				{ width: indicatorWidth, transform: [{ translateX }] },
			]}
		/>
	);
};

export default Indicator;
