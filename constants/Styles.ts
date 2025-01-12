import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import {
	PRIMARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from './Utils';

export const defaultStyles = StyleSheet.create({
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
