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

const Signup = () => {
	const [countryCode, setCountryCode] = useState('+49');
	const [mobileNumber, setMobileNumber] = useState('');
	const router = useRouter();
	const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

	const handleSignup = async () => {
		console.log('Signup');
	};

	return (
		<KeyboardAvoidingView
			behavior="padding"
			style={{ flex: 1 }}
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<Stack.Screen
				name="signup"
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
				}}
			/>

			<View style={[defaultStyles.container, styles.container]}>
				<Text style={defaultStyles.header}>Let's get you started</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter your phone number. We'll send you a verification code.
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

				<Link href={'/login'} replace asChild>
					<TouchableOpacity>
						<Text style={defaultStyles.textLink}>
							Already have an account? Log In instead
						</Text>
					</TouchableOpacity>
				</Link>

				<View style={{ flex: 1 }} />

				<TouchableOpacity
					style={[
						defaultStyles.pillButton,
						styles.signUpButton,
						!mobileNumber ? styles.signUpDisabled : styles.signUpEnabled,
					]}
					onPress={handleSignup}
					disabled={!mobileNumber}
				>
					<Text style={defaultStyles.buttonText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Signup;
