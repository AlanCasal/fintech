import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';
import React, { useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import { KEYBOARD_VERTICAL_OFFSET } from '@/constants/Utils';
import BackButton from '@/components/Buttons/BackButton';
import {
	Country,
	CountryCode,
	CallingCode,
} from '@/components/Inputs/GlobalPhoneInputs/api/types';
import GlobalPhoneInputs from '@/components/Inputs/GlobalPhoneInputs';

const DEFAULT_COUNTRY_CALLING_CODE = '54';
const DEFAULT_COUNTRY_CODE = 'AR';

const Signup = () => {
	const router = useRouter();
	const { signUp } = useSignUp();

	const [mobileNumber, setMobileNumber] = useState('');
	const [countryCode, setCountryCode] = useState<{
		callingCode: CallingCode;
		countryCode: CountryCode;
	}>({
		callingCode: DEFAULT_COUNTRY_CALLING_CODE,
		countryCode: DEFAULT_COUNTRY_CODE,
	});

	const handleCountryCodeChange = (selectedCountry: Country) => {
		setCountryCode({
			callingCode: selectedCountry.callingCode[0],
			countryCode: selectedCountry.cca2,
		});
	};

	const handleSignup = async () => {
		const phoneNumber = `+${countryCode.callingCode}${mobileNumber}`;

		try {
			await signUp!.create({ phoneNumber });
			signUp!.preparePhoneNumberVerification();

			router.push(`/verify/${phoneNumber}`);
		} catch (error) {
			if (isClerkAPIResponseError(error))
				Alert.alert(
					'Error',
					error.errors[0]?.message || 'Something went wrong'
				);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior="padding"
			style={{ flex: 1 }}
			keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
		>
			<StatusBar style="dark" />
			<Stack.Screen
				name="signup"
				options={{
					title: '',
					headerBackTitle: '',
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: Colors.lightBackground,
					},
					headerLeft: () => <BackButton />,
				}}
			/>

			<View style={[defaultStyles.container, styles.container]}>
				<Text style={defaultStyles.header}>Let's get you started</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter your phone number. We'll send you a verification code.
				</Text>

				<GlobalPhoneInputs
					callingCode={countryCode.callingCode}
					countryCode={countryCode.countryCode}
					mobileNumber={mobileNumber}
					handleCountryCodeChange={handleCountryCodeChange}
					handleMobileNumberChange={setMobileNumber}
				/>

				<Link href={'/signin'} replace asChild>
					<TouchableOpacity>
						<Text style={defaultStyles.textLink}>
							Already have an account? Sign In instead
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
