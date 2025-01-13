import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import CustomHeader from '@/components/CustomHeader';
import { styles } from './styles';

const CustomTabs = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
				tabBarBackground: () => (
					<BlurView intensity={85} tint="dark" style={styles.blurView} />
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
				name="invest"
				options={{
					title: 'Invest',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="line-chart" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="transfers"
				options={{
					title: 'Transfers',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="exchange" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="crypto"
				options={{
					title: 'Crypto',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="bitcoin" size={size} color={color} />
					),
					header: () => <CustomHeader />,
					headerTransparent: true,
				}}
			/>
			<Tabs.Screen
				name="lifestyle"
				options={{
					title: 'Lifestyle',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="th" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default CustomTabs;
