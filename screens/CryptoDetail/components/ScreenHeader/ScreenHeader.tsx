import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import BackButton from '@/components/Buttons/BackButton';

const ScreenHeader = ({ title = '' }: { title?: string }) => {
	return (
		<Stack.Screen
			name="(authenticated)/(tabs)/[id]"
			options={{
				headerStyle: {
					backgroundColor: Colors.background,
				},
				title,
				headerLargeTitle: true,
				headerTransparent: true,
				headerLeft: () => <BackButton />,
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
