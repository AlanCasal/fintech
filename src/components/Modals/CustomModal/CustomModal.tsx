import {
	View,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	ScrollView,
	TouchableOpacity,
	Text,
} from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIos } from '@/src/constants/Utils';
import Colors from '@/src/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
	isModalVisible: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
};

const CustomModal = ({
	isModalVisible = false,
	onClose,
	children,
	title,
}: Props) => {
	const { bottom, top } = useSafeAreaInsets();

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={isModalVisible}
			onRequestClose={onClose}
		>
			{isIos && (
				<BlurView intensity={60} style={StyleSheet.absoluteFill} tint="dark" />
			)}

			<TouchableWithoutFeedback onPress={onClose}>
				<View style={styles.overlay} />
			</TouchableWithoutFeedback>

			<View style={[styles.headerContainer, { marginTop: top + 10 }]}>
				{title && <Text style={styles.title}>{title}</Text>}

				<TouchableOpacity onPress={onClose}>
					<MaterialCommunityIcons
						name="close-box-outline"
						size={30}
						color={Colors.lightGray}
					/>
				</TouchableOpacity>
			</View>

			<ScrollView
				style={[styles.modalContainer, { marginBottom: bottom + 10 }]}
				showsVerticalScrollIndicator={false}
			>
				{children}
			</ScrollView>
		</Modal>
	);
};

export default CustomModal;
