import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';

const DeleteKey = ({
	code,
	handleDeletePress,
}: {
	code: string[];
	handleDeletePress: () => void;
}) => {
	return (
		<TouchableOpacity
			onPress={handleDeletePress}
			disabled={code.length === 0}
			style={styles.buttonNumber}
		>
			<MaterialCommunityIcons
				name={code.length === 0 ? 'backspace-outline' : 'backspace'}
				size={24}
				color={code.length === 0 ? Colors.gray : Colors.dark}
			/>
		</TouchableOpacity>
	);
};

export default DeleteKey;
