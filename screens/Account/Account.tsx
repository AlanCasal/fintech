import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BlurView } from 'expo-blur';
import Actions from './Actions';
import Avatar from './Avatar';
import Name from './Name';

const Account = () => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
		<BlurView intensity={80} style={styles.blurView} tint="dark">
			<View style={styles.headerContainer}>
				<Avatar />
				<Name />
			</View>

			<Actions />
		</BlurView>
	</TouchableWithoutFeedback>
);

export default Account;
