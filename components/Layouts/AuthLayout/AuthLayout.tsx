import React from 'react';
import { Stack, Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { styles } from './styles';
import CustomHeader from '@/components/CustomHeader';

const AuthLayout = () => {
	return (
		<>
			<Stack.Screen
				name="(authenticated)/(tabs)"
				options={{ headerShown: false }}
			/>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: Colors.primary,
					tabBarBackground: () => (
						<BlurView intensity={90} style={styles.blurView} />
					),
					tabBarStyle: styles.tabBarStyle,
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
		</>
	);
};

export default AuthLayout;
