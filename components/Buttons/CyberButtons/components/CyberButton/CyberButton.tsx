import React, { Suspense, lazy } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from '@/constants/Colors';
import GlitchText from '@/components/Animations/GlitchText';
import { styles } from '../../styles';

const ButtonShape = lazy(() => import('@/assets/images/cyber-button.svg'));

type CyberButtonProps = {
	handleOnPress: VoidFunction;
	buttonBackgroundColor?: string;
	buttonBorderColor?: string;
	buttonText?: string;
	buttonTextColor?: string;
	withTextGlitch?: boolean;
	steepPosition?: 'top-left' | 'bottom-right' | 'top-right' | 'bottom-left';
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
	const steepPositionStyle = {
		'top-left': () => ({ transform: [{ rotate: '180deg' }] }),
		'top-right': () => ({ transform: [{ rotate: '180deg' }, { scaleX: -1 }] }),
		'bottom-left': () => ({ transform: [{ rotate: '0deg' }, { scaleX: -1 }] }),
		'bottom-right': () => ({ transform: [{ rotate: '0deg' }] }),
	}[steepPosition]();

	return (
		<TouchableOpacity onPress={handleOnPress} style={styles.button}>
			<View style={steepPositionStyle}>
				<Suspense fallback={null}>
					<ButtonShape
						width={170}
						fill={buttonBackgroundColor}
						stroke={buttonBorderColor}
					/>
				</Suspense>
			</View>
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
