import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Transaction } from '@/store/balanceStore';
import Colors from '@/constants/Colors';

interface TransactionItemProps {
	item: Transaction;
	withDivider?: boolean;
}

const TransactionItem = ({ item, withDivider }: TransactionItemProps) => {
	const isPositive = item.amount > 0;
	const tableItemStyle = [styles.tableItem, withDivider && styles.itemDivider];

	return (
		<View style={tableItemStyle}>
			<Ionicons
				name={isPositive ? 'caret-down' : 'caret-up'}
				size={20}
				color={isPositive ? Colors.success : Colors.lightGray}
			/>

			<View style={styles.itemContent}>
				<Text style={styles.itemTitle}>{item.title}</Text>
				<Text style={styles.itemSubtitle}>
					{new Date(item.date).toLocaleDateString()}
				</Text>
			</View>

			<Text
				style={{
					...styles.text,
					...(isPositive && styles.textSuccess),
				}}
			>
				{isPositive && '+ '}
				{item.amount}€
			</Text>
		</View>
	);
};

export default TransactionItem;
