import { Platform } from 'react-native';

export const KEYBOARD_VERTICAL_OFFSET = Platform.OS === 'ios' ? 80 : 0;

export const CLERK_PUBLISHABLE_KEY =
	process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
