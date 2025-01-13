import { TouchableOpacity, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import BackButton from '@/components/Buttons/BackButton';

interface ScreenHeaderProps {
	title?: string;
	logoUrl?: string;
	currentPrice?: string;
}

interface TitleProps {
	title?: string;
	logoUrl?: string;
	currentPrice?: string;
}

const Title = ({ title = '', logoUrl, currentPrice }: TitleProps) => (
	<View style={styles.headerTitleContainer}>
		<Image source={{ uri: logoUrl }} style={styles.logo} />
		<View>
			<Text style={styles.headerTitleStyle}>{title}</Text>
			{currentPrice && (
				<Text style={styles.headerPriceStyle}>{currentPrice} €</Text>
			)}
		</View>
	</View>
);

const ScreenHeader = ({
	title = '',
	logoUrl = '',
	currentPrice,
}: ScreenHeaderProps) => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleToggleFavorite = () => {
		setIsFavorite(prev => !prev);
	};

	let favIconName: keyof typeof MaterialCommunityIcons.glyphMap =
		'star-outline';
	let favIconColor = Colors.lightGray;

	if (isFavorite) {
		favIconName = 'star-face';
		favIconColor = Colors.primary;
	}

	return (
		<Stack.Screen
			name="(authenticated)/(tabs)/[id]"
			options={{
				headerStyle: { backgroundColor: Colors.darkBackground },
				headerShadowVisible: false,
				title: 'Loading name...',
				headerTitle: () => (
					<Title title={title} logoUrl={logoUrl} currentPrice={currentPrice} />
				),
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
							<TouchableOpacity onPress={handleToggleFavorite}>
								<MaterialCommunityIcons
									name={favIconName}
									size={24}
									color={favIconColor}
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
