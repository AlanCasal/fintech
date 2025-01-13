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
import { isIos } from '@/constants/Utils';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
	isModalVisible: boolean;
	handleModal: () => void;
	children: React.ReactNode;
	title?: string;
};

const CustomModal = ({
	isModalVisible = false,
	handleModal,
	children,
	title,
}: Props) => {
	const { bottom, top } = useSafeAreaInsets();

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={isModalVisible}
			onRequestClose={handleModal}
		>
			{isIos && (
				<BlurView intensity={20} style={StyleSheet.absoluteFill} tint="dark" />
			)}

			<TouchableWithoutFeedback onPress={handleModal}>
				<View style={styles.overlay} />
			</TouchableWithoutFeedback>

			<View style={[styles.headerContainer, { marginTop: top + 10 }]}>
				{title && <Text style={styles.title}>{title}</Text>}

				<TouchableOpacity onPress={handleModal}>
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
