import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { CurrencyData } from '@/interfaces/crypto';
import { styles } from './styles';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Link } from 'expo-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import { useGetCryptoList } from './api/hooks/useGetCryptoList';
import { useGetCryptoInfo } from './api/hooks/useGetCryptoInfo';
import Colors from '@/constants/Colors';

const Crypto = () => {
	const headerHeight = useHeaderHeight();
	const { currencies, currenciesLoading, currenciesError } = useGetCryptoList();

	const ids = currencies
		?.map((currency: CurrencyData) => currency.id)
		.join(',');

	const { currenciesData, infoLoading, infoError } = useGetCryptoInfo(ids);

	if (currenciesLoading || infoLoading) return <LoadingSpinner />;
	if (currenciesError || infoError)
		return (
			<Text>
				Error:{' '}
				{currenciesError?.message || infoError?.message || 'Unknown error'}
			</Text>
		);

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ paddingTop: headerHeight }}
		>
			<Text style={defaultStyles.sectionHeader}>Latest Crypto</Text>

			<View style={defaultStyles.tableContainer}>
				{!!currencies &&
					currencies.map((currency: CurrencyData, index: number) => {
						const { percent_change_1h: percentChange, price } =
							currency.quote.EUR;
						const isPositive = percentChange > 0;
						const isNegative = percentChange < 0;

						let color = Colors.lightGray;
						if (isPositive) color = Colors.success;
						else if (isNegative) color = Colors.error;

						return (
							<Link href={`/crypto/${currency.id}`} key={currency.id} asChild>
								<TouchableOpacity
									style={{
										...styles.itemWrapper,
										...(index !== currencies.length - 1 && styles.itemDivider),
									}}
								>
									<Image
										source={{ uri: currenciesData?.[currency.id]?.logo }}
										style={styles.currencyImage}
									/>
									<View style={styles.currencyInfoWrapper}>
										<Text style={styles.currencyName}>{currency.name}</Text>
										<Text style={styles.currencySymbol}>{currency.symbol}</Text>
									</View>

									<View style={styles.currencyPriceWrapper}>
										<Text style={styles.numbers}>{price.toFixed(2)} €</Text>
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
					})}
			</View>
		</ScrollView>
	);
};

export default Crypto;
