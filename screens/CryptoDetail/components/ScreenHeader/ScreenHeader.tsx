import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import BackButton from '@/components/Buttons/BackButton';
import { PRIMARY_FONT_FAMILY } from '@/constants/Utils';

const ScreenHeader = ({ title = '' }: { title?: string }) => {
	return (
		<Stack.Screen
			name="(authenticated)/(tabs)/[id]"
			options={{
				headerStyle: {
					backgroundColor: Colors.darkBackground,
				},
				title,
				headerTitleStyle: {
					fontFamily: PRIMARY_FONT_FAMILY,
					color: Colors.lightGray,
				},
				headerLargeTitle: true,
				headerLargeTitleStyle: {
					fontFamily: PRIMARY_FONT_FAMILY,
					color: Colors.lightGray,
				},
				headerTransparent: true,
				headerLeft: () => <BackButton />,
				headerRight: () =>
					title && (
						<View style={styles.headerRight}>
							<TouchableOpacity>
								<Ionicons
									name="notifications-outline"
									size={30}
									color={Colors.darkBackground}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Ionicons
									name="star-outline"
									size={30}
									color={Colors.darkBackground}
								/>
							</TouchableOpacity>
						</View>
					),
			}}
		/>
	);
};

export default ScreenHeader;
