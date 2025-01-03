import { View, Text, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { CartesianChart, Line, useChartPressState } from 'victory-native';
import { Circle, useFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';
import * as Haptics from 'expo-haptics';
import Animated, {
	SharedValue,
	useAnimatedProps,
} from 'react-native-reanimated';
import { Ticker } from '@/interfaces/crypto';
import { useQuery } from '@tanstack/react-query';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import LoadingSpinner from '@/components/LoadingSpinner';
import SpaceMonoRegular from '@/assets/fonts/SpaceMono-Regular.ttf';

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const ToolTip = ({
	x,
	y,
}: {
	x: SharedValue<number>;
	y: SharedValue<number>;
}) => <Circle cx={x} cy={y} r={8} color={Colors.primary} />;

// eslint-disable-next-line quotes, @typescript-eslint/quotes
const DEFAULT_ERROR_MESSAGE = "Couldn't load chart data";

const ChartCartesian = () => {
	const { data, isLoading, error } = useQuery<Ticker[], Error>({
		queryKey: ['tickers'],
		queryFn: async (): Promise<Ticker[]> => {
			const response = await fetch('/api/tickers');
			const tickers = await response.json();
			return tickers;
		},
	});

	const font = useFont(SpaceMonoRegular, 12);
	const { state, isActive } = useChartPressState<{
		x: string | number;
		y: Record<'price', number>;
	}>({ x: 0, y: { price: 0 } });

	// This runs on the UI native thread, so it's more efficient than using a state variable
	const animatedPriceText = useAnimatedProps(() => ({
		text: `${state.y.price.value.value.toFixed(2)} €`,
		defaultValue: '',
	}));

	const animatedDateText = useAnimatedProps(() => ({
		text: new Date(state.x.value.value).toLocaleDateString(),
		defaultValue: '',
	}));

	useEffect(() => {
		if (isActive) {
			Haptics.impactAsync(/* Haptics.ImpactFeedbackStyle.Light */);
		}
	}, [isActive]);

	return (
		<View
			style={{
				...defaultStyles.block,
				...(data && !isLoading && !error && { height: 500 }),
			}}
		>
			{isLoading && (
				<View style={styles.loadingContainer}>
					<LoadingSpinner />
				</View>
			)}

			{error && (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>
						{error?.message || DEFAULT_ERROR_MESSAGE}
					</Text>
				</View>
			)}

			{data && !isLoading && (
				<>
					<View>
						{!isActive ? (
							<>
								<Text style={styles.chartTodayTextPrice}>
									{data.at(-1)?.price.toFixed(2)} €
								</Text>
								<Text style={styles.chartTodayText}>Today</Text>
							</>
						) : (
							<>
								<AnimatedTextInput
									editable={false}
									underlineColorAndroid="transparent"
									style={styles.chartTodayTextPrice}
									animatedProps={animatedPriceText}
								/>
								<AnimatedTextInput
									editable={false}
									underlineColorAndroid="transparent"
									style={styles.chartTodayText}
									animatedProps={animatedDateText}
								/>
							</>
						)}
					</View>

					<CartesianChart
						chartPressState={state}
						axisOptions={{
							font,
							tickCount: 5,
							labelOffset: { x: -2, y: 0 },
							labelColor: Colors.gray,
							formatYLabel: label => `${label}€`,
							formatXLabel: ms => format(new Date(ms), 'MMM'),
						}}
						data={data}
						xKey="timestamp"
						yKeys={['price'] as const}
					>
						{({ points }) => (
							<>
								{isActive && (
									<ToolTip x={state.x.position} y={state.y.price.position} />
								)}
								<Line
									points={points.price}
									color={Colors.primary}
									strokeWidth={3}
								/>
							</>
						)}
					</CartesianChart>
				</>
			)}
		</View>
	);
};

export default ChartCartesian;
