import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface DividerProps {
	centerText?: string;
	marginVertical?: number;
}

const Divider = ({ centerText, marginVertical }: DividerProps) => {
	return (
		<View style={[styles.dividerContainer, { marginVertical }]}>
			{centerText ? (
				<>
					<View style={styles.divider} />
					<Text style={styles.centerText}>{centerText}</Text>
					<View style={styles.divider} />
				</>
			) : (
				<View style={styles.divider} />
			)}
		</View>
	);
};

export default Divider;
