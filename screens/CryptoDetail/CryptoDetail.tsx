import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SectionList, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import { useQuery } from '@tanstack/react-query';
import { CryptoInfo, Ticker } from '@/interfaces/crypto';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useHeaderHeight } from '@react-navigation/elements';
import { ScrollView } from 'react-native-gesture-handler';
import { CartesianChart, Line } from 'victory-native';
import { useFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';

const CATEGORIES = ['Overview', 'News', 'Orders', 'Transactions'];

const Crypto = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const { id } = useLocalSearchParams();
	const router = useRouter();
	const headerHeight = useHeaderHeight();
	const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'), 12);

	const { data, isLoading, error } = useQuery<CryptoInfo, Error>({
		queryKey: ['info', id],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${id}`);
			const data = await response.json();
			return data[+id];
		},
	});

	const {
		data: tickers,
		isLoading: tickersLoading,
		error: tickersError,
	} = useQuery<Ticker[], Error>({
		queryKey: ['tickers'],
		queryFn: async (): Promise<Ticker[]> => {
			const response = await fetch(`/api/tickers`);
			const data = await response.json();
			return data;
		},
	});

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
				style={{ marginTop: headerHeight }}
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

						<View style={styles.buttonsWrapper}>
							<TouchableOpacity
								style={[defaultStyles.pillButtonSmall, styles.pillButton]}
							>
								<Ionicons name="add" size={24} color="white" />
								<Text style={[defaultStyles.buttonText, styles.buttonText]}>
									Buy
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									defaultStyles.pillButtonSmall,
									styles.pillButton,
									{ backgroundColor: Colors.primaryMuted },
								]}
							>
								<Ionicons name="arrow-back" size={24} color={Colors.primary} />
								<Text
									style={[
										defaultStyles.buttonText,
										styles.buttonText,
										{ color: Colors.primary },
									]}
								>
									Receive
								</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
				renderSectionHeader={() => (
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.headerCategoriesWrapper}
					>
						{CATEGORIES.map((category, index) => (
							<TouchableOpacity
								onPress={() => setActiveIndex(index)}
								key={category}
								style={
									index === activeIndex
										? styles.categoriesButtonActive
										: styles.categoriesButton
								}
							>
								<Text
									style={
										index === activeIndex
											? styles.categoryTextActive
											: styles.categoryText
									}
								>
									{category}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				)}
				renderItem={() => (
					<>
						{tickers && (
							<View style={[defaultStyles.block, { height: 500 }]}>
								<CartesianChart
									axisOptions={{
										font,
										tickCount: 5,
										labelOffset: { x: -2, y: 0 },
										labelColor: Colors.gray,
										formatYLabel: label => `${label}€`,
										formatXLabel: ms => format(new Date(ms), 'MMM'),
									}}
									data={tickers}
									xKey="timestamp"
									yKeys={['price'] as const}
								>
									{({ points }) => (
										<Line
											points={points.price}
											color={Colors.primary}
											strokeWidth={3}
										/>
									)}
								</CartesianChart>
							</View>
						)}

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
