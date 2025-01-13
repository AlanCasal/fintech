import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import { Transaction, useBalanceStore } from '@/store/balanceStore';
import Table from '@/components/Table';
import BoxCorners from '@/components/BoxCorners';
import Colors from '@/constants/Colors';
import CustomModal from '@/components/CustomModal';

const Content = ({
	sortedTransactions,
	maxHeight = false,
	marginHorizontal = false,
}: {
	sortedTransactions: Transaction[];
	maxHeight?: boolean;
	marginHorizontal?: boolean;
}) => {
	return (
		<View
			style={{
				...styles.tableContainer,
				...(maxHeight && { maxHeight: 200 }),
				...(marginHorizontal && { marginHorizontal: 20 }),
			}}
		>
			<Table
				items={sortedTransactions}
				tableType="transaction"
				emptyMessage="No transactions"
				solidColor
			/>
		</View>
	);
};

const Transactions = () => {
	const { transactions } = useBalanceStore();

	const [isExpanded, setIsExpanded] = useState(false);

	const sortedTransactions = useMemo(() => {
		return transactions.slice().reverse();
	}, [transactions]);

	return (
		<View style={styles.container}>
			<Text style={defaultStyles.sectionHeader}>Transactions</Text>

			<Content
				sortedTransactions={sortedTransactions}
				maxHeight
				marginHorizontal
			/>

			{transactions.length > 3 && (
				<TouchableOpacity onPress={() => setIsExpanded(true)}>
					<View style={styles.seeMoreContainer}>
						<Text style={styles.seeMoreText}>See More</Text>
						<BoxCorners
							cornerBottomLeft
							cornerTopRight
							width={'60%'}
							height={'100%'}
							borderWidth={StyleSheet.hairlineWidth}
							borderColor={Colors.primary}
						/>
					</View>
				</TouchableOpacity>
			)}

			<CustomModal
				isModalVisible={isExpanded}
				handleModal={() => setIsExpanded(false)}
				title="> Transactions"
			>
				<Content sortedTransactions={sortedTransactions} />
			</CustomModal>
		</View>
	);
};

export default Transactions;
