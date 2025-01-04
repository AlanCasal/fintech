import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import DeleteKey from './components/DeleteKey';

const renderColumn = (
	column: string[],
	handleNumberPress: (number: string) => void
) => {
	return column.map(number => (
		<TouchableOpacity
			onPress={() => handleNumberPress(number)}
			key={number}
			style={styles.buttonNumber}
		>
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
