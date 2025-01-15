import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Stack, useRouter } from 'expo-router';
import CyberButtons from '@/src/components/Buttons/CyberButtons';
import TypewriterGlitchText from '@/src/components/Animations/TypewriterGlitchText';
import GlitchDots from '@/src/components/Animations/GlitchDots';
import Logo from '@/src/components/Logo';
import BoxCorners from '@/src/components/BoxCorners';

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
			<GlitchDots position="top" height="10%" />
			<GlitchDots position="bottom" height="25%" />

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
				<TypewriterGlitchText
					text="> Ready to change the way you money ?"
					extraStyle={styles.header}
				/>
			</View>

			<View style={styles.buttonsContainer}>
				<View style={styles.logoContainer}>
					<Logo />
				</View>

				<CyberButtons
					containerStyle={{ marginBottom: 60 }}
					leftButtonText="Sign In"
					leftButtonAction={handleRedirectToSignIn}
					rightButtonText="Sign Up"
					rightButtonAction={handleRedirectToSignUp}
					withTextGlitch
				/>
			</View>
		</View>
	);
};

export default Intro;
