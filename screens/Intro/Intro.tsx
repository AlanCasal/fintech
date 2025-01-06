import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link, Stack } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';

const Intro = () => {
	const [assets] = useAssets([require('@/assets/videos/intro2.mp4')]);
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

			<View style={styles.buttons}>
				<Link
					href="/signin"
					asChild
					style={[defaultStyles.pillButton, styles.button, styles.buttonSignIn]}
				>
					<TouchableOpacity>
						<Text style={[styles.buttonText, styles.buttonTextSignIn]}>
							Sign In
						</Text>
					</TouchableOpacity>
				</Link>
				<Link
					href="/signup"
					asChild
					style={[defaultStyles.pillButton, styles.button, styles.buttonSignUp]}
				>
					<TouchableOpacity>
						<Text style={[styles.buttonText, styles.buttonTextSignUp]}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</Link>
			</View>
		</View>
	);
};

export default Intro;
