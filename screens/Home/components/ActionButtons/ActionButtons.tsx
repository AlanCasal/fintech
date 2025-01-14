import React, { useState, useRef } from 'react';
import { View, Text, findNodeHandle, UIManager } from 'react-native';
import { useBalanceStore } from '@/store/balanceStore';
import { styles } from './styles';
import CyberButtonSquare from '@/components/Buttons/CyberButtonSquare';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import DropdownModal from '@/components/Modals/DropdownModal';

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
		<View style={styles.actionRow}>
			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					handlePress={handleAddMoney}
					steepPosition="top-left"
					width={60}
					icon={<Ionicons name={'add'} size={30} color={Colors.primaryMuted} />}
				/>
				<Text style={styles.label}>Add Money</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					handlePress={handleClearTransactions}
					width={60}
					steepPosition="top-left"
					icon={
						<Ionicons name={'refresh'} size={30} color={Colors.primaryMuted} />
					}
				/>
				<Text style={styles.label}>Exchange</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CyberButtonSquare
					width={60}
					steepPosition="top-left"
					icon={
						<Ionicons name={'list'} size={30} color={Colors.primaryMuted} />
					}
				/>
				<Text style={styles.label}>Details</Text>
			</View>

			<View style={styles.buttonContainer} ref={moreButtonRef}>
				<CyberButtonSquare
					width={60}
					steepPosition="top-right"
					handlePress={handleOpenDropdown}
					icon={
						<Ionicons
							name={'ellipsis-horizontal'}
							size={30}
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
			/>
		</View>
	);
};

export default ActionButtons;
