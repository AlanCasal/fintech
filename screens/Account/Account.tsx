import {
	Text,
	TouchableOpacity,
	View,
	Image,
	TextInput,
	Alert,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const Account = () => {
	const { user } = useUser();
	const { signOut } = useAuth();

	const [firstName, setFirstName] = useState(user?.firstName);
	const [lastName, setLastName] = useState(user?.lastName);
	const [isEditing, setIsEditing] = useState(false);

	const handleSaveUser = async () => {
		if (!firstName || !lastName) return;

		try {
			await user?.update({ firstName, lastName });
			setIsEditing(false);
		} catch (error) {
			Alert.alert('Error', 'Failed to save user');
		} finally {
			setIsEditing(false);
		}
	};

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

	const handleSignOut = async () => {
		await signOut();
	};

	return (
		<>
			<BlurView intensity={80} style={styles.blurView} tint="dark">
				<View style={styles.content}>
					<TouchableOpacity
						onPress={handleCaptureImage}
						style={styles.captureButton}
					>
						{user?.imageUrl && (
							<Image
								source={{ uri: user?.imageUrl }}
								style={styles.profileImage}
								resizeMode="cover"
							/>
						)}
					</TouchableOpacity>

					<View style={styles.nameWrapper}>
						{!isEditing && (
							<View style={styles.editRow}>
								<Text style={styles.title}>
									{firstName} {lastName}
								</Text>
								<TouchableOpacity>
									<Ionicons
										name="ellipsis-horizontal"
										size={24}
										color="white"
									/>
								</TouchableOpacity>
							</View>
						)}
						{isEditing && (
							<View style={styles.editRow}>
								<TextInput
									style={[styles.nameInput]}
									value={firstName || ''}
									onChangeText={setFirstName}
								/>
								<TextInput
									style={[styles.nameInput]}
									value={lastName || ''}
									onChangeText={setLastName}
								/>
								<TouchableOpacity onPress={handleSaveUser}>
									<Ionicons name="checkmark-outline" size={24} color="white" />
								</TouchableOpacity>
							</View>
						)}
					</View>
				</View>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.actionButton}>
						<Ionicons name="person" size={24} color="white" />
						<Text style={styles.actionText}>Account</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.actionButton}>
						<Ionicons name="bulb" size={24} color="white" />
						<Text style={styles.actionText}>Learn</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.actionButton}>
						<Ionicons name="megaphone" size={24} color="white" />
						<Text style={styles.actionText}>Inbox</Text>
						<View style={styles.inboxBadgeWrapper}>
							<Text style={styles.inboxBadge}>14</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.actionButton} onPress={handleSignOut}>
						<Ionicons name="log-out" size={24} color="white" />
						<Text style={styles.actionText}>Sign Out</Text>
					</TouchableOpacity>
				</View>
			</BlurView>
		</>
	);
};

export default Account;
