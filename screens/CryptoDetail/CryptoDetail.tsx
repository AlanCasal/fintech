import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, SectionList, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import { useQuery } from '@tanstack/react-query';
import { CryptoInfo } from '@/interfaces/crypto';
import LoadingSpinner from '@/components/LoadingSpinner';

const Crypto = () => {
	const { id } = useLocalSearchParams();
	const router = useRouter();

	const { data, isLoading, error } = useQuery<CryptoInfo, Error>({
		queryKey: ['info', id],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${id}`);
			const data = await response.json();
			return data[+id];
		},
	});

	if (isLoading) return <LoadingSpinner />;
	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<>
			<Stack.Screen
				name="(authenticated)/(tabs)/[id]"
				options={{
					title: data?.name,
					headerLargeTitle: true,
					headerTransparent: true,
					headerLeft: () => (
						<TouchableOpacity onPress={router.back}>
							<Ionicons name="arrow-back" size={34} color={Colors.dark} />
						</TouchableOpacity>
					),
					headerRight: () => (
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
			<SectionList
				contentInsetAdjustmentBehavior="automatic"
				keyExtractor={(item, index) => item.title + index}
				sections={[{ data: [{ title: 'Section 1' }] }]}
				ListHeaderComponent={() => (
					<>
						<View style={styles.headerComponentWrapper}>
							<Text style={styles.headerComponentSubtitle}>{data?.symbol}</Text>
							<Image
								source={{ uri: data?.logo }}
								style={styles.headerComponentLogo}
							/>
						</View>
					</>
				)}
				renderItem={({ item }) => (
					<>
						<View style={[defaultStyles.block, styles.overview]}>
							<Text style={styles.subtitle}>Overview</Text>
							<Text style={styles.description}>{data?.description}</Text>
						</View>
					</>
				)}
			/>
		</>
	);
};

export default Crypto;
