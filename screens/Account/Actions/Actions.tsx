import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';
import { getAppIcon, setAppIcon } from 'expo-dynamic-app-icon';
import Colors from '@/constants/Colors';
import BoxCorners from '@/components/BoxCorners';

const ICONS = [
	{
		name: 'default',
		icon: require('@/assets/images/icons/icon.png'),
	},
	{
		name: 'dark',
		icon: require('@/assets/images/icons/icon-dark.png'),
	},
	{
		name: 'vivid',
		icon: require('@/assets/images/icons/icon-vivid.png'),
	},
];

const Actions = () => {
	const [activeIcon, setActiveIcon] = useState('default');

	const { signOut } = useAuth();

	const handleSignOut = async () => {
		await signOut();
	};

	const handleChangeIcon = async (icon: string) => {
		setAppIcon(icon.toLowerCase());
		setActiveIcon(icon);
	};

	useEffect(() => {
		const loadCurrentIcon = async () => {
			const icon = getAppIcon();
			setActiveIcon(icon);
		};

		loadCurrentIcon();
	}, []);

	return (
		<>
			<View style={styles.actions}>
				<BoxCorners
					cornerTopLeft
					cornerBottomRight
					width={'40%'}
					height={'10%'}
					borderWidth={StyleSheet.hairlineWidth}
				/>
				<TouchableOpacity style={styles.actionButton}>
					<Ionicons name="person" size={24} color={Colors.white} />
					<Text style={styles.actionText}>Account</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.actionButton}>
					<Ionicons name="bulb" size={24} color={Colors.white} />
					<Text style={styles.actionText}>Learn</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.actionButton}>
					<Ionicons name="megaphone" size={24} color={Colors.white} />
					<Text style={styles.actionText}>Inbox</Text>
					<View style={styles.inboxBadgeWrapper}>
						<Text style={styles.inboxBadge}>14</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.actionButton} onPress={handleSignOut}>
					<Ionicons name="log-out" size={24} color={Colors.white} />
					<Text style={styles.actionText}>Sign Out</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.actions}>
				<BoxCorners
					cornerBottomLeft
					cornerTopRight
					height={'60%'}
					width={'10%'}
					borderWidth={StyleSheet.hairlineWidth}
				/>
				{ICONS.map(icon => {
					const isActive = activeIcon.toLowerCase() === icon.name.toLowerCase();

					return (
						<TouchableOpacity
							key={icon.name}
							onPress={() => handleChangeIcon(icon.name)}
							style={styles.actionButton}
						>
							<Image source={icon.icon} style={styles.iconImage} />
							<Text style={[styles.actionText, isActive && styles.activeText]}>
								{icon.name}
							</Text>
							{isActive && (
								<Ionicons
									name="checkmark"
									size={24}
									color={Colors.primaryMuted}
								/>
							)}
						</TouchableOpacity>
					);
				})}
			</View>
		</>
	);
};

export default Actions;
