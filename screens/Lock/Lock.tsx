import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { styles } from './styles';
import { useUser } from '@clerk/clerk-expo';
import * as Haptics from 'expo-haptics';
import Biometrics from './components/Biometrics';
import Bubbles from './components/Bubbles';
import Numpad from './components/Numpad';

const Lock = () => {
	const { user } = useUser();

	const [firstName, setFirstName] = useState(user?.firstName);
	const [code, setCode] = useState<string[]>([]);

	const handleNumberPress = (number: string) => {
		if (code.length === 6) return;

		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		setCode(prev => [...prev, number]);
	};

	const handleDeletePress = () => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		setCode(prev => prev.slice(0, -1));
	};

	return (
		<>
			<Stack.Screen
				name="(authenticated)/(modals)/lock"
				options={{ headerShown: false, animation: 'none' }}
			/>
			<SafeAreaView style={styles.container}>
				<Text style={styles.greeting}>Welcome back, {firstName}</Text>

				<Biometrics />

				<Bubbles code={code} />

				<Numpad
					code={code}
					handleNumberPress={handleNumberPress}
					handleDeletePress={handleDeletePress}
				/>

				<TouchableOpacity style={styles.forgotPassword}>
					<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
	);
};

export default Lock;
