import { View, Text, Platform, Alert } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { styles } from './styles';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import {
	isClerkAPIResponseError,
	useSignIn,
	useSignUp,
} from '@clerk/clerk-expo';
import { defaultStyles } from '@/constants/Styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BackButton from '@/components/Buttons/BackButton';

const CELL_COUNT = 6;

const VerifyPhone = () => {
	const [code, setCode] = useState('');

	const { signIn: signInClerk } = useSignIn();
	const { signUp: signUpClerk, setActive } = useSignUp();
	const { phoneNumber, signIn } = useLocalSearchParams<{
		phoneNumber: string;
		signIn: string;
	}>();

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
		<View style={[defaultStyles.container, styles.container]}>
			<Stack.Screen
				name="verify/[phoneNumber]"
				options={{
					title: '',
					headerBackTitle: '',
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: Colors.background,
					},
					headerLeft: () => <BackButton />,
				}}
			/>

			<Text style={defaultStyles.header}>6-digit code</Text>
			<Text style={defaultStyles.descriptionText}>
				Code sent to {phoneNumber} unless you already have an account
			</Text>

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
				renderCell={({ index, symbol, isFocused }) => (
					<Fragment key={index}>
						<View
							onLayout={getCellOnLayoutHandler(index)}
							style={[styles.cellRoot, isFocused && styles.focusCell]}
						>
							<Text style={styles.cellText}>
								{symbol || (isFocused ? <Cursor /> : null)}
							</Text>
						</View>
						{index === 2 ? (
							<View key={`separator-${index}`} style={styles.separator} />
						) : null}
					</Fragment>
				)}
			/>

			<Link href="/signin" replace asChild>
				<Text style={defaultStyles.textLink}>
					Already have an account? Sign In
				</Text>
			</Link>
		</View>
	);
};

export default VerifyPhone;
