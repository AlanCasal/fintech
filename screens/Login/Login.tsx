import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import React, { useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

enum SignInType {
	PHONE = 'phone',
	EMAIL = 'email',
	GOOGLE = 'google',
	APPLE = 'apple',
}

const CONTINUE_WITH_BUTTONS = [
	{
		type: SignInType.EMAIL,
		icon: 'mail',
		text: 'Continue with Email',
	},
	{
		type: SignInType.GOOGLE,
		icon: 'logo-google',
		text: 'Continue with Google',
	},
	{
		type: SignInType.APPLE,
		icon: 'logo-apple',
		text: 'Continue with Apple',
	},
];

const Login = () => {
	const [countryCode, setCountryCode] = useState('+49');
	const [mobileNumber, setMobileNumber] = useState('');
	const router = useRouter();
	const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

	const handleLogin = async (type: SignInType) => {
		console.log('%c[handleLogin]', 'background: #000059; color: #9fcfff', type);

		if (type === SignInType.PHONE) {
			// ...
		}
	};

	return (
		<KeyboardAvoidingView
			behavior="padding"
			style={{ flex: 1 }}
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<StatusBar style="dark" />
			<Stack.Screen
				name="login"
				options={{
					title: '',
					headerBackTitle: '',
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: Colors.background,
					},
					headerLeft: () => (
						<TouchableOpacity onPress={router.back}>
							<Ionicons name="arrow-back" size={34} color={Colors.dark} />
						</TouchableOpacity>
					),
					headerRight: () => (
						<Link href="/help" asChild>
							<TouchableOpacity>
								<Ionicons
									name="help-circle-outline"
									size={34}
									color={Colors.dark}
								/>
							</TouchableOpacity>
						</Link>
					),
				}}
			/>

			<View style={[defaultStyles.container, styles.container]}>
				<Text style={defaultStyles.header}>Welcome Back !</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter the phone number associated with your account
				</Text>

				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholderTextColor={Colors.gray}
						keyboardType="numeric"
						value={countryCode}
					/>
					<TextInput
						style={[styles.input, styles.inputMobileNumber]}
						placeholder="Mobile number"
						placeholderTextColor={Colors.gray}
						keyboardType="numeric"
						value={mobileNumber}
						onChangeText={setMobileNumber}
					/>
				</View>

				<TouchableOpacity
					style={[
						defaultStyles.pillButton,
						styles.loginButton,
						!mobileNumber ? styles.loginDisabled : styles.loginEnabled,
					]}
					onPress={() => handleLogin(SignInType.PHONE)}
					disabled={!mobileNumber}
				>
					<Text style={defaultStyles.buttonText}>Continue</Text>
				</TouchableOpacity>

				<View style={styles.dividerContainer}>
					<View style={styles.divider} />
					<Text style={defaultStyles.descriptionText}>or</Text>
					<View style={styles.divider} />
				</View>

				{CONTINUE_WITH_BUTTONS.map(button => (
					<TouchableOpacity
						key={button.type}
						style={[defaultStyles.pillButton, styles.continueWithButton]}
						onPress={() => handleLogin(button.type)}
					>
						<Ionicons
							name={button.icon as keyof typeof Ionicons.glyphMap}
							size={24}
							color={Colors.dark}
						/>
						<Text style={[defaultStyles.buttonText, styles.continueWithText]}>
							{button.text}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</KeyboardAvoidingView>
	);
};

export default Login;
