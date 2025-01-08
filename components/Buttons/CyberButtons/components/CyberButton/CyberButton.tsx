import React, { Suspense, useMemo, lazy } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import GlitchText from '@/components/Animations/GlitchText';
import { styles } from '../../styles';

type CyberButtonProps = {
	handleOnPress: VoidFunction;
	buttonBackgroundColor?: string;
	buttonBorderColor?: string;
	buttonText?: string;
	buttonTextColor?: string;
	withTextGlitch?: boolean;
	steepPosition?: 'top-left' | 'bottom-right';
};

const CyberButton = ({
	handleOnPress,
	buttonBackgroundColor = Colors.primary,
	buttonBorderColor = Colors.primary,
	buttonTextColor = Colors.primary,
	buttonText = '',
	withTextGlitch = false,
	steepPosition = 'top-left',
}: CyberButtonProps) => {
	const ButtonShape = useMemo(
		() =>
			lazy(() =>
				steepPosition === 'top-left'
					? import('@/assets/images/cyber-button-top-left.svg')
					: import('@/assets/images/cyber-button-bot-right.svg')
			),
		[steepPosition]
	);

	return (
		<TouchableOpacity onPress={handleOnPress} style={styles.button}>
			<Suspense fallback={null}>
				<ButtonShape
					width={170}
					fill={buttonBackgroundColor}
					stroke={buttonBorderColor}
				/>
			</Suspense>
			{withTextGlitch ? (
				<GlitchText
					text={buttonText}
					extraStyles={[styles.text, { color: buttonTextColor }]}
				/>
			) : (
				<Text style={[styles.text, { color: buttonTextColor }]}>
					{buttonText}
				</Text>
			)}
		</TouchableOpacity>
	);
};

export default CyberButton;
