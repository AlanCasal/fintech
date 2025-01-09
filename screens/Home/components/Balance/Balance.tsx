import { View, Text } from 'react-native';
import React from 'react';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';
import Colors from '@/constants/Colors';

const Balance = () => {
	const { balance } = useBalanceStore();

	const balanceColor = balance() > 0 ? Colors.lightGray : Colors.error;

	return (
		<View style={styles.account}>
			<View style={styles.balanceRow}>
				<Text style={[styles.balanceAmount, { color: balanceColor }]}>
					{balance()}
				</Text>
				<Text style={[styles.balanceCurrency, { color: balanceColor }]}>€</Text>
			</View>
		</View>
	);
};

export default Balance;
