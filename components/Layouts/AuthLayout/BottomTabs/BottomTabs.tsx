import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import CustomHeader from '@/components/CustomHeader';
import { styles } from './styles';

const BottomTabs = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
				tabBarBackground: () => (
					<BlurView intensity={75} tint="dark" style={styles.blurView} />
				),
				tabBarStyle: styles.tabBarStyle,
				tabBarLabelStyle: styles.tabBarLabelStyle,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="home" size={size} color={color} />
					),
					header: () => <CustomHeader />,
					headerTransparent: true,
				}}
			/>
			<Tabs.Screen
				name="markets"
				options={{
					title: 'Markets',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="chart-bar"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="trade"
				options={{
					title: 'Trade',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="hand-coin"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="crypto"
				options={{
					title: 'Crypto',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="bitcoin" size={size} color={color} />
					),
					header: () => <CustomHeader />,
					headerTransparent: true,
				}}
			/>
			<Tabs.Screen
				name="wallets"
				options={{
					title: 'Wallets',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="wallet" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default BottomTabs;
