import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { useQuery } from '@tanstack/react-query';
import { CurrencyData } from '@/interfaces/crypto';
import { styles } from './styles';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Link } from 'expo-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';

const Crypto = () => {
	const headerHeight = useHeaderHeight();
	const {
		data: currencies,
		isLoading: currenciesLoading,
		error: currenciesError,
	} = useQuery({
		queryKey: ['currencies'],
		queryFn: async () => {
			const response = await fetch('/api/listings');
			const data = await response.json();
			return data;
		},
	});

	const ids = currencies
		?.map((currency: CurrencyData) => currency.id)
		.join(',');

	const {
		data: currenciesData,
		isLoading: infoLoading,
		error: infoError,
	} = useQuery({
		enabled: !!ids,
		queryKey: ['info', ids],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${ids}`);
			const data = await response.json();
			return data;
		},
	});

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

			<View style={defaultStyles.block}>
				{!!currencies &&
					currencies.map((currency: CurrencyData) => {
						const { percent_change_1h: percentChange, price } =
							currency.quote.EUR;
						const isChangePositive = percentChange > 0;

						return (
							<Link href={`/crypto/${currency.id}`} key={currency.id} asChild>
								<TouchableOpacity style={styles.currencyWrapper}>
									<Image
										source={{ uri: currenciesData?.[currency.id]?.logo }}
										style={styles.currencyImage}
									/>
									<View style={styles.currencyInfoWrapper}>
										<Text style={styles.currencyName}>{currency.name}</Text>
										<Text style={styles.currencySymbol}>{currency.symbol}</Text>
									</View>

									<View style={styles.currencyPriceWrapper}>
										<Text style={styles.currencyPrice}>
											{price.toFixed(2)} €
										</Text>
										<View style={styles.priceChangeWraper}>
											<Ionicons
												name={isChangePositive ? 'caret-up' : 'caret-down'}
												size={16}
												color={isChangePositive ? 'green' : 'red'}
											/>
											<Text
												style={{
													color: isChangePositive ? 'green' : 'red',
												}}
											>
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
