import { useLocalSearchParams } from 'expo-router';
import React, {
	createRef,
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	Animated,
	Dimensions,
	SectionList,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import ChartCartesian from '@/components/ChartCartesian';
import ScreenHeader from './components/ScreenHeader';
import Details from './components/Details';
import { styles } from './styles';
import { useGetCryptoInfo } from './api/hooks/useGetCryptoInfo';
import LoadingBackground from '@/components/LoadingBackground';
import ErrorBackground from '@/components/ErrorBackground';
import Colors from '@/constants/Colors';

const { width, height } = Dimensions.get('screen');

const Indicator = ({
	measures,
	scrollX,
	data,
}: {
	measures: { x: number; y: number; width: number; height: number }[];
	scrollX: Animated.Value;
	data: { name: string; ref: React.RefObject<any>; index: number }[];
}) => {
	const inputRange = data.map((_, i) => i * width);
	const indicatorWidth = scrollX.interpolate({
		inputRange,
		outputRange: measures.map(measure => measure.width),
	});

	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: measures.map(measure => measure.x),
	});

	return (
		<Animated.View
			style={{
				position: 'absolute',
				width: indicatorWidth,
				height: 3,
				backgroundColor: Colors.primary,
				bottom: -10,
				left: 0,
				transform: [{ translateX }],
			}}
		/>
	);
};

const Tab = forwardRef(
	(
		{ item, onItemPress }: { item: { name: string }; onItemPress: () => void },
		ref
	) => {
		return (
			<TouchableOpacity onPress={onItemPress}>
				<View ref={ref}>
					<Text style={styles.menuText}>{item.name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
);

const Tabs = ({
	scrollX,
	data,
	onItemPress,
}: {
	scrollX: Animated.Value;
	data: { name: string; ref: React.RefObject<any>; index: number }[];
	onItemPress: (index: number) => void;
}) => {
	const [measures, setMeasures] = useState<
		{
			x: number;
			y: number;
			width: number;
			height: number;
		}[]
	>([]);

	const containerRef = useRef<View>();

	useEffect(() => {
		const m = [];
		data.forEach(item => {
			item.ref.current.measureLayout(
				containerRef.current,
				(x: any, y: any, width: any, height: any) => {
					m.push({ x, y, width, height });

					if (m.length === data.length) setMeasures(m);
				}
			);
		});
	}, [data]);

	return (
		<View style={{ position: 'absolute', width }}>
			<View
				ref={containerRef}
				style={{
					justifyContent: 'space-evenly',
					flex: 1,
					flexDirection: 'row',
				}}
			>
				{data.map((item, index) => {
					return (
						<Tab
							key={item.name}
							item={item}
							ref={item.ref}
							onItemPress={() => onItemPress(index)}
						/>
					);
				})}
			</View>

			{measures.length > 0 && (
				<Indicator measures={measures} scrollX={scrollX} data={data} />
			)}
		</View>
	);
};

const Crypto = () => {
	const { id } = useLocalSearchParams();
	const { data, isLoading, error } = useGetCryptoInfo(id as string);
	const ref = useRef<Animated.FlatList>(null);

	const scrollX = useRef(new Animated.Value(0)).current;

	const onItemPress = useCallback((itemIndex: number) => {
		ref.current?.scrollToOffset({ offset: itemIndex * width });
	}, []);

	const DATA = [
		{
			name: 'Overview',
			content: (
				<SectionList
					style={styles.container}
					contentInsetAdjustmentBehavior="automatic"
					keyExtractor={(item, index) => item.title + index}
					sections={[{ data: [{ title: 'Section 1' }] }]}
					renderItem={() => (
						<>
							<ChartCartesian />
							<Details description={data?.description} />
						</>
					)}
				/>
			),
			ref: createRef(),
		},
		{
			name: 'News',
			content: <ErrorBackground subtitle="Crypto Detail" title="News" />,
			ref: createRef(),
		},
		{
			name: 'Orders',
			content: <ErrorBackground subtitle="Crypto Detail" title="Orders" />,
			ref: createRef(),
		},
		{
			name: 'Transactions',
			content: (
				<ErrorBackground subtitle="Crypto Detail" title="Transactions" />
			),
			ref: createRef(),
		},
	];

	return (
		<>
			<ScreenHeader title={data?.name} logoUrl={data?.logo} />

			{isLoading && <LoadingBackground />}

			{error && <ErrorBackground subtitle={error.message} />}

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
					<View
						style={{
							paddingBottom: height * 0.1,
							width,
							height,
						}}
					>
						{item.content}
					</View>
				)}
			/>

			<Tabs scrollX={scrollX} data={DATA} onItemPress={onItemPress} />

			{/* {!isLoading && !error && data && (
				<SectionList
					style={styles.container}
					contentInsetAdjustmentBehavior="automatic"
					keyExtractor={(item, index) => item.title + index}
					sections={[{ data: [{ title: 'Section 1' }] }]}
					renderItem={() => (
						<>
							<ChartCartesian />
							<Details description={data.description} />
						</>
					)}
				/>
			)} */}
		</>
	);
};

export default Crypto;
