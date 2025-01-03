import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SectionList, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { CryptoInfo } from '@/interfaces/crypto';
import { useHeaderHeight } from '@react-navigation/elements';
import ChartCartesian from '@/components/ChartCartesian';
import ScreenHeader from './components/ScreenHeader';
import Details from './components/Details';
import MenuOptions from './components/MenuOptions';
import Actions from './components/Actions';
import SymbolLogo from './components/SymbolLogo';
import LoadingSpinner from '@/components/LoadingSpinner';
import { styles } from './styles';

const ERROR_MESSAGE = "Couldn't load data.\nPlease try again later";

const Crypto = () => {
	const { id } = useLocalSearchParams();
	const headerHeight = useHeaderHeight();

	const { data, isLoading, error } = useQuery<CryptoInfo, Error>({
		queryKey: ['info', id],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${id}`);
			const data = await response.json();
			return data[+id];
		},
	});

	return (
		<>
			<ScreenHeader title={data?.name} />

			{isLoading && (
				<View style={styles.centerContent}>
					<LoadingSpinner />
				</View>
			)}

			{data && !isLoading && (
				<SectionList
					style={{ marginTop: headerHeight }}
					contentInsetAdjustmentBehavior="automatic"
					keyExtractor={(item, index) => item.title + index}
					sections={[{ data: [{ title: 'Section 1' }] }]}
					ListHeaderComponent={() => (
						<>
							<SymbolLogo symbol={data.symbol} logo={data.logo} />
							<Actions />
						</>
					)}
					renderSectionHeader={() => <MenuOptions />}
					renderItem={() => (
						<>
							<ChartCartesian />
							<Details description={data.description} />
						</>
					)}
				/>
			)}

			{error && (
				<View style={styles.centerContent}>
					<Text style={styles.errorTitle}>Error</Text>
					<Text style={styles.errorMessage}>
						{error?.message || ERROR_MESSAGE}
					</Text>
				</View>
			)}
		</>
	);
};

export default Crypto;
