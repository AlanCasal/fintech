import {
	View,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Text,
	useWindowDimensions,
} from 'react-native';
import React, { Fragment } from 'react';
import { BlurView } from 'expo-blur';
import { isIos } from '@/constants/Utils';
import { styles } from './styles';
import BoxCorners from '@/components/BoxCorners';
import Divider from '@/components/Divider';

type Props = {
	isModalVisible: boolean;
	onClose: () => void;
	options: {
		name: string;
		icon: React.ReactNode;
		action: () => void;
	}[];
	anchorPosition?: {
		top: number;
		right: number;
	};
};

const DropdownModal = ({
	isModalVisible = false,
	onClose,
	anchorPosition,
	options,
}: Props) => {
	const { width: windowWidth } = useWindowDimensions();

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={isModalVisible}
			onRequestClose={onClose}
		>
			{isIos && (
				<BlurView intensity={20} style={StyleSheet.absoluteFill} tint="dark" />
			)}

			<TouchableWithoutFeedback onPress={onClose}>
				<View style={styles.overlay} />
			</TouchableWithoutFeedback>

			<View
				style={[
					styles.modalContainer,
					anchorPosition && {
						position: 'absolute',
						top: anchorPosition.top + 60,
						right: anchorPosition.right,
						width: windowWidth / 1.5,
					},
				]}
			>
				<BoxCorners
					cornerTopLeft
					cornerBottomRight
					width={'40%'}
					height={'60%'}
					borderWidth={StyleSheet.hairlineWidth}
				/>

				{options.map((option, index) => (
					<Fragment key={option.name}>
						<TouchableOpacity style={styles.tableItem} onPress={option.action}>
							{option.icon}
							<Text style={styles.actionText}>{option.name}</Text>
						</TouchableOpacity>

						{index !== options.length - 1 && (
							<Divider marginLeft={45} marginRight={10} />
						)}
					</Fragment>
				))}
			</View>
		</Modal>
	);
};

export default DropdownModal;
