import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ERROR_MESSAGE_FETCHING_DATA } from '@/constants/Utils';
import CyberDots from '../CyberDots';
import Logo from '../Logo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ErrorBackgroundProps {
	title?: string;
	subtitle?: string;
}

const ErrorBackground = ({
	title = 'Error',
	subtitle = ERROR_MESSAGE_FETCHING_DATA,
}: ErrorBackgroundProps) => {
	const { bottom, top } = useSafeAreaInsets();

	const safePadding = { paddingBottom: bottom + 10, paddingTop: top + 10 };

	return (
		<View style={[styles.container, safePadding]}>
			<CyberDots position="top" height="25%" />
			<CyberDots position="bottom" height="25%" />

			<View style={styles.contentContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>

			<View style={{ marginBottom: bottom + 20 }}>
				<Logo />
			</View>
		</View>
	);
};

export default ErrorBackground;
