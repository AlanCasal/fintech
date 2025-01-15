import {
	View,
	TouchableOpacity,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { defaultStyles } from '@/src/constants/Styles';
import { styles } from './styles';
import Colors from '@/src/constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import BackButton from '@/src/components/Buttons/BackButton';
import SignInButtons from '@/src/components/Buttons/SignInButtons';
import { SignInType } from '@/src/enums';
import GlobalPhoneInputs from '@/src/components/Inputs/GlobalPhoneInputs';
import Divider from '@/src/components/Divider';
import {
	Country,
	CountryCode,
	CallingCode,
} from '@/src/components/Inputs/GlobalPhoneInputs/api/types';
import CyberButtonLarge from '@/src/components/Buttons/CyberButtons/components/CyberButtonLarge';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '@/src/components/Logo';
import CyberDots from '@/src/components/CyberDots';
import CyberHeaderTitle from '@/src/components/CyberHeaderTitle';

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

	const mobileNumberRef = useRef('');
	const [countryCode, setCountryCode] = useState<PhoneCodes>({
		callingCode: DEFAULT_COUNTRY_CALLING_CODE,
		countryCode: DEFAULT_COUNTRY_CODE,
	});

	const handleMobileNumberChange = (value: string) => {
		mobileNumberRef.current = value;
	};

	const handleCountryCodeChange = (selectedCountry: Country) => {
		setCountryCode({
			callingCode: selectedCountry.callingCode[0],
			countryCode: selectedCountry.cca2,
		});
	};

	const handleSignIn = async (type: SignInType) => {
		if (!mobileNumberRef.current) {
			Alert.alert('Please enter a valid mobile number');
			return;
		}

		if (type === SignInType.PHONE) {
			try {
				const phoneNumber = `+${countryCode.callingCode}${mobileNumberRef.current}`;

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
		styles.container,
		{
			paddingTop: headerHeight + 10,
			paddingBottom: bottom + 10,
		},
	];

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<ScrollView
				style={styles.scrollViewContainer}
				contentContainerStyle={containerStyles}
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

				<CyberDots position="top" height="35%" />
				<CyberDots position="bottom" height="30%" />

				<CyberHeaderTitle
					title="> Welcome Back !"
					subtitle="Enter the phone number associated with your account"
				/>

				<View style={styles.gap20}>
					<GlobalPhoneInputs
						callingCode={countryCode.callingCode}
						countryCode={countryCode.countryCode}
						handleCountryCodeChange={handleCountryCodeChange}
						handleMobileNumberChange={handleMobileNumberChange}
					/>

					<CyberButtonLarge
						handleOnPress={() => handleSignIn(SignInType.PHONE)}
						buttonText="Continue"
						buttonTextColor={Colors.darkBackground}
						steepPosition="top-left"
					/>
				</View>

				<Divider centerText="or" marginVertical={10} />

				<SignInButtons handleSignIn={handleSignIn} />

				<Logo />
			</ScrollView>
		</TouchableWithoutFeedback>
	);
};

export default SignIn;
