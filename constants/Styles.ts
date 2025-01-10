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
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		color: Colors.primary,
		fontSize: 18,
		lineHeight: 22,
	},
	descriptionText: {
		fontSize: 18,
		lineHeight: 22,
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.lightGray,
		flex: 1,
	},
	inputText: {
		fontSize: 16,
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	buttonText: {
		color: Colors.white,
		fontSize: 18,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	pillButtonSmall: {
		paddingHorizontal: 20,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTextSmall: {
		color: Colors.white,
		fontSize: 16,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	sectionHeader: {
		fontSize: 20,
		fontFamily: PRIMARY_FONT_FAMILY,
		textTransform: 'uppercase',
		color: Colors.lightGray,
		margin: 20,
		marginBottom: 10,
	},
	tableContainer: {
		marginHorizontal: 20,
	},
});
