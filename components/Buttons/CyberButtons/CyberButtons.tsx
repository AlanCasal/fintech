import {
	View,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
	Text,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import CyberButtonLeft from '@/assets/images/cyber-button-top-left.svg';
import CyberButtonRight from '@/assets/images/cyber-button-bot-right.svg';
import GlitchText from '@/components/Animations/GlitchText';

type CyberButtonsProps = {
	containerStyles?: StyleProp<ViewStyle>;
	actionLeft?: () => void;
	actionRight?: () => void;
};

const CyberButtons = ({
	containerStyles,
	actionLeft,
	actionRight,
}: CyberButtonsProps) => {
	return (
		<View style={[styles.container, containerStyles]}>
			<TouchableOpacity onPress={actionLeft} style={styles.button}>
				<CyberButtonLeft
					width={170}
					fill={Colors.dark}
					stroke={Colors.primary}
				/>
				<GlitchText
					text="Sign In"
					extraStyles={[styles.text, styles.leftButtonText]}
				/>
			</TouchableOpacity>

			<TouchableOpacity onPress={actionRight} style={styles.button}>
				<CyberButtonRight
					width={170}
					stroke={Colors.primary}
					fill={Colors.primary}
				/>
				<GlitchText
					text="Sign Up"
					extraStyles={[styles.text, styles.rightButtonText]}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default CyberButtons;
