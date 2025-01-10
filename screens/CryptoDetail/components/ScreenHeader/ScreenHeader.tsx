import { TouchableOpacity, View, Text, Image } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import BackButton from '@/components/Buttons/BackButton';

interface ScreenHeaderProps {
	title?: string;
	logoUrl?: string;
}

interface TitleProps {
	title?: string;
	logoUrl?: string;
}

const Title = ({ title = '', logoUrl }: TitleProps) => (
	<View style={styles.headerTitleContainer}>
		<Image source={{ uri: logoUrl }} style={styles.logo} />
		<Text style={styles.headerTitleStyle}>{title}</Text>
	</View>
);

const ScreenHeader = ({ title = '', logoUrl = '' }: ScreenHeaderProps) => {
	return (
		<Stack.Screen
			name="(authenticated)/(tabs)/[id]"
			options={{
				headerStyle: { backgroundColor: Colors.darkBackground },
				headerShadowVisible: false,
				title: 'Loading name...',
				headerTitle: () => <Title title={title} logoUrl={logoUrl} />,
				headerTitleStyle: styles.headerTitleStyle,
				headerTitleAlign: 'left',
				headerLeft: () => <BackButton />,
				headerRight: () =>
					title && (
						<View style={styles.headerRight}>
							<TouchableOpacity>
								<MaterialCommunityIcons
									name="view-grid"
									size={24}
									color={Colors.lightGray}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<MaterialCommunityIcons
									name="star-box-outline"
									size={24}
									color={Colors.lightGray}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<MaterialCommunityIcons
									name="share-variant"
									size={24}
									color={Colors.lightGray}
								/>
							</TouchableOpacity>
						</View>
					),
			}}
		/>
	);
};

export default ScreenHeader;
