import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HeaderAvatar from './components/HeaderAvatar';
import Searchbar from './components/Searchbar';
import ActionButtons from './components/ActionButtons';

const CustomHeader = () => {
	const { top } = useSafeAreaInsets();

	return (
		<BlurView intensity={80} tint="extraLight" style={{ paddingTop: top }}>
			<View style={styles.content}>
				<HeaderAvatar />

				<Searchbar />

				<ActionButtons />
			</View>
		</BlurView>
	);
};

export default CustomHeader;
