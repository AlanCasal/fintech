import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HeaderAvatar from './components/HeaderAvatar';
import Searchbar from './components/Searchbar';
import ActionButtons from './components/ActionButtons';

const CustomHeader = () => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={[styles.content, { paddingTop: top + 10 }]}>
			<HeaderAvatar />

			<Searchbar />

			<ActionButtons />
		</View>
	);
};

export default CustomHeader;
