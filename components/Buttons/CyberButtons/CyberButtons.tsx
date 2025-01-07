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
		<View style={[styles.buttons, containerStyles]}>
			<TouchableOpacity onPress={actionLeft} style={styles.leftButton}>
				<CyberButtonLeft
					width={170}
					fill={Colors.dark}
					stroke={Colors.primary}
				/>
				<Text style={styles.leftButtonText}>Sign In</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={actionRight} style={styles.rightButton}>
				<CyberButtonRight
					width={170}
					stroke={Colors.primary}
					fill={Colors.primary}
				/>
				<Text style={styles.rightButtonText}>Sign Up</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CyberButtons;
