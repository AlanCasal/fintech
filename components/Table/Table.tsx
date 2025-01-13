import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BoxCorners from '../BoxCorners';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import TransactionItem from './components/TransactionItem';
import CryptoItem from './components/CryptoItem';
import { Transaction } from '@/store/balanceStore';
import { CurrencyData, Cryptocurrency } from '@/interfaces/crypto';

type TableTypes = {
	transaction: Transaction;
	crypto: CurrencyData;
};

interface TableProps<T extends keyof TableTypes> {
	items: TableTypes[T][];
	extraData?: T extends 'crypto' ? Cryptocurrency[] : never;
	tableType: T;
	emptyMessage: string;
	solidColor?: boolean;
	maxItems?: number;
}

const Table = <T extends keyof TableTypes>({
	items,
	tableType,
	emptyMessage,
	extraData,
	solidColor = false,
	maxItems = 0,
}: TableProps<T>) => {
	return (
		<View
			style={[
				styles.tableContainer,
				solidColor && { backgroundColor: Colors.darkBackground },
			]}
		>
			<BoxCorners
				cornerTopLeft
				cornerBottomRight
				width={'10%'}
				height={'30%'}
				borderColor={Colors.primaryMuted}
				borderWidth={StyleSheet.hairlineWidth}
			/>

			{!items.length && <Text style={styles.emptyMessage}>{emptyMessage}</Text>}

			{items.map((item, index) => {
				const isNotLastItem = items.length - 1 !== index;
				const isMaxItems = !maxItems || index + 1 < maxItems;
				const withBottomDivider = isNotLastItem && isMaxItems;

				if (tableType === 'transaction') {
					return (
						<TransactionItem
							item={item as Transaction}
							withBottomDivider={withBottomDivider}
							key={item.id}
						/>
					);
				}

				return (
					<CryptoItem
						item={item as CurrencyData}
						withBottomDivider={withBottomDivider}
						key={item.id}
						currenciesData={extraData as Cryptocurrency[]}
					/>
				);
			})}
		</View>
	);
};

export default Table;
