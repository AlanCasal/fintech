import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';
import Colors from '@/constants/Colors';
import BoxCorners from '@/components/BoxCorners';
import CyberDots from '@/components/CyberDots';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Balance = () => {
	const { balance } = useBalanceStore();

	const [isVisible, setIsVisible] = useState(true);

	const balanceColor =
		!isVisible || balance() > 0 ? Colors.lightGray : Colors.negative;

	return (
		<View style={styles.container}>
			<CyberDots position="top" height="70%" />

			<MaterialCommunityIcons
				name={isVisible ? 'eye' : 'eye-off'}
				size={30}
				color={Colors.primaryMuted}
				onPress={() => setIsVisible(prev => !prev)}
				style={styles.eyeIcon}
			/>

			<View style={styles.balanceRow}>
				<Text
					style={[styles.balanceAmount, { color: balanceColor }]}
					numberOfLines={1}
					adjustsFontSizeToFit
				>
					{isVisible ? balance() : '****'}
					<Text
						style={[styles.balanceCurrency, { color: balanceColor }]}
						numberOfLines={1}
						adjustsFontSizeToFit
					>
						{' €'}
					</Text>
				</Text>
			</View>

			<BoxCorners
				cornerBottomLeft
				cornerTopRight
				borderColor={Colors.primaryMuted}
				borderWidth={1}
				width={'30%'}
				height={'50%'}
			/>
		</View>
	);
};

export default Balance;
