import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface DividerProps {
	centerText?: string;
	marginVertical?: number;
	marginLeft?: number;
	marginRight?: number;
}

const Divider = ({
	centerText,
	marginVertical,
	marginLeft = 0,
	marginRight = 0,
}: DividerProps) => {
	return (
		<View style={[styles.dividerContainer, { marginVertical }]}>
			{centerText ? (
				<>
					<View style={styles.divider} />
					<Text style={styles.centerText}>{centerText}</Text>
					<View style={styles.divider} />
				</>
			) : (
				<View style={[styles.divider, { marginLeft, marginRight }]} />
			)}
		</View>
	);
};

export default Divider;
