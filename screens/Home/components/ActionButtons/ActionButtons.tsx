import React from 'react';
import { View, Text } from 'react-native';
import Dropdown from '@/components/Dropdown';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';
import CyberButtonSquare from '@/components/Buttons/CyberButtonSquare';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

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
			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					handlePress={handleAddMoney}
					width={60}
					rotate={180}
					icon={<Ionicons name={'add'} size={30} color={Colors.primaryMuted} />}
				/>
				<Text style={styles.label}>Add Money</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					handlePress={handleClearTransactions}
					width={60}
					rotate={180}
					icon={
						<Ionicons name={'refresh'} size={30} color={Colors.primaryMuted} />
					}
				/>
				<Text style={styles.label}>Exchange</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					rotate={180}
					width={60}
					icon={
						<Ionicons name={'list'} size={30} color={Colors.primaryMuted} />
					}
				/>
				<Text style={styles.label}>Details</Text>
			</View>

			<Dropdown
				button={
					<View style={styles.buttonContainer}>
						<CyberButtonSquare
							rotate={180}
							width={60}
							icon={
								<Ionicons
									name={'ellipsis-horizontal'}
									size={30}
									color={Colors.primaryMuted}
								/>
							}
						/>
						<Text style={styles.label}>More</Text>
					</View>
				}
			/>
		</View>
	);
};

export default ActionButtons;
