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
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

type PhoneCodes = {
	callingCode: CallingCode;
	countryCode: CountryCode;
};

const SignIn = () => {
	const headerHeight = useHeaderHeight();
	const { bottom } = useSafeAreaInsets();
	const router = useRouter();
	const { signIn } = useSignIn();

	const [mobileNumber, setMobileNumber] = useState('');
	const [countryCode, setCountryCode] = useState<PhoneCodes>({
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
								<MaterialCommunityIcons
									name="help-circle"
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
						<View style={styles.titleContainer}>
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
					</View>

					<View style={styles.gap20}>
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
					</View>

					<Divider centerText="or" marginVertical={10} />

					<SignInButtons handleSignIn={handleSignIn} />

					<View style={styles.logoContainer}>
						<Logo />
						<BoxCorners
							cornerBottomRight
							cornerTopLeft
							width={10}
							height={10}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default SignIn;
