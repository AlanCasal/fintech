import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import BackButton from '@/src/components/Buttons/BackButton';
import Colors from '@/src/constants/Colors';

const StackScreens = () => {
	return (
		<Stack>
			<StatusBar style="light" />
			<Stack.Screen
				name="help"
				options={{
					title: 'Help',
					presentation: 'modal',
					animation: 'slide_from_bottom',
					headerTransparent: true,
					headerRight: () => (
						<BackButton icon="close-box-outline" color={Colors.lightGray} />
					),
				}}
			/>
			<Stack.Screen
				name="(authenticated)/(tabs)"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="(authenticated)/(modals)/account"
				options={{
					presentation: 'transparentModal',
					animation: 'slide_from_bottom',
					title: '',
					headerTransparent: true,
					headerRight: () => (
						<BackButton icon="close-box-outline" color={Colors.lightGray} />
					),
				}}
			/>
			<Stack.Screen
				name="(authenticated)/(modals)/lock"
				options={{
					headerShown: false,
					animation: 'fade',
				}}
			/>
			<Stack.Screen
				name="(authenticated)/crypto/[id]"
				options={{
					headerStyle: { backgroundColor: Colors.darkBackground },
					headerShadowVisible: false,
					headerLeft: () => <BackButton />,
				}}
			/>
		</Stack>
	);
};

export default StackScreens;
