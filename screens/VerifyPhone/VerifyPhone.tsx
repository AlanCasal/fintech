import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { styles } from './styles';
import { Link, router, Stack, useLocalSearchParams } from 'expo-router';
import { useSignIn, useSignUp } from '@clerk/clerk-expo';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const VerifyPhone = () => {
	const [code, setCode] = useState('');

	const { signIn: signInClerk } = useSignIn();
	const { signUp: signUpClerk } = useSignUp();
	const { phoneNumber, signIn } = useLocalSearchParams<{
		phoneNumber: string;
		signIn: string;
	}>();

	const [value, setValue] = useState('');
	const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode,
	});

	const handleVerifyCode = async () => {
		// ...
	};

	const handleVerifySignIn = async () => {
		// ...
	};

	useEffect(() => {
		if (code.length === 6) {
			signIn ? handleVerifySignIn() : handleVerifyCode();
		}
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
					headerLeft: () => (
						<TouchableOpacity onPress={router.back}>
							<Ionicons name="arrow-back" size={34} color={Colors.dark} />
						</TouchableOpacity>
					),
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

			<Link href="/login" replace asChild>
				<Text style={defaultStyles.textLink}>
					Already have an account? Log In
				</Text>
			</Link>
		</View>
	);
};

export default VerifyPhone;
