import {
	View,
	Text,
	TouchableOpacity,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import BackButton from '@/components/Buttons/BackButton';
import {
	Country,
	CountryCode,
	CallingCode,
} from '@/components/Inputs/GlobalPhoneInputs/api/types';
import GlobalPhoneInputs from '@/components/Inputs/GlobalPhoneInputs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';
import CyberButtonLarge from '@/components/Buttons/CyberButtons/components/CyberButtonLarge';
import CyberDots from '@/components/CyberDots';
import Logo from '@/components/Logo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CyberHeaderTitle from '@/components/CyberHeaderTitle';

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

	const containerStyles = [
		defaultStyles.container,
		defaultStyles.darkBackground,
		styles.container,
		{
			paddingTop: headerHeight + 10,
			paddingBottom: bottom + 10,
		},
	];

	return (
		<View style={{ flex: 1 }}>
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
								<MaterialCommunityIcons
									name="help-circle-outline"
									size={24}
									color={Colors.white}
								/>
							</TouchableOpacity>
						</Link>
					),
				}}
			/>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={containerStyles}>
					<CyberDots position="top" height="20%" />
					<CyberDots position="bottom" height="30%" />

					<View style={styles.gap20}>
						<CyberHeaderTitle
							title="> Let's get you started"
							subtitle={`Enter your phone number.${'\n'}We'll send you a verification code.`}
							titleStyle={styles.header}
						/>

						<GlobalPhoneInputs
							callingCode={countryCode.callingCode}
							countryCode={countryCode.countryCode}
							mobileNumber={mobileNumber}
							handleCountryCodeChange={handleCountryCodeChange}
							handleMobileNumberChange={setMobileNumber}
						/>

						<View style={styles.signInContainer}>
							<Text style={defaultStyles.descriptionText}>
								Already have an account?{' '}
							</Text>
							<Link href={'/signin'} replace asChild>
								<TouchableOpacity>
									<Text style={defaultStyles.textLink}>Sign In instead</Text>
								</TouchableOpacity>
							</Link>
						</View>
					</View>

					<View style={{ flex: 1 }} />

					<Logo containerStyle={styles.logoContainer} />

					<CyberButtonLarge
						buttonText="Sign Up"
						steepPosition="bottom-right"
						buttonTextColor={Colors.darkBackground}
						handleOnPress={handleSignup}
						disabled={!mobileNumber}
					/>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default Signup;
