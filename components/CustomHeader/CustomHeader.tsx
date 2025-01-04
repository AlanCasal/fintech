import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Link } from 'expo-router';

const CustomHeader = () => {
	const { top } = useSafeAreaInsets();
	return (
		<BlurView intensity={80} tint="extraLight" style={{ paddingTop: top }}>
			<View style={styles.content}>
				<Link href="/(authenticated)/(modals)/account" asChild>
					<TouchableOpacity style={styles.userButton}>
						<Text style={styles.userText}>AC</Text>
					</TouchableOpacity>
				</Link>

				<View style={styles.searchWrapper}>
					<Ionicons
						name="search"
						size={20}
						color={Colors.dark}
						style={styles.searchIcon}
					/>
					<TextInput
						placeholder="Search"
						style={styles.searchInput}
						placeholderTextColor={Colors.dark}
					/>
				</View>

				<View style={styles.circle}>
					<Ionicons name="stats-chart" size={20} color={Colors.dark} />
				</View>
				<View style={styles.circle}>
					<Ionicons name="card" size={20} color={Colors.dark} />
				</View>
			</View>
		</BlurView>
	);
};

export default CustomHeader;
