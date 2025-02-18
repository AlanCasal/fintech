import { View, Text, Platform, Alert } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { styles } from './styles';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import {
	isClerkAPIResponseError,
	useSignIn,
	useSignUp,
} from '@clerk/clerk-expo';
import { defaultStyles } from '@/src/constants/Styles';
import Colors from '@/src/constants/Colors';
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BackButton from '@/src/components/Buttons/BackButton';
import CyberDots from '@/src/components/CyberDots';
import Logo from '@/src/components/Logo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CyberButtonSquare from '@/src/components/Buttons/CyberButtonSquare';
import CyberHeaderTitle from '@/src/components/CyberHeaderTitle';

const CELL_COUNT = 6;

const VerifyPhone = () => {
	const [code, setCode] = useState('');

	const { signIn: signInClerk } = useSignIn();
	const { signUp: signUpClerk, setActive } = useSignUp();
	const { phoneNumber, signIn } = useLocalSearchParams<{
		phoneNumber: string;
		signIn: string;
	}>();
	const { bottom } = useSafeAreaInsets();

	const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode,
	});

	const handleVerifyCode = async () => {
		try {
			await signUpClerk?.attemptPhoneNumberVerification({ code });
			await setActive!({ session: signUpClerk!.createdSessionId });
		} catch (error) {
			if (isClerkAPIResponseError(error))
				Alert.alert(
					'Error',
					error.errors[0]?.message || 'Something went wrong'
				);
		}
	};

	const handleVerifySignIn = async () => {
		try {
			await signInClerk!.attemptFirstFactor({ strategy: 'phone_code', code });
			await setActive!({ session: signInClerk!.createdSessionId });
		} catch (error) {
			if (isClerkAPIResponseError(error))
				Alert.alert(
					'Error',
					error.errors[0]?.message || 'Something went wrong'
				);
		}
	};

	useEffect(() => {
		if (code.length === 6) {
			signIn ? handleVerifySignIn() : handleVerifyCode();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code]);

	return (
		<View
			style={[
				defaultStyles.container,
				styles.container,
				{ paddingBottom: bottom },
			]}
		>
			<Stack.Screen
				name="verify/[phoneNumber]"
				options={{
					title: '',
					headerBackTitle: '',
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: Colors.darkBackground,
					},
					headerLeft: () => <BackButton />,
				}}
			/>
			<CyberDots position="top" height="20%" />
			<CyberDots position="bottom" height="30%" />

			<CyberHeaderTitle
				title="6-digit code"
				subtitle={
					<>
						Code sent to <Text style={styles.phoneNumber}>{phoneNumber}</Text>{' '}
						unless you already have an account
					</>
				}
			/>

			<CodeField
				ref={ref}
				{...props}
				// Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
				value={code}
				onChangeText={setCode}
				cellCount={CELL_COUNT}
				rootStyle={styles.codeFieldRoot}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				autoComplete={Platform.select({
					android: 'sms-otp',
					default: 'one-time-code',
				})}
				testID="my-code-input"
				renderCell={({ index, symbol, isFocused }) => {
					let boxColor = Colors.gray;
					const separatorColor =
						code.length > index ? Colors.primary : Colors.gray;

					if (code.length >= index) boxColor = Colors.primary;

					return (
						<Fragment key={index}>
							<View
								onLayout={getCellOnLayoutHandler(index)}
								style={styles.cellRoot}
							>
								<CyberButtonSquare
									fillColor={boxColor}
									strokeColor={boxColor}
									disabled
								/>
								<Text style={styles.cellText}>
									{symbol || (isFocused ? <Cursor /> : null)}
								</Text>
							</View>
							{index === 2 ? (
								<View
									key={`separator-${index}`}
									style={[
										styles.separator,
										{ backgroundColor: separatorColor },
									]}
								/>
							) : null}
						</Fragment>
					);
				}}
			/>

			<Text style={defaultStyles.descriptionText}>
				Already have an account?{' '}
				<Link href="/signin" replace asChild>
					<Text style={defaultStyles.textLink}>Sign In</Text>
				</Link>
			</Text>

			<View style={{ flex: 1 }} />

			<View style={styles.logoContainer}>
				<Logo />
			</View>
		</View>
	);
};

export default VerifyPhone;
