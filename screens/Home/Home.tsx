import { Text, ScrollView, View } from 'react-native';
import React from 'react';
import { useBalanceStore } from '@/store/balanceStore';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import RoundButton from '@/components/RoundButton';
import Dropdown from '@/components/Dropdown';
import WidgetList from '@/components/WidgetList';
import { styles } from './styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';

const Home = () => {
	const headerHeight = useHeaderHeight();
	const { balance, transactions, runTransaction, clearTransactions } =
		useBalanceStore();

	const handleAddMoney = () => {
		const amount =
			Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);

		runTransaction({
			id: Math.random().toString(),
			amount,
			date: new Date(),
			title: `${amount > 0 ? 'Received' : 'Sent'} Money`,
		});
	};

	const handleClearTransactions = () => {
		clearTransactions();
	};

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ paddingTop: headerHeight }}
		>
			<View style={styles.account}>
				<View style={styles.balanceRow}>
					<Text style={styles.balanceAmount}>${balance()}</Text>
					<Text style={styles.balanceCurrency}>€</Text>
				</View>
			</View>

			<View style={styles.actionRow}>
				<RoundButton icon={'add'} label="Add Money" onPress={handleAddMoney} />
				<RoundButton
					icon={'refresh'}
					label="Exchange"
					onPress={handleClearTransactions}
				/>
				<RoundButton icon={'list'} label="Details" />
				<Dropdown />
			</View>

			<Text style={defaultStyles.sectionHeader}>Transactions</Text>

			<View style={styles.transactions}>
				{!transactions.length && (
					<Text style={styles.noTransactions}>No transactions</Text>
				)}
				{transactions.map(transaction => (
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

			<Text style={defaultStyles.sectionHeader}>Widgets</Text>

			<WidgetList />
		</ScrollView>
	);
};

export default Home;
