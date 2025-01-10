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
import Table from '@/components/Table';

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
				<Table
					items={currencies}
					extraData={currenciesData}
					tableType="crypto"
					emptyMessage="No data available"
				/>
			</View>
		</ScrollView>
	);
};

export default Crypto;
