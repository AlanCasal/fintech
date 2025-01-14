import { useLocalSearchParams } from 'expo-router';
import React, {
	createRef,
	useCallback,
	useRef,
	useMemo,
	useState,
} from 'react';
import {
	Animated,
	Dimensions,
	View,
	ScrollView,
	ViewToken,
} from 'react-native';
import ChartCartesian from './components/ChartCartesian';
import ScreenHeader from './components/ScreenHeader';
import Details from './components/Details';
import { styles } from './styles';
import { useGetCryptoInfo } from './api/hooks/useGetCryptoInfo';
import LoadingBackground from '@/components/LoadingBackground';
import ErrorBackground from '@/components/ErrorBackground';
import TabsIndicator from '@/components/TabsIndicator';
import CyberDots from '@/components/CyberDots';
import useIsVisibleOnScroll from '@/hooks/useIsVisibleOnScroll';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TABS_INDICATOR_HEIGHT } from '@/components/TabsIndicator/TabsIndicator';

const { width } = Dimensions.get('screen');

enum TabName {
	Overview = 'Overview',
	Info = 'Info',
	TradingData = 'Trading Data',
	Square = 'Square',
}

const Crypto = () => {
	const { id } = useLocalSearchParams();
	const { data, isLoading, error } = useGetCryptoInfo(id as string);
	const { top } = useSafeAreaInsets();

	const contentMarginTop = 20;
	const headerHeight = top + TABS_INDICATOR_HEIGHT + contentMarginTop + 10;

	const {
		isVisible: isPriceVisible,
		viewRef,
		handleOnScroll,
	} = useIsVisibleOnScroll({
		headerHeight,
	});

	const [currentPrice, setCurrentPrice] = useState('');
	const [currentTab, setCurrentTab] = useState(TabName.Overview);

	const currentTabRef = useRef<Animated.FlatList>(null);
	const scrollX = useRef(new Animated.Value(0)).current;

	const handleScrollToTab = useCallback((itemIndex: number) => {
		currentTabRef.current?.scrollToOffset({ offset: itemIndex * width });
	}, []);

	const DATA = useMemo(
		() => [
			{
				name: TabName.Overview,
				content: (
					<>
						<CyberDots position="top" height="20%" />
						<CyberDots position="bottom" height="20%" />
						<ScrollView
							showsVerticalScrollIndicator={false}
							style={{ marginTop: contentMarginTop }}
							onScroll={handleOnScroll}
							scrollEventThrottle={16}
						>
							<ChartCartesian
								priceRef={viewRef}
								handleSetCurrentPrice={setCurrentPrice}
							/>
							<Details description={data?.description} />
						</ScrollView>
					</>
				),
				ref: createRef<View>(),
				index: 0,
			},
			{
				name: TabName.Info,
				content: (
					<ErrorBackground title="Screen not available" subtitle="Info" />
				),
				ref: createRef<View>(),
				index: 1,
			},
			{
				name: TabName.TradingData,
				content: (
					<ErrorBackground
						title="Screen not available"
						subtitle="Trading Data"
					/>
				),
				ref: createRef<View>(),
				index: 2,
			},
			{
				name: TabName.Square,
				content: (
					<ErrorBackground title="Screen not available" subtitle="Square" />
				),
				ref: createRef<View>(),
				index: 3,
			},
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[data, isPriceVisible]
	);

	const viewabilityConfig = {
		itemVisiblePercentThreshold: 50,
	};

	const onViewableItemsChanged = useCallback(
		({ viewableItems }: { viewableItems: ViewToken[] }) => {
			setCurrentTab(viewableItems[0].item.name as TabName);
		},
		[]
	);

	const currentPriceMemo = useMemo(() => {
		return !isPriceVisible || currentTab !== TabName.Overview
			? currentPrice
			: '';
	}, [currentPrice, isPriceVisible, currentTab]);

	if (isLoading) return <LoadingBackground />;

	if (error || (!isLoading && !data)) return <ErrorBackground />;

	return (
		<>
			<ScreenHeader
				title={data?.name}
				logoUrl={data?.logo}
				currentPrice={currentPriceMemo}
			/>

			<View style={styles.container}>
				<TabsIndicator
					scrollX={scrollX}
					data={DATA}
					onItemPress={handleScrollToTab}
				/>

				<Animated.FlatList
					ref={currentTabRef}
					data={DATA}
					onViewableItemsChanged={onViewableItemsChanged}
					viewabilityConfig={viewabilityConfig}
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
		</>
	);
};

export default Crypto;
