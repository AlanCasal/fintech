import { View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';

const ActionButtons = () => {
	return (
		<>
			<View style={styles.circle}>
				<Ionicons name="stats-chart" size={20} color={Colors.darkBackground} />
			</View>
			<View style={styles.circle}>
				<Ionicons name="card" size={20} color={Colors.darkBackground} />
			</View>
		</>
	);
};

export default ActionButtons;
