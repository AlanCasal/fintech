import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { styles } from './styles';
import { useUser } from '@clerk/clerk-expo';
import Colors from '@/constants/Colors';
import * as Haptics from 'expo-haptics';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming,
} from 'react-native-reanimated';

const FAKE_CODE = [1, 2, 3, 4, 5, 6];
const OFFSET = 20;
const TIME = 100;

const Lock = () => {
	const { user } = useUser();
	const router = useRouter();

	const offset = useSharedValue(0);
	const style = useAnimatedStyle(() => ({
		transform: [{ translateX: offset.value }],
	}));

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

	const handleBiometricPress = async () => {
		try {
			const { success } = await LocalAuthentication.authenticateAsync({
				promptMessage: 'Authenticate to continue',
				fallbackLabel: 'Use passcode',
			});

			if (success) {
				router.push('/(authenticated)/(tabs)/home');
			} else {
				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
			}
		} catch (error) {
			console.error('Authentication error:', error);
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		}
	};

	useEffect(() => {
		if (code.length === 6) {
			if (code.join('') === '111111') {
				router.push('/(authenticated)/(tabs)/home');
			} else {
				offset.value = withSequence(
					withTiming(-OFFSET, { duration: TIME / 2 }),
					withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
					withTiming(0, { duration: TIME / 2 })
				);
				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code]);

	return (
		<>
			<Stack.Screen
				name="(authenticated)/(modals)/lock"
				options={{ headerShown: false, animation: 'none' }}
			/>
			<SafeAreaView style={styles.container}>
				<Text style={styles.greeting}>Welcome back, {firstName}</Text>

				<TouchableOpacity
					onPress={handleBiometricPress}
					style={{ alignSelf: 'center' }}
				>
					<MaterialCommunityIcons
						name="face-recognition"
						size={32}
						color="black"
					/>
				</TouchableOpacity>

				<Animated.View style={[styles.codeView, style]}>
					{FAKE_CODE.map((_, index) => (
						<View
							key={index}
							style={[
								styles.codeEmpty,
								{
									backgroundColor: code[index]
										? Colors.primary
										: Colors.lightGray,
								},
							]}
						/>
					))}
				</Animated.View>

				<View style={styles.numbersView}>
					<View style={{ justifyContent: 'space-between' }}>
						{['1', '4', '7'].map(number => (
							<TouchableOpacity
								onPress={() => handleNumberPress(number)}
								key={number}
								style={styles.buttonNumber}
							>
								<Text style={styles.number}>{number}</Text>
							</TouchableOpacity>
						))}
					</View>
					<View style={{ justifyContent: 'space-between' }}>
						{['2', '5', '8', '0'].map(number => (
							<TouchableOpacity
								onPress={() => handleNumberPress(number)}
								key={number}
								style={styles.buttonNumber}
							>
								<Text style={styles.number}>{number}</Text>
							</TouchableOpacity>
						))}
					</View>
					<View>
						{['3', '6', '9'].map(number => (
							<TouchableOpacity
								onPress={() => handleNumberPress(number)}
								key={number}
								style={styles.buttonNumber}
							>
								<Text style={styles.number}>{number}</Text>
							</TouchableOpacity>
						))}
						<TouchableOpacity
							onPress={handleDeletePress}
							disabled={code.length === 0}
							style={styles.buttonNumber}
						>
							<MaterialCommunityIcons
								name={code.length === 0 ? 'backspace-outline' : 'backspace'}
								size={24}
								color={code.length === 0 ? Colors.gray : Colors.dark}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<TouchableOpacity style={styles.forgotPassword}>
					<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
	);
};

export default Lock;
