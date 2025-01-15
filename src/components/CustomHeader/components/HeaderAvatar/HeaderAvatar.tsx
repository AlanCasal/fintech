import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';
import { useUser } from '@clerk/clerk-expo';
import { styles } from './styles';

const HeaderAvatar = () => {
	const { user } = useUser();

	return (
		<Link href="/(authenticated)/(modals)/account" asChild>
			<TouchableOpacity style={styles.userButton}>
				{user?.imageUrl ? (
					<Image
						source={{ uri: user?.imageUrl }}
						style={styles.profileImage}
						resizeMode="cover"
					/>
				) : (
					<View style={styles.userIconWrapper}>
						<Ionicons name="person" size={22} color={Colors.white} />
					</View>
				)}
			</TouchableOpacity>
		</Link>
	);
};

export default HeaderAvatar;
