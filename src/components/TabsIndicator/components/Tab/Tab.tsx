import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface TabProps {
	item: { name: string };
	onItemPress: () => void;
}

const Tab = forwardRef(({ item, onItemPress }: TabProps, ref) => {
	return (
		<TouchableOpacity onPress={onItemPress} style={styles.container}>
			<View ref={ref as React.RefObject<View>}>
				<Text style={styles.text}>{item.name}</Text>
			</View>
		</TouchableOpacity>
	);
});

export default Tab;
