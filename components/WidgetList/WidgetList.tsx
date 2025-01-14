/* eslint-disable no-console */
import React from 'react';
import { View, Text } from 'react-native';
import Tile from './components/Tile';
import SortableList from './components/SortableList';
import { tiles } from './components/Tile/Tile';
import { defaultStyles } from '@/constants/Styles';
import { styles } from './styles';
import CyberDots from '../CyberDots';

const WidgetList = () => {
	return (
		<View style={styles.container}>
			<CyberDots position="bottom" height="10%" />
			<Text style={[defaultStyles.sectionHeader, styles.header]}>Widgets</Text>

			<SortableList editing={true} onDragEnd={() => true}>
				{tiles.map((tile, index) => (
					<Tile
						onLongPress={() => true}
						key={tile.id + '-' + index}
						id={tile.id}
					/>
				))}
			</SortableList>
		</View>
	);
};

export default WidgetList;
