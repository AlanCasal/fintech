import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { defaultStyles } from '@/constants/Styles';

const Details = ({ description }: { description?: string }) => {
	return (
		<View style={[defaultStyles.block, styles.overview]}>
			{!description ? (
				<Text style={styles.description}>No description available</Text>
			) : (
				<>
					<Text style={styles.subtitle}>Details</Text>
					<Text style={styles.description}>{description}</Text>
				</>
			)}
		</View>
	);
};

export default Details;
