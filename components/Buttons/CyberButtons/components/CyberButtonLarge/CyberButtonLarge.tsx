import React, { Suspense, lazy } from 'react';
import {
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
} from 'react-native';
import Colors from '@/constants/Colors';
import GlitchText from '@/components/Animations/GlitchText';
import { styles } from './styles';

type CyberButtonProps = {
	handleOnPress: VoidFunction;
	buttonBackgroundColor?: string;
	buttonBorderColor?: string;
	buttonText?: string;
	buttonTextStyle?: StyleProp<TextStyle>;
	buttonTextColor?: string;
	withTextGlitch?: boolean;
	steepPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	disabled?: boolean;
	disabledButtonBackgroundColor?: string;
	disabledButtonBorderColor?: string;
	disabledButtonTextColor?: string;
	icon?: React.ReactNode;
};

const CyberButtonLarge = ({
	handleOnPress,
	buttonBackgroundColor = Colors.primary,
	buttonBorderColor = Colors.primary,
	buttonTextColor = Colors.primary,
	buttonText = '',
	buttonTextStyle,
	withTextGlitch = false,
	steepPosition = 'bottom-right',
	disabled = false,
	disabledButtonBackgroundColor = Colors.primaryMuted,
	disabledButtonBorderColor = Colors.primaryMuted,
	disabledButtonTextColor = Colors.darkBackground,
	icon,
}: CyberButtonProps) => {
	const ButtonShape = lazy(
		() => import('@/assets/images/cyber-button-large.svg')
	);

	const backgroundColor = disabled
		? disabledButtonBackgroundColor
		: buttonBackgroundColor;
	const borderColor = disabled ? disabledButtonBorderColor : buttonBorderColor;
	const textColor = disabled ? disabledButtonTextColor : buttonTextColor;

	const steepPositionStyle = {
		'top-left': () => ({ transform: [{ rotate: '180deg' }] }),
		'top-right': () => ({ transform: [{ rotate: '180deg' }, { scaleX: -1 }] }),
		'bottom-left': () => ({ transform: [{ rotate: '0deg' }, { scaleX: -1 }] }),
		'bottom-right': () => ({ transform: [{ rotate: '0deg' }] }),
	}[steepPosition]();

	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={handleOnPress}
			style={styles.button}
		>
			<View style={[styles.svgWrapper, steepPositionStyle]}>
				<Suspense fallback={null}>
					<ButtonShape
						width={'100%'}
						fill={backgroundColor}
						stroke={borderColor}
					/>
				</Suspense>
			</View>
			<View style={styles.contentContainer}>
				{icon && <View>{icon}</View>}
				{withTextGlitch ? (
					<GlitchText
						text={buttonText}
						extraStyles={[styles.text, { color: textColor }]}
					/>
				) : (
					<Text style={[styles.text, { color: textColor }, buttonTextStyle]}>
						{buttonText}
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default CyberButtonLarge;
