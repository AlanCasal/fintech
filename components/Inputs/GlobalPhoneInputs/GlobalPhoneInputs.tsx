import { View, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';

interface GlobalPhoneInputsProps {
	countryCode: string;
	mobileNumber: string;
	handleCountryCodeChange: (text: string) => void;
	handleMobileNumberChange: (text: string) => void;
}

const GlobalPhoneInputs = ({
	countryCode,
	mobileNumber,
	handleCountryCodeChange,
	handleMobileNumberChange,
}: GlobalPhoneInputsProps) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholderTextColor={Colors.gray}
				keyboardType="numeric"
				value={countryCode}
				onChangeText={handleCountryCodeChange}
				editable={false}
			/>
			<TextInput
				style={[styles.input, styles.inputMobileNumber]}
				placeholder="Mobile number"
				placeholderTextColor={Colors.gray}
				keyboardType="numeric"
				value={mobileNumber}
				onChangeText={handleMobileNumberChange}
			/>
		</View>
	);
};

export default GlobalPhoneInputs;
