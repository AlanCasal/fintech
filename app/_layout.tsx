import { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from 'expo-secure-store';
import 'react-native-reanimated';
import LoadingSpinner from '@/components/LoadingSpinner';
import Colors from '@/constants/Colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.dark,
	},
});

const createTokenCache = (): TokenCache => {
	return {
		getToken: async (key: string) => {
			try {
				const item = await SecureStore.getItemAsync(key);

				if (item) console.log(`${key} was used 🔐 \n`);
				else console.log('No values stored under key: ' + key);

				return item;
			} catch (error) {
				console.error('secure store get item error: ', error);
				await SecureStore.deleteItemAsync(key);
				return null;
			}
		},
		saveToken: (key: string, token: string) =>
			SecureStore.setItemAsync(key, token),
	};
};

// SecureStore is not supported on the web
export const tokenCache =
	Platform.OS !== 'web' ? createTokenCache() : undefined;

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const RootLayout = () => {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});
	const { isLoaded: isAuthLoaded, isSignedIn } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync();
	}, [loaded]);

	useEffect(() => {
		console.log('%c[signed in]', 'background: #000059; color: #9fcfff');
		if (!isAuthLoaded) return;

		const inAuthGroup = segments[0] === '(authenticated)';

		// is in login screen and signed in
		if (isSignedIn && !inAuthGroup)
			router.replace('/(authenticated)/(tabs)/home');
		else if (!isSignedIn) router.replace('/');
	}, [isSignedIn]);

	if (!loaded || !isAuthLoaded || !CLERK_PUBLISHABLE_KEY) {
		return (
			<View style={styles.container}>
				<LoadingSpinner />
			</View>
		);
	}

	return (
		<Stack>
			<StatusBar style="light" />
			<Stack.Screen
				name="help"
				options={{
					title: 'Help',
					presentation: 'modal',
				}}
			/>
		</Stack>
	);
};

const RootLayoutNav = () => {
	return (
		<ClerkProvider
			publishableKey={CLERK_PUBLISHABLE_KEY!}
			tokenCache={tokenCache}
		>
			<RootLayout />
		</ClerkProvider>
	);
};

export default RootLayoutNav;
