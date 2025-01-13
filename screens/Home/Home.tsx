import { SectionList } from 'react-native';
import React from 'react';

import WidgetList from '@/components/WidgetList';
import { styles } from './styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import Balance from './components/Balance';
import ActionButtons from './components/ActionButtons';
import Transactions from './components/Transactions';

const Home = () => (
	<SectionList
		style={styles.container}
		contentInsetAdjustmentBehavior="automatic"
		keyExtractor={(item, index) => item.title + index}
		sections={[{ data: [{ title: 'Section 1' }] }]}
		ListHeaderComponent={() => <Balance />}
		renderSectionHeader={() => <ActionButtons />}
		renderItem={() => <Transactions />}
		renderSectionFooter={() => <WidgetList />}
	/>
);

export default Home;
