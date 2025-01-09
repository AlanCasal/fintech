import { View, Text } from 'react-native';
import React from 'react';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import BoxCorners from '@/components/BoxCorners';
import CyberDots from '@/components/CyberDots';

const Balance = () => {
	const { balance } = useBalanceStore();

	const balanceColor = balance() > 0 ? Colors.lightGray : Colors.error;

	return (
		<>
			<CyberDots position="top" height="70%" />
			<View style={styles.account}>
				<View style={styles.balanceRow}>
					<Text style={[styles.balanceAmount, { color: balanceColor }]}>
						{balance()}
					</Text>
					<Text style={[styles.balanceCurrency, { color: balanceColor }]}>
						€
					</Text>
				</View>

				<BoxCorners
					cornerTopLeft
					cornerBottomRight
					borderColor={Colors.primaryMuted}
					borderWidth={1}
				/>
			</View>
		</>
	);
};

export default Balance;
