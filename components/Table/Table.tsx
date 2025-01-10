import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BoxCorners from '../BoxCorners';
import Colors from '@/constants/Colors';
import { styles } from './styles';
import TransactionItem from './components/TransactionItem';

interface TableProps {
	items: any[];
	emptyMessage: string;
}

const Table = ({ items, emptyMessage }: TableProps) => {
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
				const withDivider = items.length - 1 !== index;

				return (
					<TransactionItem
						item={item}
						withDivider={withDivider}
						key={item.id}
					/>
				);
			})}
		</View>
	);
};

export default Table;
