import { View, TextInput, Text, LogBox } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import CountryPicker, {
	Country,
	DARK_THEME,
} from 'react-native-country-picker-modal';
import { CountryCode, CallingCode } from './api/types';
import { defaultStyles } from '@/constants/Styles';

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
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);

	const handleBlur = () => setIsFocused(false);

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
				{callingCode && (
					<Text style={defaultStyles.inputText}>+{callingCode}</Text>
				)}
			</View>

			<TextInput
				style={[
					defaultStyles.input,
					defaultStyles.inputText,
					isFocused ? { borderBottomColor: Colors.primary } : {},
				]}
				placeholder="Mobile number"
				placeholderTextColor={Colors.gray}
				keyboardType="number-pad"
				value={mobileNumber}
				onChangeText={handleMobileNumberChange}
				cursorColor={Colors.primary}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</View>
	);
};

export default GlobalPhoneInputs;
