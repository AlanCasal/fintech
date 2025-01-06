import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useBalanceStore } from '@/store/balanceStore';

const Transactions = () => {
	const { transactions } = useBalanceStore();

	const sortedTransactions = useMemo(() => {
		return transactions.slice().reverse();
	}, [transactions]);

	return (
		<View>
			<Text style={defaultStyles.sectionHeader}>Transactions</Text>

			<View style={styles.transactions}>
				{!sortedTransactions.length && (
					<Text style={styles.noTransactions}>No transactions</Text>
				)}
				{sortedTransactions.map(transaction => (
					<View style={styles.transaction} key={transaction.id}>
						<View style={styles.circle}>
							<Ionicons
								name={transaction.amount > 0 ? 'add' : 'remove'}
								size={20}
								color={Colors.dark}
							/>
						</View>
						<View style={styles.transactionDetails}>
							<Text style={styles.transactionTitle}>{transaction.title}</Text>
							<Text style={styles.transactionDate}>
								{new Date(transaction.date).toLocaleDateString()}
							</Text>
						</View>
						<Text>{transaction.amount}€</Text>
					</View>
				))}
			</View>
		</View>
	);
};

export default Transactions;
