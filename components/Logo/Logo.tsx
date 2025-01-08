import React from 'react';
import { Image, ImageResizeMode } from 'react-native';

interface LogoProps {
	width?: number;
	height?: number;
	resizeMode?: ImageResizeMode;
}

const Logo = ({
	width = 50,
	height = 50,
	resizeMode = 'contain',
}: LogoProps) => (
	<Image
		source={require('@/assets/images/dragon-head-primary.png')}
		style={{ width, height }}
		resizeMode={resizeMode}
	/>
);

export default Logo;
