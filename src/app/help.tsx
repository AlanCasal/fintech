import React from 'react';
import { View } from 'react-native';
import ErrorBackground from '@/src/components/ErrorBackground';

const Help = () => (
	<View style={{ flex: 1 }}>
		<ErrorBackground title="Screen not available" subtitle="Help" />
	</View>
);

export default Help;
