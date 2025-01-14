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
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import Divider from '@/components/Divider';

const MENU_OPTIONS = [
	{
		name: 'Account',
		icon: 'person',
		action: () => {},
	},
	{
		name: 'Learn',
		icon: 'bulb',
		action: () => {},
	},
	{
		name: 'Inbox',
		icon: 'megaphone',
		action: () => {},
	},
	{
		name: 'Sign Out',
		icon: 'log-out',
		action: () => {},
	},
];

type Props = {
	isModalVisible: boolean;
	onClose: () => void;
	anchorPosition?: {
		top: number;
		right: number;
	};
};

const DropdownModal = ({
	isModalVisible = false,
	onClose,
	anchorPosition,
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

				{MENU_OPTIONS.map((option, index) => (
					<Fragment key={option.name}>
						<TouchableOpacity style={styles.tableItem} onPress={option.action}>
							<Ionicons
								name={option.icon as keyof typeof Ionicons.glyphMap}
								size={18}
								color={Colors.lightGray}
							/>
							<Text style={styles.actionText}>{option.name}</Text>
						</TouchableOpacity>

						{index !== MENU_OPTIONS.length - 1 && (
							<Divider marginLeft={45} marginRight={10} />
						)}
					</Fragment>
				))}
			</View>
		</Modal>
	);
};

export default DropdownModal;
