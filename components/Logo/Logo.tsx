import React from 'react';
import {
	Image,
	ImageResizeMode,
	StyleProp,
	View,
	ViewStyle,
} from 'react-native';
import BoxCorners from '../BoxCorners';
import { styles } from './styles';

interface LogoProps {
	width?: number;
	height?: number;
	resizeMode?: ImageResizeMode;
	withBoxCorners?: boolean;
	containerStyle?: StyleProp<ViewStyle>;
}

const Logo = ({
	width = 50,
	height = 50,
	resizeMode = 'contain',
	withBoxCorners = true,
	containerStyle,
}: LogoProps) => (
	<View style={[styles.logoContainer, containerStyle]}>
		<Image
			source={require('@/assets/images/dragon-head-primary.png')}
			style={{ width, height }}
			resizeMode={resizeMode}
		/>
		{withBoxCorners && (
			<BoxCorners cornerBottomRight cornerTopLeft width={10} height={10} />
		)}
	</View>
);

export default Logo;
