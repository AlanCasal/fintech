import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import {
	PRIMARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from './Utils';

export const defaultStyles = StyleSheet.create({
	primaryFontFamily: {
		fontFamily: PRIMARY_FONT_FAMILY,
	},
	secondaryFontFamily: {
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	secondaryFontFamilySemiBold: {
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
	},
	container: {
		flex: 1,
		padding: 16,
	},
	lightBackground: {
		backgroundColor: Colors.lightBackground,
	},
	darkBackground: {
		backgroundColor: Colors.darkBackground,
	},
	header: {
		fontSize: 40,
		color: Colors.primary,
	},
	pillButton: {
		padding: 10,
		height: 60,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textLink: {
		color: Colors.primary,
		fontSize: 18,
		fontWeight: '500',
	},
	descriptionText: {
		fontSize: 18,
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '500',
	},
	pillButtonSmall: {
		paddingHorizontal: 20,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTextSmall: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
	sectionHeader: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20,
		marginBottom: 10,
	},
	block: {
		marginHorizontal: 20,
		padding: 14,
		backgroundColor: '#fff',
		borderRadius: 16,
		gap: 20,
	},
});
