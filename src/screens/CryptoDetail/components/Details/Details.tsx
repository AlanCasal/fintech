import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { defaultStyles } from '@/src/constants/Styles';
import BoxCorners from '@/src/components/BoxCorners';
import Colors from '@/src/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Details = ({ description }: { description?: string }) => {
	const { bottom } = useSafeAreaInsets();

	return (
		<View
			style={[
				defaultStyles.tableContainer,
				styles.overview,
				{ paddingBottom: bottom + 50 },
			]}
		>
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
