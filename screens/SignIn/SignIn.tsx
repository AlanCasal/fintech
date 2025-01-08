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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import CyberDots from '@/components/CyberDots';

const DEFAULT_COUNTRY_CALLING_CODE = '54';
const DEFAULT_COUNTRY_CODE = 'AR';

const SignIn = () => {
	const headerHeight = useHeaderHeight();
	const { bottom } = useSafeAreaInsets();
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
			style={[defaultStyles.darkBackground, { flex: 1 }]}
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

			<CyberDots position="top" height="20%" />
			<CyberDots position="bottom" height="30%" />

			<View style={[styles.logoContainer, { bottom: bottom + 10 }]}>
				<Logo />
				<BoxCorners cornerBottomRight cornerTopLeft width={10} height={10} />
			</View>
		</KeyboardAvoidingView>
	);
};

export default SignIn;
