import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Stack, useRouter } from 'expo-router';
import CyberButtons from '@/components/Buttons/CyberButtons';

const Intro = () => {
	const [assets] = useAssets([require('@/assets/videos/intro2.mp4')]);

	const router = useRouter();

	const handleRedirectToSignIn = () => {
		router.push('/signin');
	};

	const handleRedirectToSignUp = () => {
		router.push('/signup');
	};

	return (
		<View style={styles.container}>
			<Stack.Screen name="intro" options={{ headerShown: false }} />

			{assets && (
				<Video
					resizeMode={ResizeMode.COVER}
					isLooping
					isMuted
					shouldPlay
					source={{ uri: assets[0].uri }}
					style={styles.video}
				/>
			)}

			<View style={styles.content}>
				<Text style={styles.header}>Ready to change the way you money ?</Text>
			</View>

			<CyberButtons
				containerStyles={{ marginBottom: 60 }}
				actionLeft={handleRedirectToSignIn}
				actionRight={handleRedirectToSignUp}
			/>
		</View>
	);
};

export default Intro;
