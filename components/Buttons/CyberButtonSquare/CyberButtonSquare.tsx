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
	width?: number;
	rotate?: number;
	handlePress?: () => void;
	disabled?: boolean;
}

const CyberButtonSquare = ({
	icon,
	fillColor = BUTTON_COLOR,
	strokeColor = BUTTON_STROKE_COLOR,
	width = 40,
	rotate = 0,
	handlePress,
	disabled = false,
}: CyberButtonSquareProps) => {
	return (
		<View style={{ width, height: width }}>
			<TouchableOpacity onPress={handlePress} disabled={disabled}>
				<Suspense fallback={null}>
					<View style={{ transform: [{ rotate: `${rotate}deg` }] }}>
						<CyberButton
							width={width}
							height={width}
							fill={fillColor}
							stroke={strokeColor}
						/>
					</View>
				</Suspense>
				{icon && <View style={styles.iconContainer}>{icon}</View>}
			</TouchableOpacity>
		</View>
	);
};

export default CyberButtonSquare;
