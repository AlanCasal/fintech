import { Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BlurView } from 'expo-blur';

const Account = () => {
	return (
		<>
			<BlurView intensity={80} style={styles.blurView}>
				<Text style={styles.title}>Account</Text>
			</BlurView>
		</>
	);
};

export default Account;
