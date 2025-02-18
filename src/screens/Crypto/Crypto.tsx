/* eslint-disable import/no-extraneous-dependencies */
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { defaultStyles } from '@/src/constants/Styles';
import { CurrencyData } from '@/src/interfaces/crypto';
import { styles } from './styles';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useGetCryptoList } from './api/hooks/useGetCryptoList';
import { useGetCryptoInfo } from './api/hooks/useGetCryptoInfo';
import Table from '@/src/components/Table';
import LoadingBackground from '@/src/components/LoadingBackground';
import ErrorBackground from '@/src/components/ErrorBackground';

const Crypto = () => {
	const headerHeight = useHeaderHeight();
	const tabBarHeight = useBottomTabBarHeight();
	const { currencies, currenciesLoading, currenciesError } = useGetCryptoList();

	const ids = currencies
		?.map((currency: CurrencyData) => currency.id)
		.join(',');

	const { currenciesData, infoLoading, infoError } = useGetCryptoInfo(ids);

	if (currenciesLoading || infoLoading)
		return <LoadingBackground additionalPaddingBottom={tabBarHeight} />;

	if (currenciesError || infoError)
		return (
			<ErrorBackground
				subtitle={
					currenciesError?.message || infoError?.message || 'Unknown error'
				}
			/>
		);

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{
				paddingTop: headerHeight,
				paddingBottom: tabBarHeight + 20,
			}}
		>
			<Text style={defaultStyles.sectionHeader}>Latest</Text>

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
