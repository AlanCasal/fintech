import { useLocalSearchParams } from 'expo-router';
import React, { createRef, useCallback, useRef, useMemo } from 'react';
import { Animated, Dimensions, View, ScrollView } from 'react-native';
import ChartCartesian from './components/ChartCartesian';
import ScreenHeader from './components/ScreenHeader';
import Details from './components/Details';
import { styles } from './styles';
import { useGetCryptoInfo } from './api/hooks/useGetCryptoInfo';
import LoadingBackground from '@/components/LoadingBackground';
import ErrorBackground from '@/components/ErrorBackground';
import TabsIndicator from '@/components/TabsIndicator';
import CyberDots from '@/components/CyberDots';

const { width } = Dimensions.get('screen');

const Crypto = () => {
	const { id } = useLocalSearchParams();
	const { data, isLoading, error } = useGetCryptoInfo(id as string);

	const ref = useRef<Animated.FlatList>(null);
	const scrollX = useRef(new Animated.Value(0)).current;

	const onItemPress = useCallback((itemIndex: number) => {
		ref.current?.scrollToOffset({ offset: itemIndex * width });
	}, []);

	const DATA = useMemo(
		() => [
			{
				name: 'Overview',
				content: (
					<>
						<CyberDots position="top" height="20%" />
						<CyberDots position="bottom" height="20%" />
						<ScrollView
							showsVerticalScrollIndicator={false}
							style={{ marginTop: 20 }}
						>
							<ChartCartesian />
							<Details description={data?.description} />
						</ScrollView>
					</>
				),
				ref: createRef<View>(),
				index: 0,
			},
			{
				name: 'News',
				content: (
					<ErrorBackground title="Screen not available" subtitle="News" />
				),
				ref: createRef<View>(),
				index: 1,
			},
			{
				name: 'Orders',
				content: (
					<ErrorBackground title="Screen not available" subtitle="Orders" />
				),
				ref: createRef<View>(),
				index: 2,
			},
			{
				name: 'Transactions',
				content: (
					<ErrorBackground
						title="Screen not available"
						subtitle="Transactions"
					/>
				),
				ref: createRef<View>(),
				index: 3,
			},
		],
		[data]
	);

	return (
		<>
			<ScreenHeader title={data?.name} logoUrl={data?.logo} />

			{isLoading && <LoadingBackground />}

			{error && <ErrorBackground subtitle={error.message} />}

			{!isLoading && !error && data && (
				<View style={styles.container}>
					<TabsIndicator
						scrollX={scrollX}
						data={DATA}
						onItemPress={onItemPress}
					/>

					<Animated.FlatList
						ref={ref}
						data={DATA}
						keyExtractor={item => item.name}
						horizontal
						showsHorizontalScrollIndicator={false}
						pagingEnabled
						onScroll={Animated.event(
							[{ nativeEvent: { contentOffset: { x: scrollX } } }],
							{ useNativeDriver: false }
						)}
						bounces={false}
						renderItem={({ item }) => (
							<View style={{ width }}>{item.content}</View>
						)}
					/>
				</View>
			)}
		</>
	);
};

export default Crypto;
