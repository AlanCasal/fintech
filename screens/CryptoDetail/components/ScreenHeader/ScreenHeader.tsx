import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';

const ScreenHeader = ({ title = '' }: { title?: string }) => {
	const router = useRouter();

	return (
		<Stack.Screen
			name="(authenticated)/(tabs)/[id]"
			options={{
				title,
				headerLargeTitle: true,
				headerTransparent: true,
				headerLeft: () => (
					<TouchableOpacity onPress={router.back}>
						<Ionicons name="arrow-back" size={34} color={Colors.dark} />
					</TouchableOpacity>
				),
				headerRight: () =>
					title && (
						<View style={styles.headerRight}>
							<TouchableOpacity>
								<Ionicons
									name="notifications-outline"
									size={30}
									color={Colors.dark}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Ionicons name="star-outline" size={30} color={Colors.dark} />
							</TouchableOpacity>
						</View>
					),
			}}
		/>
	);
};

export default ScreenHeader;
