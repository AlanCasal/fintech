import { TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import Colors from '@/constants/Colors';

const Biometrics = () => {
	const router = useRouter();

	const handleBiometricPress = async () => {
		try {
			const { success } = await LocalAuthentication.authenticateAsync({
				promptMessage: 'Authenticate to continue',
				fallbackLabel: 'Use passcode',
			});

			if (success) router.push('/(authenticated)/(tabs)/home');
			else Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		} catch (error) {
			Alert.alert('Authentication error:', (error as Error)?.message);
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		}
	};

	return (
		<TouchableOpacity onPress={handleBiometricPress} style={styles.button}>
			<MaterialCommunityIcons
				name="face-recognition"
				size={32}
				color={Colors.darkBackground}
			/>
		</TouchableOpacity>
	);
};

export default Biometrics;
