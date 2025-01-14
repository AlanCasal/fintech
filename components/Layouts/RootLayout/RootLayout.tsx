/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useRouter, useSegments } from 'expo-router';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from 'expo-secure-store';
import 'react-native-reanimated';
import { CLERK_PUBLISHABLE_KEY, isIos } from '@/constants/Utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserInactivityProvider } from '@/context/UserInactivity';
import { Aldrich_400Regular } from '@expo-google-fonts/aldrich';
import {
	Oxanium_400Regular,
	Oxanium_600SemiBold,
} from '@expo-google-fonts/oxanium';
import LoadingBackground from '@/components/LoadingBackground';
import StackScreens from './components';

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
export const tokenCache = isIos ? createTokenCache() : undefined;

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		Aldrich_400Regular,
		Oxanium_400Regular,
		Oxanium_600SemiBold,
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

		// is in signIn screen and signed in
		if (isSignedIn && !inAuthGroup)
			router.replace('/(authenticated)/(tabs)/home');
		else if (!isSignedIn) router.replace('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSignedIn]);

	if (!loaded || !isAuthLoaded || !CLERK_PUBLISHABLE_KEY)
		return <LoadingBackground />;

	return <StackScreens />;
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
				<UserInactivityProvider>
					{/* needed for gesture handler, like WidgetList */}
					<GestureHandlerRootView style={{ flex: 1 }}>
						<RootLayout />
					</GestureHandlerRootView>
				</UserInactivityProvider>
			</QueryClientProvider>
		</ClerkProvider>
	);
};

export default RootLayoutNav;
