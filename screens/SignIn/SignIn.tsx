import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
	Image,
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
import CyberButtonLarge from '@/components/Buttons/CyberButtons/components/CyberButtonLarge';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';
import BoxCorners from '@/components/BoxCorners';

const DEFAULT_COUNTRY_CALLING_CODE = '54';
const DEFAULT_COUNTRY_CODE = 'AR';

const SignIn = () => {
	const headerHeight = useHeaderHeight();
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
			style={{ flex: 1, ...defaultStyles.darkBackground }}
			keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
		>
			<Stack.Screen
				name="signin"
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

			<View
				style={[
					defaultStyles.container,
					styles.container,
					{ paddingTop: headerHeight + 20 },
				]}
			>
				<View style={styles.headerContainer}>
					<Text
						style={[
							defaultStyles.secondaryFontFamilySemiBold,
							defaultStyles.header,
							styles.headerBorder,
						]}
					>
						{'>'} Welcome Back !
					</Text>

					<BoxCorners cornerBottomRight cornerTopLeft />
				</View>

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

				<CyberButtonLarge
					handleOnPress={() => handleSignIn(SignInType.PHONE)}
					buttonText="Continue"
					buttonTextColor={Colors.darkBackground}
					steepPosition="top-left"
					disabled={!mobileNumber}
				/>

				<Divider centerText="or" />

				<SignInButtons handleSignIn={handleSignIn} />
			</View>

			<Image
				source={require('@/assets/images/cyber-dots-primary.png')}
				style={[styles.cyberDots, styles.top]}
				resizeMode="repeat"
			/>
			<Image
				source={require('@/assets/images/cyber-dots-primary.png')}
				style={[styles.cyberDots, styles.bottom]}
				resizeMode="repeat"
			/>
		</KeyboardAvoidingView>
	);
};

export default SignIn;
