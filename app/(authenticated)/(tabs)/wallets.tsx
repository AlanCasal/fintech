import { View } from 'react-native';
import React from 'react';
import ErrorBackground from '@/components/ErrorBackground';
import { Stack } from 'expo-router';

const Wallets = () => {
	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<ErrorBackground title="Screen not available" subtitle="Wallets" />
		</View>
	);
};

export default Wallets;
