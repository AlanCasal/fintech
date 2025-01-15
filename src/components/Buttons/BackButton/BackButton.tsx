import { TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';
import { useRouter } from 'expo-router';

interface BackButtonProps {
	size?: number;
	color?: string;
	icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const BackButton = ({
	size = 24,
	color = Colors.white,
	icon = 'chevron-left-box-outline',
}: BackButtonProps) => {
	const router = useRouter();

	return (
		<TouchableOpacity onPress={router.back}>
			<MaterialCommunityIcons name={icon} size={size} color={color} />
		</TouchableOpacity>
	);
};

export default BackButton;
