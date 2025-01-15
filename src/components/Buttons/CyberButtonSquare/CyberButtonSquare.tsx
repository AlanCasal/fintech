import { TouchableOpacity, View } from 'react-native';
import React, { Suspense, lazy } from 'react';
import { styles } from './styles';
import Colors from '@/src/constants/Colors';

const CyberButton = lazy(
	() => import('@/assets/images/cyber-button-square.svg')
);

const BUTTON_COLOR = Colors.blackTransparent05;
const BUTTON_STROKE_COLOR = Colors.primaryMuted;

interface CyberButtonSquareProps {
	icon?: React.ReactNode;
	fillColor?: string;
	strokeColor?: string;
	width?: number;
	steepPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	handlePress?: () => void;
	disabled?: boolean;
}

const CyberButtonSquare = ({
	icon,
	fillColor = BUTTON_COLOR,
	strokeColor = BUTTON_STROKE_COLOR,
	width = 40,
	steepPosition = 'bottom-right',
	handlePress,
	disabled = false,
}: CyberButtonSquareProps) => {
	const steepPositionStyle = {
		'top-left': () => ({ transform: [{ rotate: '180deg' }] }),
		'top-right': () => ({ transform: [{ rotate: '180deg' }, { scaleX: -1 }] }),
		'bottom-left': () => ({ transform: [{ rotate: '0deg' }, { scaleX: -1 }] }),
		'bottom-right': () => ({ transform: [{ rotate: '0deg' }] }),
	}[steepPosition]();

	return (
		<View style={{ width, height: width }}>
			<TouchableOpacity onPress={handlePress} disabled={disabled}>
				<View style={steepPositionStyle}>
					<Suspense fallback={null}>
						<CyberButton
							width={width}
							height={width}
							fill={fillColor}
							stroke={strokeColor}
						/>
					</Suspense>
				</View>
				{icon && <View style={styles.iconContainer}>{icon}</View>}
			</TouchableOpacity>
		</View>
	);
};

export default CyberButtonSquare;
