import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';

const Actions = () => {
	const { signOut } = useAuth();

	const handleSignOut = async () => {
		await signOut();
	};

	return (
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
	);
};

export default Actions;
