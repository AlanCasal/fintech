import { View, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Tab from './components/Tab';
import Indicator from './components/Indicator';
import { styles } from './styles';

interface TabsIndicatorProps {
	scrollX: Animated.Value;
	data: {
		name: string;
		ref: React.RefObject<View>;
		index: number;
	}[];
	onItemPress: (index: number) => void;
}

type Measure = {
	x: number;
	y: number;
	width: number;
	height: number;
};

const TabsIndicator = ({ scrollX, data, onItemPress }: TabsIndicatorProps) => {
	const [measures, setMeasures] = useState<Measure[]>([]);
	const containerRef = useRef<View | null>(null);

	useEffect(() => {
		const m: Measure[] = [];
		data.forEach(item => {
			item.ref.current?.measureLayout(
				containerRef.current as unknown as number,
				(x: number, y: number, width: number, height: number) => {
					m.push({ x, y, width, height });

					if (m.length === data.length) setMeasures(m);
				}
			);
		});
	}, [data]);

	return (
		<View style={styles.container}>
			<View
				ref={containerRef as React.RefObject<View>}
				style={styles.tabsContainer}
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

export default TabsIndicator;
