import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { MMKV } from 'react-native-mmkv';

type Props = {
	children: React.ReactNode;
};

// creates a new storage instance
const storage = new MMKV({
	id: 'user-inactivity-storage',
});

export const UserInactivityProvider = ({ children }: Props) => {
	const appState = useRef(AppState.currentState);
	const router = useRouter();
	const { isSignedIn } = useAuth();

	const handleAppStateChange = (nextAppState: AppStateStatus) => {
		if (['background', 'inactive'].includes(nextAppState)) {
			recordStartTime();
		} else if (
			nextAppState === 'active' &&
			['background', 'inactive'].includes(appState.current)
		) {
			const elapsedTime = Date.now() - (storage.getNumber('startTime') || 0);

			if (elapsedTime > 3000) router.push('/(authenticated)/(modals)/lock');
		}

		appState.current = nextAppState;
	};

	const recordStartTime = () => {
		storage.set('startTime', Date.now());
	};

	useEffect(() => {
		const subscription = AppState.addEventListener(
			'change',
			handleAppStateChange
		);

		return () => {
			subscription.remove();
		};
	}, []);

	return children;
};
