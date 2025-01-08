import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';

interface BoxCornersProps {
	cornerTopLeft?: boolean;
	cornerBottomLeft?: boolean;
	cornerTopRight?: boolean;
	cornerBottomRight?: boolean;
	width?: number;
	height?: number;
	borderColor?: string;
}

const BoxCorners = ({
	cornerTopLeft,
	cornerBottomLeft,
	cornerTopRight,
	cornerBottomRight,
	width = 20,
	height = 20,
	borderColor = Colors.primary,
}: BoxCornersProps) => {
	const cornerBaseStyle = [styles.cornerBase, { width, height, borderColor }];

	return (
		<>
			{cornerTopLeft && (
				<View style={[cornerBaseStyle, styles.cornerTopLeft]} />
			)}
			{cornerBottomLeft && (
				<View style={[cornerBaseStyle, styles.cornerBottomLeft]} />
			)}

			{cornerTopRight && (
				<View style={[cornerBaseStyle, styles.cornerTopRight]} />
			)}
			{cornerBottomRight && (
				<View style={[cornerBaseStyle, styles.cornerBottomRight]} />
			)}
		</>
	);
};

export default BoxCorners;
