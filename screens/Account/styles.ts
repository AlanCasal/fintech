import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	blurView: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		paddingTop: 100,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: Colors.gray,
	},
	captureButton: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: Colors.gray,
	},
	content: {
		alignItems: 'center',
	},
	nameWrapper: {
		flexDirection: 'row',
		gap: 6,
	},
	editRow: {
		flexDirection: 'row',
		gap: 12,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		color: 'white',
	},
	nameInput: {
		width: 140,
		height: 40,
		borderWidth: 1,
		borderColor: Colors.gray,
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'white',
	},
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
