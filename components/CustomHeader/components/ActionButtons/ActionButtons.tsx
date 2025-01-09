import { View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import Colors from '@/constants/Colors';

const ActionButtons = () => {
	return (
		<>
			<View style={styles.circle}>
				<Ionicons name="stats-chart" size={20} color={Colors.lightGray} />
			</View>
			<View style={styles.circle}>
				<Ionicons name="card" size={20} color={Colors.lightGray} />
			</View>
		</>
	);
};

export default ActionButtons;
