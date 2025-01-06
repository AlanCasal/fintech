import { View, TextInput, Text, LogBox } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import CountryPicker, {
	Country,
	DARK_THEME,
} from 'react-native-country-picker-modal';
import { CountryCode, CallingCode } from './api/types';

LogBox.ignoreLogs([
	'Support for defaultProps will be removed from function components',
]);

interface GlobalPhoneInputsProps {
	callingCode: CallingCode;
	countryCode: CountryCode;
	mobileNumber: string;
	handleCountryCodeChange: (country: Country) => void;
	handleMobileNumberChange: (text: string) => void;
}

const GlobalPhoneInputs = ({
	callingCode,
	countryCode,
	mobileNumber,
	handleCountryCodeChange,
	handleMobileNumberChange,
}: GlobalPhoneInputsProps) => {
	return (
		<View style={styles.inputContainer}>
			<View style={styles.inputContainerCountryCode}>
				<CountryPicker
					countryCode={countryCode}
					theme={DARK_THEME}
					withFlag
					withCallingCode
					withFilter
					withCloseButton
					onSelect={handleCountryCodeChange}
				/>
				{callingCode && <Text>+{callingCode}</Text>}
			</View>

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
