import { Text, ScrollView, View } from 'react-native';
import React, { useMemo } from 'react';
import { useBalanceStore } from '@/store/balanceStore';

import WidgetList from '@/components/WidgetList';
import { styles } from './styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';
import Balance from './components/Balance';
import ActionButtons from './components/ActionButtons';
import Transactions from './components/Transactions';

const Home = () => {
	const headerHeight = useHeaderHeight();

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ paddingTop: headerHeight }}
		>
			<Balance />

			<ActionButtons />

			<Transactions />

			<WidgetList />
		</ScrollView>
	);
};

export default Home;
