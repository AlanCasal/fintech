import React from 'react';
import { View, Text } from 'react-native';

import { useBalanceStore } from '@/store/balanceStore';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export const tiles = [
	{
		id: 'spent',
	},
	{
		id: 'cashback',
	},
	{
		id: 'recent',
	},
	{
		id: 'cards',
	},
] as const;

type TileId = (typeof tiles)[number]['id'];

interface TileProps {
	id: TileId;
	onLongPress: () => void;
}

const Tile = ({ id }: TileProps) => {
	const { transactions } = useBalanceStore();

	if (id === 'spent') {
		return (
			<View style={styles.container} pointerEvents="none">
				<Text style={styles.title}>Spent this month</Text>
				<Text style={styles.subtitle}>1024€</Text>
			</View>
		);
	}

	if (id === 'cashback') {
		return (
			<View
				style={[styles.container, styles.cashbackContainer]}
				pointerEvents="none"
			>
				<View style={styles.cashbackTextContainer}>
					<View style={styles.cashbackTitleContainer}>
						<Text style={styles.cashbackTitle}>5%</Text>
					</View>
					<Text style={styles.cashbackSubtitle}>Cashback</Text>
				</View>
			</View>
		);
	}

	if (id === 'recent') {
		const lastTransaction = transactions[transactions.length - 1];

		return (
			<View style={styles.container} pointerEvents="none">
				<View>
					<Text style={styles.title}>Recent transaction</Text>

					{!transactions.length && (
						<Text style={styles.noTransactions}>No transactions</Text>
					)}

					{transactions.length > 0 && (
						<>
							<Text
								style={{
									...styles.transactionAmount,
									...(lastTransaction.amount > 0 && styles.textSuccess),
								}}
							>
								{lastTransaction.amount > 0 && '+ '}
								{lastTransaction.amount}€
							</Text>
							<Text style={styles.transactionTitle}>
								{lastTransaction.title}
							</Text>
						</>
					)}
				</View>
			</View>
		);
	}

	if (id === 'cards') {
		return (
			<View style={styles.container} pointerEvents="none">
				<Text style={styles.cardsTitle}>Cards</Text>
				<Ionicons
					name="card"
					size={50}
					color={Colors.primaryMuted}
					style={styles.cardsIcon}
				/>
			</View>
		);
	}
};

export default Tile;
