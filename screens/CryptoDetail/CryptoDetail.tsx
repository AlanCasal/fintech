import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SectionList, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { CryptoInfo } from '@/interfaces/crypto';
import ChartCartesian from '@/components/ChartCartesian';
import ScreenHeader from './components/ScreenHeader';
import Details from './components/Details';
import MenuOptions from './components/MenuOptions';
import Actions from './components/Actions';
import SymbolLogo from './components/SymbolLogo';
import LoadingSpinner from '@/components/LoadingSpinner';
import { styles } from './styles';
import { ERROR_MESSAGE_FETCHING_DATA } from '@/constants/Utils';

const Crypto = () => {
	const { id } = useLocalSearchParams();
	const { data, isLoading, error } = useQuery<CryptoInfo, Error>({
		queryKey: ['info', id],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${id}`);
			const info = await response.json();
			return info[+id];
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

			{error && (
				<View style={styles.centerContent}>
					<Text style={styles.errorTitle}>Error</Text>
					<Text style={styles.errorMessage}>
						{error?.message || ERROR_MESSAGE_FETCHING_DATA}
					</Text>
				</View>
			)}

			{data && (
				<SectionList
					style={styles.container}
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
		</>
	);
};

export default Crypto;
