import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Lock = () => {
	return (
		<>
			<Stack.Screen
				name="(authenticated)/(modals)/lock"
				options={{ headerShown: false, animation: 'none' }}
			/>
			<View>
				<Text>Lock screen</Text>
			</View>
		</>
	);
};

export default Lock;
