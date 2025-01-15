import Colors from '@/src/constants/Colors';
import {
	SECONDARY_FONT_FAMILY,
	SECONDARY_FONT_FAMILY_SEMI_BOLD,
} from '@/src/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY,
	},
	chartTodayTextPrice: {
		color: Colors.lightGray,
		fontFamily: SECONDARY_FONT_FAMILY_SEMI_BOLD,
		fontSize: 30,
	},
	chartTodayText: {
		color: Colors.lightGray,
		fontSize: 18,
		fontFamily: SECONDARY_FONT_FAMILY,
		marginBottom: 20,
	},
});
