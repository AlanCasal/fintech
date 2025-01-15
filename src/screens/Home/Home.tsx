import { SectionList } from 'react-native';
import React from 'react';

import WidgetList from '@/src/components/WidgetList';
import { styles } from './styles';
import Balance from './components/Balance';
import ActionButtons from './components/ActionButtons';
import Transactions from './components/Transactions';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHeaderHeight } from '@react-navigation/elements';

const Home = () => {
	const headerHeight = useHeaderHeight();

	return (
		<SectionList
			style={[styles.container, { marginTop: headerHeight - 12 }]}
			contentInsetAdjustmentBehavior="automatic"
			keyExtractor={(item, index) => item.title + index}
			sections={[{ data: [{ title: 'Section 1' }] }]}
			ListHeaderComponent={() => <Balance />}
			renderSectionHeader={() => <ActionButtons />}
			renderItem={() => <Transactions />}
			renderSectionFooter={() => <WidgetList />}
		/>
	);
};

export default Home;
