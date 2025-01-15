import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { styles } from './styles';
import DeleteKey from './components/DeleteKey';
import BoxCorners from '@/src/components/BoxCorners';
import Colors from '@/src/constants/Colors';

const renderColumn = (
	column: string[],
	handleNumberPress: (number: string) => void
) => {
	return column.map(number => (
		<TouchableOpacity
			onPress={() => handleNumberPress(number)}
			key={number}
			style={styles.buttonNumber}
			activeOpacity={0.5}
		>
			<BoxCorners
				cornerTopLeft
				cornerBottomRight
				width={'80%'}
				height={'40%'}
				borderWidth={StyleSheet.hairlineWidth}
				borderColor={Colors.primary}
			/>
			<Text style={styles.number}>{number}</Text>
		</TouchableOpacity>
	));
};

interface NumpadProps {
	code: string[];
	handleNumberPress: (number: string) => void;
	handleDeletePress: () => void;
}

const Numpad = ({
	code,
	handleNumberPress,
	handleDeletePress,
}: NumpadProps) => {
	return (
		<View style={styles.numbersView}>
			<View>{renderColumn(['1', '4', '7'], handleNumberPress)}</View>

			<View>{renderColumn(['2', '5', '8', '0'], handleNumberPress)}</View>

			<View>
				{renderColumn(['3', '6', '9'], handleNumberPress)}
				<DeleteKey code={code} handleDeletePress={handleDeletePress} />
			</View>
		</View>
	);
};

export default Numpad;
