import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BoxCorners from '../BoxCorners';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import TransactionItem from './components/TransactionItem';
import CryptoItem from './components/CryptoItem';

interface TableProps {
	items: any[];
	extraData?: any;
	tableType: 'transaction' | 'crypto';
	emptyMessage: string;
}

const Table = ({ items, tableType, emptyMessage, extraData }: TableProps) => {
	return (
		<View style={styles.tableContainer}>
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
				const withBottomDivider = items.length - 1 !== index;

				if (tableType === 'transaction') {
					return (
						<TransactionItem
							item={item}
							withBottomDivider={withBottomDivider}
							key={item.id}
						/>
					);
				}

				return (
					<CryptoItem
						item={item}
						withBottomDivider={withBottomDivider}
						key={item.id}
						currenciesData={extraData}
					/>
				);
			})}
		</View>
	);
};

export default Table;
