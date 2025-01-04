import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	actions: {
		backgroundColor: 'rgba(256, 256, 256, 0.1)',
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
	actionText: {
		fontSize: 18,
		flex: 1,
		color: 'white',
		fontWeight: '500',
	},
	inboxBadgeWrapper: {
		backgroundColor: Colors.primary,
		paddingHorizontal: 10,
		borderRadius: 10,
		justifyContent: 'center',
	},
	inboxBadge: {
		color: 'white',
		fontSize: 12,
	},
});
