import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import { Transaction, useBalanceStore } from '@/store/balanceStore';
import Table from '@/components/Table';
import BoxCorners from '@/components/BoxCorners';
import Colors from '@/constants/Colors';
import CustomModal from '@/components/Modals/CustomModal';

const SeeMoreButton = ({ handleSeeMore }: { handleSeeMore: () => void }) => (
	<TouchableOpacity onPress={handleSeeMore}>
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
);

interface ContentProps {
	sortedTransactions: Transaction[];
	maxHeight?: boolean;
	marginHorizontal?: boolean;
	tableWithSolidColor?: boolean;
	maxItems?: number;
	handleSeeMore?: () => void;
}

const Content = ({
	sortedTransactions,
	maxHeight = false,
	marginHorizontal = false,
	tableWithSolidColor = false,
	maxItems = 0,
	handleSeeMore,
}: ContentProps) => (
	<>
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
				solidColor={tableWithSolidColor}
				maxItems={maxItems}
			/>
		</View>

		{sortedTransactions.length > 3 && !!handleSeeMore && (
			<SeeMoreButton handleSeeMore={handleSeeMore} />
		)}
	</>
);

const Transactions = () => {
	const { transactions } = useBalanceStore();

	const [isExpanded, setIsExpanded] = useState(false);

	const sortedTransactions = useMemo(() => {
		return transactions.slice().reverse();
	}, [transactions]);

	return (
		<View>
			<Text style={defaultStyles.sectionHeader}>Transactions</Text>

			<Content
				sortedTransactions={sortedTransactions}
				maxHeight
				marginHorizontal
				maxItems={3}
				handleSeeMore={() => setIsExpanded(true)}
			/>

			<CustomModal
				isModalVisible={isExpanded}
				onClose={() => setIsExpanded(false)}
				title="> Transactions"
			>
				<Content sortedTransactions={sortedTransactions} tableWithSolidColor />
			</CustomModal>
		</View>
	);
};

export default Transactions;
