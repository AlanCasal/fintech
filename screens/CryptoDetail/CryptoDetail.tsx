import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SectionList } from 'react-native';
import ChartCartesian from '@/components/ChartCartesian';
import ScreenHeader from './components/ScreenHeader';
import Details from './components/Details';
import MenuOptions from './components/MenuOptions';
import Actions from './components/Actions';
import SymbolLogo from './components/SymbolLogo';
import { styles } from './styles';
import { useGetCryptoInfo } from './api/hooks/useGetCryptoInfo';
import LoadingBackground from '@/components/LoadingBackground';
import ErrorBackground from '@/components/ErrorBackground';

const Crypto = () => {
	const { id } = useLocalSearchParams();
	const { data, isLoading, error } = useGetCryptoInfo(id as string);

	return (
		<>
			<ScreenHeader title={data?.name} />

			{isLoading && <LoadingBackground />}

			{error && <ErrorBackground />}

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
