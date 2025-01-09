import React from 'react';
import { Stack } from 'expo-router';
import CustomTabs from './Tabs';

const AuthLayout = () => {
	return (
		<>
			<Stack.Screen
				name="(authenticated)/(tabs)"
				options={{ headerShown: false }}
			/>
			<CustomTabs />
		</>
	);
};

export default AuthLayout;
