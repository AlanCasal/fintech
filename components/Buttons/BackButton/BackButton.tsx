import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

interface BackButtonProps {
	size?: number;
	color?: string;
	icon?: keyof typeof Ionicons.glyphMap;
}

const BackButton = ({
	size = 34,
	color = Colors.darkBackground,
	icon = 'arrow-back',
}: BackButtonProps) => {
	const router = useRouter();

	return (
		<TouchableOpacity onPress={router.back}>
			<Ionicons name={icon} size={size} color={color} />
		</TouchableOpacity>
	);
};

export default BackButton;
