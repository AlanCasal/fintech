import React from 'react';
import { View } from 'react-native';
import RoundButton from '@/components/Buttons/RoundButton';
import Dropdown from '@/components/Dropdown';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';

const ActionButtons = () => {
	const { runTransaction, clearTransactions } = useBalanceStore();

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
	);
};

export default ActionButtons;
