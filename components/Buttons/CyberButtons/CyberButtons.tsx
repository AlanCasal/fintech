import { View, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import CyberButton from './components/CyberButton';

type CyberButtonsProps = {
	leftButtonAction: VoidFunction;
	rightButtonAction: VoidFunction;
	containerStyle?: StyleProp<ViewStyle>;
	leftButtonTextColor?: string;
	leftButtonText?: string;
	rightButtonTextColor?: string;
	rightButtonText?: string;
	withTextGlitch?: boolean;
};

const CyberButtons = ({
	containerStyle,
	leftButtonAction,
	leftButtonText = '',
	leftButtonTextColor = Colors.primary,
	rightButtonAction,
	rightButtonText = '',
	rightButtonTextColor = Colors.darkBackground,
	withTextGlitch = false,
}: CyberButtonsProps) => {
	return (
		<View style={[styles.container, containerStyle]}>
			<CyberButton
				handleOnPress={leftButtonAction}
				buttonText={leftButtonText}
				buttonTextColor={leftButtonTextColor}
				withTextGlitch={withTextGlitch}
				steepPosition={'top-left'}
				buttonBackgroundColor={Colors.darkBackground}
			/>

			<CyberButton
				handleOnPress={rightButtonAction}
				buttonText={rightButtonText}
				buttonTextColor={rightButtonTextColor}
				withTextGlitch={withTextGlitch}
				steepPosition={'bottom-right'}
			/>
		</View>
	);
};

export default CyberButtons;
