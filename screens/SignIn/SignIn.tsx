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
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { KEYBOARD_VERTICAL_OFFSET } from '@/constants/Utils';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import BackButton from '@/components/Buttons/BackButton';
import SignInButtons from '@/components/Buttons/SignInButtons';
import { SignInType } from '@/enums';
import GlobalPhoneInputs from '@/components/Inputs/GlobalPhoneInputs';
import Divider from '@/components/Divider';
import {
	Country,
	CountryCode,
	CallingCode,
} from '@/components/Inputs/GlobalPhoneInputs/api/types';

const DEFAULT_COUNTRY_CALLING_CODE = '54';
const DEFAULT_COUNTRY_CODE = 'AR';

const SignIn = () => {
	const router = useRouter();
	const { signIn } = useSignIn();

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

	const handleSignIn = async (type: SignInType) => {
		if (type === SignInType.PHONE) {
			try {
				const phoneNumber = `+${countryCode.callingCode}${mobileNumber}`;

				const { supportedFirstFactors } = await signIn!.create({
					identifier: phoneNumber,
				});

				const firstPhoneFactor = supportedFirstFactors?.find(
					factor => factor.strategy === 'phone_code'
				);

				const { phoneNumberId } = firstPhoneFactor!;
				await signIn!.prepareFirstFactor({
					strategy: 'phone_code',
					phoneNumberId,
				});

				router.push({
					pathname: '/verify/[phoneNumber]',
					params: { phoneNumber, signIn: 'true' },
				});
			} catch (error) {
				if (isClerkAPIResponseError(error)) {
					Alert.alert(
						'Error',
						error.errors[0]?.message || 'Something went wrong'
					);
				}
			}
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
				name="signin"
				options={{
					title: '',
					headerBackTitle: '',
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: Colors.background,
					},
					headerLeft: () => <BackButton />,
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
				<GlobalPhoneInputs
					callingCode={countryCode.callingCode}
					countryCode={countryCode.countryCode}
					mobileNumber={mobileNumber}
					handleCountryCodeChange={handleCountryCodeChange}
					handleMobileNumberChange={setMobileNumber}
				/>

				<TouchableOpacity
					style={[
						defaultStyles.pillButton,
						styles.signInButton,
						!mobileNumber ? styles.signInDisabled : styles.signInEnabled,
					]}
					onPress={() => handleSignIn(SignInType.PHONE)}
					disabled={!mobileNumber}
				>
					<Text style={defaultStyles.buttonText}>Continue</Text>
				</TouchableOpacity>

				<Divider centerText="or" />

				<SignInButtons handleSignIn={handleSignIn} />
			</View>
		</KeyboardAvoidingView>
	);
};

export default SignIn;
