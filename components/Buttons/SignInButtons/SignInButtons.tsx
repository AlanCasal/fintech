import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { SignInType } from '@/enums';

const SIGN_IN_LIST = [
	{
		type: SignInType.EMAIL,
		icon: 'mail',
		text: 'Continue with Email',
	},
	{
		type: SignInType.GOOGLE,
		icon: 'logo-google',
		text: 'Continue with Google',
	},
	{
		type: SignInType.APPLE,
		icon: 'logo-apple',
		text: 'Continue with Apple',
	},
];

type SignInButtonsProps = {
	handleSignIn: (type: SignInType) => void;
};

const SignInButtons = ({ handleSignIn }: SignInButtonsProps) => {
	return SIGN_IN_LIST.map(button => (
		<TouchableOpacity
			key={button.type}
			style={[defaultStyles.pillButton, styles.continueWithButton]}
			onPress={() => handleSignIn(button.type)}
		>
			<Ionicons
				name={button.icon as keyof typeof Ionicons.glyphMap}
				size={24}
				color={Colors.dark}
			/>
			<Text style={[defaultStyles.buttonText, styles.continueWithText]}>
				{button.text}
			</Text>
		</TouchableOpacity>
	));
};

export default SignInButtons;
