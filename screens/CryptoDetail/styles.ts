import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { styles as MenuOptionsStyles } from './components/MenuOptions/styles';

export const styles = StyleSheet.create({
	...MenuOptionsStyles,
	container: {
		backgroundColor: Colors.darkBackground,
	},
});
