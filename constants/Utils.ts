import { Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';
export const KEYBOARD_VERTICAL_OFFSET = isIos ? 80 : 0;

export const CLERK_PUBLISHABLE_KEY =
	process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const ERROR_MESSAGE_FETCHING_DATA =
	// eslint-disable-next-line prettier/prettier, quotes, @typescript-eslint/quotes
	"Couldn't load data.\nPlease try again later";

export const PRIMARY_FONT_FAMILY = 'Aldrich_400Regular';
