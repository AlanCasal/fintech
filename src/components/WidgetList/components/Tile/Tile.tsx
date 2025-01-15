import React from 'react';
import { View, Text } from 'react-native';

import { useBalanceStore } from '@/src/store/balanceStore';
import Colors from '@/src/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
			<View style={[styles.container]} pointerEvents="none">
				<Text style={[styles.title, { width: '70%' }]}>Spent this month</Text>

				<MaterialCommunityIcons
					name={'drag'}
					size={20}
					color={Colors.lightGray}
					style={styles.dragIcon}
				/>

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
				<MaterialCommunityIcons
					name={'drag'}
					size={20}
					color={Colors.lightGray}
					style={styles.dragIcon}
				/>

				<View style={styles.cashbackTextContainer}>
					<View style={styles.cashbackTitleContainer}>
						<Text style={styles.cashbackTitle}>+5%</Text>
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
				<MaterialCommunityIcons
					name={'drag'}
					size={20}
					color={Colors.lightGray}
					style={styles.dragIcon}
				/>

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
						<Text style={styles.transactionTitle}>{lastTransaction.title}</Text>
					</>
				)}
			</View>
		);
	}

	if (id === 'cards') {
		return (
			<View style={styles.container} pointerEvents="none">
				<MaterialCommunityIcons
					name={'drag'}
					size={20}
					color={Colors.lightGray}
					style={styles.dragIcon}
				/>

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
