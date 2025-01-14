import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CyberButtonSquare from '@/components/Buttons/CyberButtonSquare';
import Colors from '@/constants/Colors';
import { styles } from './styles';

const ActionButtons = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.notifications}>16</Text>
			<CyberButtonSquare
				steepPosition="top-left"
				icon={
					<MaterialCommunityIcons
						name="message"
						size={16}
						color={Colors.primaryMuted}
					/>
				}
			/>
			<CyberButtonSquare
				steepPosition="bottom-right"
				icon={
					<MaterialCommunityIcons
						name="headset"
						size={16}
						color={Colors.primaryMuted}
					/>
				}
			/>
		</View>
	);
};

export default ActionButtons;
