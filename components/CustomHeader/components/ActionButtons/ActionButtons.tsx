import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import CyberButtonSquare from '@/components/Buttons/CyberButtonSquare';
import Colors from '@/constants/Colors';

const ActionButtons = () => {
	return (
		<>
			<CyberButtonSquare
				steepPosition="top-left"
				icon={
					<Ionicons name="stats-chart" size={15} color={Colors.primaryMuted} />
				}
			/>
			<CyberButtonSquare
				steepPosition="bottom-right"
				icon={<Ionicons name="card" size={15} color={Colors.primaryMuted} />}
			/>
		</>
	);
};

export default ActionButtons;
