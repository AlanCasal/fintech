import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useUser } from '@clerk/clerk-expo';
import * as Haptics from 'expo-haptics';
import Biometrics from './components/Biometrics';
import Bubbles from './components/Bubbles';
import Numpad from './components/Numpad';
import CyberDots from '@/components/CyberDots';
import { Stack } from 'expo-router';

const Lock = () => {
	const { user } = useUser();

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
		<SafeAreaView style={styles.container}>
			<Stack.Screen
				name="(authenticated)/(modals)/lock"
				options={{
					headerShown: false,
					animation: 'fade',
				}}
			/>

			<CyberDots position="top" height="25%" />
			<CyberDots position="bottom" height="25%" />

			<Text style={styles.greeting}>
				Welcome back, <Text style={styles.name}>{user?.firstName}</Text>
			</Text>

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
	);
};

export default Lock;
