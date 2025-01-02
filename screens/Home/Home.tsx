import { Text, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import RoundButton from '@/components/RoundButton';
import Dropdown from '@/components/Dropdown';

const BALANCE = 1420;

const Home = () => {
	const handleAddMoney = () => {
		console.log('Add Money');
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.account}>
				<View style={styles.balanceRow}>
					<Text style={styles.balanceAmount}>${BALANCE}</Text>
					<Text style={styles.balanceCurrency}>€</Text>
				</View>
			</View>

			<View style={styles.actionRow}>
				<RoundButton icon={'add'} label="Add Money" onPress={handleAddMoney} />
				<RoundButton icon={'refresh'} label="Exchange" />
				<RoundButton icon={'list'} label="Details" />
				<Dropdown />
			</View>
		</ScrollView>
	);
};

export default Home;
