/* eslint-disable no-console */
import React from 'react';
import { View, Text } from 'react-native';
import Tile from './components/Tile';
import SortableList from './components/SortableList';
import { tiles } from './components/Tile/Tile';
import { defaultStyles } from '@/constants/Styles';
import { styles } from './styles';

const WidgetList = () => {
	return (
		<View style={styles.container}>
			<Text style={defaultStyles.sectionHeader}>Widgets</Text>

			<SortableList
				editing={true}
				onDragEnd={positions => console.log(JSON.stringify(positions, null, 2))}
			>
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
