import React, { useState, useRef } from 'react';
import { View, Text, findNodeHandle, UIManager } from 'react-native';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';
import CyberButtonSquare from '@/components/Buttons/CyberButtonSquare';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import DropdownModal from '@/components/Modals/DropdownModal';

const DROPDOWN_OPTIONS = [
	{
		name: 'Earn',
		icon: (
			<MaterialCommunityIcons
				name={'piggy-bank'}
				size={20}
				color={Colors.lightGray}
			/>
		),
		action: () => {},
	},
	{
		name: 'Your Address',
		icon: (
			<MaterialCommunityIcons
				name={'card-account-details'}
				size={20}
				color={Colors.lightGray}
			/>
		),
		action: () => {},
	},
	{
		name: 'Help',
		icon: (
			<MaterialCommunityIcons
				name={'comment-question'}
				size={20}
				color={Colors.lightGray}
			/>
		),
		action: () => {},
	},
];

const CYBER_BUTTON_WIDTH = 40;
const ICON_SIZE = 25;

const ActionButtons = () => {
	const { runTransaction, clearTransactions } = useBalanceStore();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [dropdownPosition, setDropdownPosition] = useState<{
		top: number;
		right: number;
	} | null>(null);
	const moreButtonRef = useRef(null);

	const handleAddMoney = () => {
		const amount =
			Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);

		runTransaction({
			id: Math.random().toString(),
			amount,
			date: new Date(),
			title: `${amount > 0 ? 'Received' : 'Sent'} Money`,
		});
	};

	const handleClearTransactions = () => {
		clearTransactions();
	};

	const handleOpenDropdown = () => {
		if (moreButtonRef.current) {
			const handle = findNodeHandle(moreButtonRef.current);
			if (handle) {
				UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
					setDropdownPosition({ top: pageY, right: 20 }); // Adjust right padding as needed
				});
			}
		}
		setIsModalVisible(true);
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					handlePress={handleAddMoney}
					fillColor={Colors.primary}
					steepPosition="top-left"
					width={CYBER_BUTTON_WIDTH}
					icon={
						<MaterialCommunityIcons
							name={'cash-plus'}
							size={ICON_SIZE}
							color={Colors.primaryMuted2}
						/>
					}
				/>
				<Text style={styles.label}>Deposit</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					handlePress={handleClearTransactions}
					width={CYBER_BUTTON_WIDTH}
					steepPosition="top-left"
					icon={
						<MaterialCommunityIcons
							name={'arrow-down-bold'}
							size={ICON_SIZE}
							color={Colors.primaryMuted}
						/>
					}
				/>
				<Text style={styles.label}>Withdraw</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					width={CYBER_BUTTON_WIDTH}
					steepPosition="top-left"
					icon={
						<MaterialCommunityIcons
							name={'compare-horizontal'}
							size={ICON_SIZE}
							color={Colors.primaryMuted}
						/>
					}
				/>
				<Text style={styles.label}>Transfer</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					width={CYBER_BUTTON_WIDTH}
					steepPosition="top-left"
					icon={
						<MaterialCommunityIcons
							name={'credit-card'}
							size={20}
							color={Colors.primaryMuted}
						/>
					}
				/>
				<Text style={styles.label}>Pay</Text>
			</View>

			<View style={styles.buttonContainer} ref={moreButtonRef}>
				<CyberButtonSquare
					width={CYBER_BUTTON_WIDTH}
					steepPosition="top-right"
					handlePress={handleOpenDropdown}
					icon={
						<MaterialCommunityIcons
							name={'dots-horizontal'}
							size={ICON_SIZE}
							color={Colors.primaryMuted}
						/>
					}
				/>
				<Text style={styles.label}>More</Text>
			</View>

			<DropdownModal
				isModalVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				anchorPosition={dropdownPosition!}
				options={DROPDOWN_OPTIONS}
			/>
		</View>
	);
};

export default ActionButtons;
