import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';

interface DeleteKeyProps {
	code: string[];
	handleDeletePress: () => void;
	activeOpacity?: number;
}

const DeleteKey = ({
	code,
	handleDeletePress,
	activeOpacity = 0.2,
}: DeleteKeyProps) => {
	return (
		<TouchableOpacity
			onPress={handleDeletePress}
			disabled={code.length === 0}
			style={styles.buttonNumber}
			activeOpacity={activeOpacity}
		>
			<MaterialCommunityIcons
				name={code.length === 0 ? 'backspace-outline' : 'backspace'}
				size={24}
				color={code.length === 0 ? Colors.gray : Colors.lightGray}
			/>
		</TouchableOpacity>
	);
};

export default DeleteKey;
