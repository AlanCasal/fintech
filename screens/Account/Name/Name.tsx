import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';

const Name = () => {
	const { user } = useUser();

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

	return (
		<View style={styles.nameWrapper}>
			{!isEditing && (
				<View style={styles.editRow}>
					<Text style={styles.title}>
						{firstName} {lastName}
					</Text>
					<TouchableOpacity onPress={() => setIsEditing(true)}>
						<Ionicons name="ellipsis-horizontal" size={24} color="white" />
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
	);
};

export default Name;
