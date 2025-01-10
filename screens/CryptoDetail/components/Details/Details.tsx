import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';
import BoxCorners from '@/components/BoxCorners';
import Colors from '@/constants/Colors';

const Details = ({ description }: { description?: string }) => {
	return (
		<View style={[defaultStyles.tableContainer, styles.overview]}>
			{!description ? (
				<Text style={styles.description}>No description available</Text>
			) : (
				<>
					<Text style={styles.subtitle}>Details</Text>
					<View style={styles.detailsContainer}>
						<BoxCorners
							cornerTopLeft
							cornerBottomRight
							borderWidth={StyleSheet.hairlineWidth}
							borderColor={Colors.primaryMuted}
							width={'40%'}
							height={30}
						/>
						<Text style={styles.description}>{description}</Text>
					</View>
				</>
			)}
		</View>
	);
};

export default Details;
