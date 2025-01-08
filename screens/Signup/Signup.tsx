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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import { KEYBOARD_VERTICAL_OFFSET } from '@/constants/Utils';
import BackButton from '@/components/Buttons/BackButton';
import {
	Country,
	CountryCode,
	CallingCode,
} from '@/components/Inputs/GlobalPhoneInputs/api/types';
import GlobalPhoneInputs from '@/components/Inputs/GlobalPhoneInputs';
import Ionicons from '@expo/vector-icons/build/Ionicons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';
import BoxCorners from '@/components/BoxCorners';
import CyberButtonLarge from '@/components/Buttons/CyberButtons/components/CyberButtonLarge';
import CyberDots from '@/components/CyberDots';
import Logo from '@/components/Logo';

const DEFAULT_COUNTRY_CALLING_CODE = '54';
const DEFAULT_COUNTRY_CODE = 'AR';

const Signup = () => {
	const router = useRouter();
	const { signUp } = useSignUp();
	const { bottom } = useSafeAreaInsets();
	const headerHeight = useHeaderHeight();

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
			style={[defaultStyles.darkBackground, { flex: 1 }]}
			keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
		>
			<Stack.Screen
				name="signup"
				options={{
					title: '',
					headerBackTitle: '',
					headerShadowVisible: false,
					headerTransparent: true,
					headerLeft: () => <BackButton />,
					headerRight: () => (
						<Link href="/help" asChild>
							<TouchableOpacity>
								<Ionicons
									name="help-circle-outline"
									size={34}
									color={Colors.white}
								/>
							</TouchableOpacity>
						</Link>
					),
				}}
			/>
			<CyberDots position="top" height="20%" />
			<CyberDots position="bottom" height="30%" />

			<View
				style={[
					defaultStyles.container,
					styles.container,
					{ paddingTop: headerHeight + 20, paddingBottom: bottom + 20 },
				]}
			>
				<View>
					<Text style={[defaultStyles.header, styles.header]}>
						Let's get you started
					</Text>

					<BoxCorners cornerBottomRight cornerTopLeft />
				</View>

				<Text style={defaultStyles.descriptionText}>
					{`Enter your phone number.${'\n'}We'll send you a verification code.`}
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
						<Text style={defaultStyles.descriptionText}>
							Already have an account?{' '}
							<Text style={defaultStyles.textLink}>Sign In instead</Text>
						</Text>
					</TouchableOpacity>
				</Link>

				<View style={{ flex: 1 }} />

				<View style={styles.logoContainer}>
					<Logo />
					<BoxCorners cornerBottomRight cornerTopLeft width={10} height={10} />
				</View>

				<CyberButtonLarge
					buttonText="Sign Up"
					steepPosition="top-left"
					buttonTextColor={Colors.darkBackground}
					handleOnPress={handleSignup}
					disabled={!mobileNumber}
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Signup;
