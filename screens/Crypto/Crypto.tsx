import { View, Text, Image } from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { useQuery } from '@tanstack/react-query';
import { CurrencyData } from '@/interfaces/crypto';
import { styles } from './styles';
import LoadingSpinner from '@/components/LoadingSpinner';

const Crypto = () => {
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
		<View style={defaultStyles.container}>
			{!!currencies &&
				currencies.map((currency: CurrencyData) => (
					<View style={styles.currencyWrapper} key={currency.id}>
						<Image
							source={{ uri: currenciesData?.[currency.id]?.logo }}
							style={styles.currencyImage}
						/>
						<Text>{currency.name}</Text>
					</View>
				))}
		</View>
	);
};

export default Crypto;
