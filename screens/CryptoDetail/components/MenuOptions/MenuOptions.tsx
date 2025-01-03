import { Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

const CATEGORIES = ['Overview', 'News', 'Orders', 'Transactions'];

const MenuOptions = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.menuWrapper}
		>
			{CATEGORIES.map((menu, index) => {
				const isActive = index === activeIndex;

				return (
					<TouchableOpacity
						onPress={() => setActiveIndex(index)}
						key={menu}
						style={isActive ? styles.menuButtonActive : styles.menuButton}
					>
						<Text style={isActive ? styles.menuTextActive : styles.menuText}>
							{menu}
						</Text>
					</TouchableOpacity>
				);
			})}
		</ScrollView>
	);
};

export default MenuOptions;
