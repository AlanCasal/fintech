import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		gap: 20,
	},
	inputContainerCountryCode: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		borderBottomWidth: 1,
		borderBottomColor: Colors.lightGray,
	},
});
