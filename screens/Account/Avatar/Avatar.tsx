import { TouchableOpacity, Image, View, Alert } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useUser } from '@clerk/clerk-expo';

const Avatar = () => {
	const { user } = useUser();

	const handleCaptureImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.75,
			base64: true,
		});

		if (!result.canceled) {
			const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`;

			try {
				await user?.setProfileImage({ file: base64 });
			} catch (error) {
				Alert.alert('Error', 'Failed to update user image');
			}
		}
	};

	return (
		<TouchableOpacity onPress={handleCaptureImage} style={styles.captureButton}>
			{user?.imageUrl ? (
				<Image
					source={{ uri: user?.imageUrl }}
					style={styles.profileImage}
					resizeMode="cover"
				/>
			) : (
				<View style={styles.userIconWrapper}>
					<Ionicons name="person" size={42} color="white" />
				</View>
			)}
		</TouchableOpacity>
	);
};

export default Avatar;
