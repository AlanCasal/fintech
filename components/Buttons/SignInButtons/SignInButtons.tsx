import React from 'react';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { SignInType } from '@/enums';
import CyberButtonLarge from '../CyberButtons/components/CyberButtonLarge/CyberButtonLarge';
import { styles } from './styles';

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
		<CyberButtonLarge
			key={button.type}
			handleOnPress={() => handleSignIn(button.type)}
			buttonBackgroundColor={Colors.white}
			buttonTextColor={Colors.darkBackground}
			buttonText={button.text}
			buttonBorderColor={Colors.white}
			steepPosition="bottom-right"
			buttonTextStyle={styles.buttonText}
			icon={
				<Ionicons
					name={button.icon as keyof typeof Ionicons.glyphMap}
					size={20}
					color={Colors.darkBackground}
				/>
			}
		/>
	));
};

export default SignInButtons;
