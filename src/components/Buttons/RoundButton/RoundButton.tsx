import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';

type Props = {
	label: string;
	icon: typeof Ionicons.defaultProps;
	onPress?: () => void;
};

const RoundButton = ({ label, icon, onPress }: Props) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.circle}>
				<Ionicons name={icon} size={30} color={Colors.gray} />
			</View>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
};

export default RoundButton;
