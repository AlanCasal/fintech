import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BlurView } from 'expo-blur';
import Actions from './Actions';
import Avatar from './Avatar';
import Name from './Name';

const Account = () => (
	<BlurView intensity={80} style={styles.blurView} tint="dark">
		<View style={styles.headerContainer}>
			<Avatar />
			<Name />
		</View>

		<Actions />
	</BlurView>
);

export default Account;
