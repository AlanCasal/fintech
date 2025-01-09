import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BoxCorners from '../BoxCorners';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

interface TableProps {
	items: any[];
	emptyMessage: string;
}

const Table = ({ items, emptyMessage }: TableProps) => {
	return (
		<View style={styles.tableContainer}>
			{!items.length && <Text style={styles.emptyMessage}>{emptyMessage}</Text>}

			{items.map((item, index) => {
				const isPositive = item.amount > 0;

				return (
					<View
						style={[
							styles.tableItem,
							items.length - 1 !== index && styles.itemDivider,
						]}
						key={item.id}
					>
						<Ionicons
							name={isPositive ? 'caret-down' : 'caret-up'}
							size={20}
							color={isPositive ? Colors.success : Colors.lightGray}
						/>
						<View style={styles.itemContent}>
							<Text style={styles.itemTitle}>{item.title}</Text>
							<Text style={styles.itemSubtitle}>
								{new Date(item.date).toLocaleDateString()}
							</Text>
						</View>
						<Text
							style={{
								...styles.text,
								...(isPositive && styles.textSuccess),
							}}
						>
							{isPositive && '+ '}
							{item.amount}€
						</Text>
					</View>
				);
			})}
			<BoxCorners
				cornerTopLeft
				cornerBottomRight
				width={'10%'}
				height={'30%'}
				borderColor={Colors.primaryMuted}
				borderWidth={StyleSheet.hairlineWidth}
			/>
		</View>
	);
};

export default Table;
