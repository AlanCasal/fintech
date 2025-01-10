import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

const CATEGORIES = ['Overview', 'News', 'Orders', 'Transactions'];

const MenuOptions = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<View style={styles.menuWrapper}>
			{CATEGORIES.map((menu, index) => {
				const isActive = index === activeIndex;

				return (
					<TouchableOpacity
						onPress={() => setActiveIndex(index)}
						key={menu}
						style={[styles.menuButton, isActive && styles.menuButtonActive]}
					>
						<Text style={[styles.menuText, isActive && styles.menuTextActive]}>
							{menu}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default MenuOptions;
