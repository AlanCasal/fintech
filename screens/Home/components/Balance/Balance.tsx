import { View, Text } from 'react-native';
import React from 'react';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';

const Balance = () => {
	const { balance } = useBalanceStore();

	return (
		<View style={styles.account}>
			<View style={styles.balanceRow}>
				<Text style={styles.balanceAmount}>${balance()}</Text>
				<Text style={styles.balanceCurrency}>€</Text>
			</View>
		</View>
	);
};

export default Balance;
