import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import { useBalanceStore } from '@/store/balanceStore';
import Table from '@/components/Table';

const Transactions = () => {
	const { transactions } = useBalanceStore();

	const sortedTransactions = useMemo(() => {
		return transactions.slice().reverse();
	}, [transactions]);

	return (
		<View style={styles.container}>
			<Text style={defaultStyles.sectionHeader}>Transactions</Text>

			<View style={styles.tableContainer}>
				<Table items={sortedTransactions} emptyMessage="No transactions" />
			</View>
		</View>
	);
};

export default Transactions;
