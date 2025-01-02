import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
import { styles } from './styles';
import { CLERK_PUBLISHABLE_KEY } from '@/constants/Utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

const RootLayout = () => {
	const [loaded, error] = useFonts({
		SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
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
		if (!isAuthLoaded) return;

		const inAuthGroup = segments[0] === '(authenticated)';

		// is in login screen and signed in
		if (isSignedIn && !inAuthGroup)
			router.replace('/(authenticated)/(tabs)/crypto');
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

/*************************************************************************************/

const queryClient = new QueryClient();

const RootLayoutNav = () => {
	return (
		<ClerkProvider
			publishableKey={CLERK_PUBLISHABLE_KEY!}
			tokenCache={tokenCache}
		>
			<QueryClientProvider client={queryClient}>
				{/* needed for gesture handler, like WidgetList */}
				<GestureHandlerRootView style={{ flex: 1 }}>
					<RootLayout />
				</GestureHandlerRootView>
			</QueryClientProvider>
		</ClerkProvider>
	);
};

export default RootLayoutNav;
