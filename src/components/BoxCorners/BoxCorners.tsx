import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Colors from '@/src/constants/Colors';

interface BoxCornersProps {
	cornerTopLeft?: boolean;
	cornerBottomLeft?: boolean;
	cornerTopRight?: boolean;
	cornerBottomRight?: boolean;
	width?: number | `${number}%`;
	height?: number | `${number}%`;
	borderColor?: string;
	borderWidth?: number;
}

const BoxCorners = ({
	cornerTopLeft,
	cornerBottomLeft,
	cornerTopRight,
	cornerBottomRight,
	width = 20,
	height = 20,
	borderColor = Colors.primary,
	borderWidth = 2,
}: BoxCornersProps) => {
	const cornerBaseStyle = [styles.cornerBase, { width, height, borderColor }];

	return (
		<>
			{cornerTopLeft && (
				<View
					style={[
						cornerBaseStyle,
						styles.cornerTopLeft,
						{ borderTopWidth: borderWidth, borderLeftWidth: borderWidth },
					]}
				/>
			)}
			{cornerBottomLeft && (
				<View
					style={[
						cornerBaseStyle,
						styles.cornerBottomLeft,
						{ borderBottomWidth: borderWidth, borderLeftWidth: borderWidth },
					]}
				/>
			)}

			{cornerTopRight && (
				<View
					style={[
						cornerBaseStyle,
						styles.cornerTopRight,
						{ borderTopWidth: borderWidth, borderRightWidth: borderWidth },
					]}
				/>
			)}
			{cornerBottomRight && (
				<View
					style={[
						cornerBaseStyle,
						styles.cornerBottomRight,
						{ borderBottomWidth: borderWidth, borderRightWidth: borderWidth },
					]}
				/>
			)}
		</>
	);
};

export default BoxCorners;
