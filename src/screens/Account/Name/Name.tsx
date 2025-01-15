import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import Colors from '@/src/constants/Colors';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import { defaultStyles } from '@/src/constants/Styles';

const ICON_SIZE = 28;

enum FocusedField {
	FIRST_NAME = 'firstName',
	LAST_NAME = 'lastName',
}

const Name = () => {
	const { user } = useUser();

	const [firstName, setFirstName] = useState(user?.firstName);
	const [lastName, setLastName] = useState(user?.lastName);
	const [isEditing, setIsEditing] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [isFocused, setIsFocused] = useState<FocusedField | null>(null);

	const handleFocus = (field: FocusedField) => setIsFocused(field);

	const handleBlur = () => setIsFocused(null);

	const handleSaveUser = async () => {
		if (!firstName || !lastName) return;

		try {
			setIsSaving(true);
			await user?.update({ firstName, lastName });
			setIsEditing(false);
		} catch (error) {
			Alert.alert('Error', 'Failed to save user');
		} finally {
			setIsEditing(false);
			setIsSaving(false);
		}
	};

	useEffect(() => {
		if (!isFocused) {
			setIsEditing(false);
		}
	}, [isFocused]);

	return (
		<View style={styles.nameWrapper}>
			{!isEditing && (
				<View style={styles.editRow}>
					<View style={{ width: ICON_SIZE }} />
					<Text style={styles.fullName}>
						{firstName} {lastName}
					</Text>
					<TouchableOpacity onPress={() => setIsEditing(true)}>
						<MaterialCommunityIcons
							name="pencil-box"
							size={ICON_SIZE}
							color={Colors.lightGray}
						/>
					</TouchableOpacity>
				</View>
			)}

			{isEditing && (
				<View style={styles.editRow}>
					<TextInput
						style={[
							defaultStyles.input,
							defaultStyles.inputText,
							isFocused === 'firstName'
								? { borderBottomColor: Colors.primary }
								: {},
						]}
						placeholder="Name"
						placeholderTextColor={Colors.gray}
						keyboardType="name-phone-pad"
						value={firstName || ''}
						onChangeText={setFirstName}
						cursorColor={Colors.primary}
						autoFocus
						onFocus={() => handleFocus(FocusedField.FIRST_NAME)}
						onBlur={handleBlur}
					/>
					<TextInput
						style={[
							defaultStyles.input,
							defaultStyles.inputText,
							isFocused === 'lastName'
								? { borderBottomColor: Colors.primary }
								: {},
						]}
						placeholder="Last Name"
						placeholderTextColor={Colors.gray}
						keyboardType="name-phone-pad"
						value={lastName || ''}
						onChangeText={setLastName}
						cursorColor={Colors.primary}
						onFocus={() => handleFocus(FocusedField.LAST_NAME)}
						onBlur={handleBlur}
					/>

					<View style={styles.buttonsContainer}>
						{isSaving ? (
							<LoadingSpinner size={40} />
						) : (
							<>
								<TouchableOpacity onPress={() => setIsEditing(false)}>
									<MaterialCommunityIcons
										name="close-box-outline"
										size={24}
										color={Colors.negative}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleSaveUser}>
									<MaterialCommunityIcons
										name="checkbox-outline"
										size={24}
										color={Colors.primary}
									/>
								</TouchableOpacity>
							</>
						)}
					</View>
				</View>
			)}
		</View>
	);
};

export default Name;
