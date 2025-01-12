import { View } from 'react-native';
import React from 'react';
import ErrorBackground from '@/components/ErrorBackground';
import { Stack } from 'expo-router';

const Invest = () => {
	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<ErrorBackground title="Screen not available" subtitle="Invest" />
		</View>
	);
};

export default Invest;
