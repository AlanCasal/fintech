import {
	View,
	Text,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
	TextStyle,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface Action {
	icon: keyof typeof Ionicons.glyphMap;
	iconColor: string;
	label: string;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const ACTIONS: Action[] = [
	{
		label: 'Buy',
		icon: 'add',
		iconColor: Colors.white,
	},
	{
		label: 'Receive',
		icon: 'arrow-back',
		iconColor: Colors.primary,
		buttonStyle: { backgroundColor: Colors.primaryMuted },
		textStyle: { color: Colors.primary },
	},
];

const Actions = () => {
	return (
		<View style={styles.buttonsWrapper}>
			{ACTIONS.map(action => (
				<TouchableOpacity
					key={action.label}
					style={[
						defaultStyles.pillButtonSmall,
						styles.pillButton,
						action.buttonStyle,
					]}
				>
					<Ionicons name={action.icon} size={24} color={action.iconColor} />
					<Text
						style={[
							defaultStyles.buttonText,
							styles.buttonText,
							action.textStyle,
						]}
					>
						{action.label}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Actions;
