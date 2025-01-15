import { PRIMARY_FONT_FAMILY } from '@/src/constants/Utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingVertical: 60,
		marginHorizontal: 20,
		alignItems: 'center',
	},
	eyeIcon: {
		position: 'absolute',
		right: 20,
		top: 15,
	},
	balanceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 20,
	},
	balanceRow: {
		width: '100%',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	balanceAmount: {
		fontSize: 50,
		fontFamily: PRIMARY_FONT_FAMILY,
	},
	balanceCurrency: {
		fontSize: 30,
		fontFamily: PRIMARY_FONT_FAMILY,
	},
});
