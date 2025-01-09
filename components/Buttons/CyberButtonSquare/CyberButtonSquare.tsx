import { TouchableOpacity, View } from 'react-native';
import React, { Suspense, lazy } from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';

const CyberButton = lazy(
	() => import('@/assets/images/cyber-button-square-bot-right.svg')
);

const BUTTON_COLOR = Colors.blackTransparent05;
const BUTTON_STROKE_COLOR = Colors.primaryMuted;

interface CyberButtonSquareProps {
	icon?: React.ReactNode;
	fillColor?: string;
	strokeColor?: string;
	handlePress?: () => void;
}

const CyberButtonSquare = ({
	icon,
	fillColor = BUTTON_COLOR,
	strokeColor = BUTTON_STROKE_COLOR,
	handlePress,
}: CyberButtonSquareProps) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={handlePress}>
				<Suspense fallback={null}>
					<CyberButton
						width={40}
						height={40}
						fill={fillColor}
						stroke={strokeColor}
					/>
				</Suspense>
				{icon && <View style={styles.iconContainer}>{icon}</View>}
			</TouchableOpacity>
		</View>
	);
};

export default CyberButtonSquare;
