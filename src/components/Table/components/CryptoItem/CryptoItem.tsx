import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';
import { Cryptocurrency, CurrencyData } from '@/src/interfaces/crypto';
import { Link } from 'expo-router';
import { styles } from './styles';

interface CryptoItemProps {
	item: CurrencyData;
	withBottomDivider?: boolean;
	currenciesData: Cryptocurrency[];
}

const CryptoItem = ({
	item,
	withBottomDivider,
	currenciesData,
}: CryptoItemProps) => {
	const { percent_change_1h: percentChange, price } = item.quote.EUR;

	const isPositive = percentChange > 0;
	const isNegative = percentChange < 0;

	let color = Colors.lightGray;
	if (isPositive) color = Colors.positive;
	else if (isNegative) color = Colors.negative;

	const tableItemStyle = {
		...styles.tableItem,
		...(withBottomDivider && styles.itemDivider),
	};

	return (
		<Link href={`/crypto/${item.id}`} key={item.id} asChild>
			<TouchableOpacity style={tableItemStyle}>
				<Image
					source={{ uri: currenciesData?.[item.id]?.logo }}
					style={styles.currencyImage}
				/>

				<View style={styles.itemContent}>
					<Text style={styles.itemTitle}>{item.name}</Text>
					<Text style={styles.itemSubtitle}>{item.symbol}</Text>
				</View>

				<View style={styles.currencyPriceWrapper}>
					<Text style={styles.numbers}>€ {price.toFixed(2)}</Text>
					<View style={styles.priceChangeWraper}>
						{(isPositive || isNegative) && (
							<Ionicons
								name={isPositive ? 'caret-up' : 'caret-down'}
								size={16}
								color={color}
							/>
						)}
						<Text style={[styles.numbers, { color }]}>
							{percentChange.toFixed(2)} %
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default CryptoItem;
