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

	const MENU_OPTIONS = [
		{
			name: 'Account',
			icon: 'person',
			action: () => {},
		},
		{
			name: 'Learn',
			icon: 'bulb',
			action: () => {},
		},
		{
			name: 'Inbox',
			icon: 'megaphone',
			action: () => {},
		},
		{
			name: 'Sign Out',
			icon: 'log-out',
			action: handleSignOut,
		},
	];

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

				{MENU_OPTIONS.map((option, index) => (
					<TouchableOpacity
						style={[
							styles.actionButton,
							index !== MENU_OPTIONS.length - 1 && styles.actionButtonDivider,
						]}
						key={option.name}
						onPress={option.action}
					>
						<Ionicons
							name={option.icon as keyof typeof Ionicons.glyphMap}
							size={18}
							color={Colors.white}
						/>
						<Text style={styles.actionText}>{option.name}</Text>
					</TouchableOpacity>
				))}
			</View>

			<View style={styles.actions}>
				<BoxCorners
					cornerBottomLeft
					cornerTopRight
					height={'60%'}
					width={'10%'}
					borderWidth={StyleSheet.hairlineWidth}
				/>

				{ICONS.map((icon, index) => {
					const isActive = activeIcon.toLowerCase() === icon.name.toLowerCase();

					return (
						<TouchableOpacity
							key={icon.name}
							onPress={() => handleChangeIcon(icon.name)}
							style={[
								styles.actionButton,
								index !== ICONS.length - 1 && styles.actionButtonDivider,
							]}
						>
							<Image source={icon.icon} style={styles.iconImage} />
							<Text style={[styles.actionText, isActive && styles.activeText]}>
								{icon.name}
							</Text>
							{isActive && (
								<Ionicons
									name="checkmark"
									size={20}
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
