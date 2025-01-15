import React from 'react';
import { View, Text, StyleProp, TextStyle } from 'react-native';
import BoxCorners from '../BoxCorners';
import { defaultStyles } from '@/src/constants/Styles';
import { styles } from './styles';

interface CyberHeaderTitleProps {
	title: string;
	subtitle?: string | React.ReactNode;
	subtitleStyle?: StyleProp<TextStyle>;
	titleStyle?: StyleProp<TextStyle>;
}

const CyberHeaderTitle = ({
	title,
	subtitle,
	subtitleStyle,
	titleStyle,
}: CyberHeaderTitleProps) => {
	const titleStyles = [styles.headerText, titleStyle];
	const subtitleStyles = [defaultStyles.descriptionText, subtitleStyle];

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={titleStyles} numberOfLines={1} adjustsFontSizeToFit>
					{title}
				</Text>

				<BoxCorners cornerBottomRight cornerTopLeft />
			</View>

			{subtitle && <Text style={subtitleStyles}>{subtitle}</Text>}
		</View>
	);
};

export default CyberHeaderTitle;
