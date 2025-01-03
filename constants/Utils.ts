import { Platform } from 'react-native';

export const KEYBOARD_VERTICAL_OFFSET = Platform.OS === 'ios' ? 80 : 0;

export const CLERK_PUBLISHABLE_KEY =
	process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const ERROR_MESSAGE_FETCHING_DATA =
	// eslint-disable-next-line prettier/prettier, quotes, @typescript-eslint/quotes
	"Couldn't load data.\nPlease try again later";
