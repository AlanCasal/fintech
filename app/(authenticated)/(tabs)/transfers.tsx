import { View } from 'react-native';
import React from 'react';
import ErrorBackground from '@/components/ErrorBackground';
import { Stack } from 'expo-router';

const Transfers = () => {
	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<ErrorBackground title="Transfers" subtitle="Screen not available yet" />
		</View>
	);
};

export default Transfers;
