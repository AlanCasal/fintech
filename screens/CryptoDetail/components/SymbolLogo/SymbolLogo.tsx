import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface SymbolLogoProps {
	symbol?: string;
	logo?: string;
}

const SymbolLogo = ({ symbol, logo }: SymbolLogoProps) => (
	<View style={styles.container}>
		<Text style={styles.symbol}>{symbol}</Text>
		<Image source={{ uri: logo }} style={styles.logo} />
	</View>
);

export default SymbolLogo;
