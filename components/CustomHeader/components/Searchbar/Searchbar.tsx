import { View, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { styles } from './styles';

const Searchbar = () => {
	return (
		<View style={styles.searchWrapper}>
			<Ionicons
				name="search"
				size={20}
				color={Colors.darkBackground}
				style={styles.searchIcon}
			/>
			<TextInput
				placeholder="Search"
				style={styles.searchInput}
				placeholderTextColor={Colors.darkBackground}
			/>
		</View>
	);
};

export default Searchbar;
