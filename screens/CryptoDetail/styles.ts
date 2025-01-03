import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
	headerRight: {
		flexDirection: 'row',
		gap: 10,
	},
	stickyHeaderComponentWrapper: {
		backgroundColor: 'red',
		height: 50,
		flex: 1,
	},
	headerComponentWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 16,
	},
	headerComponentSubtitle: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 20,
		color: Colors.gray,
	},
	headerComponentLogo: {
		width: 60,
		height: 60,
	},
	buttonsWrapper: {
		flexDirection: 'row',
		gap: 10,
		margin: 12,
	},
	pillButton: {
		backgroundColor: Colors.primary,
		flexDirection: 'row',
		gap: 16,
	},
	buttonText: {
		color: 'white',
	},
	headerCategoriesWrapper: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		gap: 10,
		paddingBottom: 8,
		backgroundColor: Colors.background,
		borderBottomColor: Colors.gray,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	categoriesButton: {
		padding: 10,
		paddingHorizontal: 14,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
	},
	categoriesButtonActive: {
		padding: 10,
		paddingHorizontal: 14,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: 'white',
	},
	categoryText: {
		fontSize: 14,
		color: Colors.gray,
	},
	categoryTextActive: {
		fontSize: 14,
		color: Colors.dark,
	},
	overview: {
		marginTop: 20,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.gray,
	},
	description: {
		color: Colors.gray,
	},
});
