import { View } from 'react-native';
import React from 'react';
import ErrorBackground from '@/src/components/ErrorBackground';
import { Stack } from 'expo-router';

const Markets = () => {
	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<ErrorBackground title="Screen not available" subtitle="Markets" />
		</View>
	);
};

export default Markets;
