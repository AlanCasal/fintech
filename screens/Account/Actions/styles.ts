import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	actions: {
		backgroundColor: Colors.blackTransparent02,
		borderRadius: 16,
		gap: 0,
		margin: 20,
	},
	actionButton: {
		padding: 14,
		flexDirection: 'row',
		gap: 20,
		alignItems: 'center',
	},
	iconText: {
		color: Colors.white,
		fontSize: 18,
	},
	iconImage: {
		width: 24,
		height: 24,
		borderRadius: 5,
	},
	actionText: {
		fontSize: 18,
		flex: 1,
		color: Colors.white,
		fontWeight: '500',
	},
	inboxBadgeWrapper: {
		backgroundColor: Colors.primary,
		paddingHorizontal: 10,
		borderRadius: 10,
		justifyContent: 'center',
	},
	inboxBadge: {
		color: Colors.white,
		fontSize: 12,
	},
});
