import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';

const Intro = () => {
	const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);
	return (
		<View style={styles.container}>
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
					href="/login"
					asChild
					style={[defaultStyles.pillButton, styles.button, styles.buttonLogin]}
				>
					<TouchableOpacity>
						<Text style={[styles.buttonText, styles.buttonTextLogin]}>
							Log In
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
