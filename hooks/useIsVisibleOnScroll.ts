import { useRef, useState } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent, View } from 'react-native';

const useIsVisibleOnScroll = ({ headerHeight = 0 }) => {
	const viewRef = useRef<View>(null);
	const [isVisible, setIsVisible] = useState(false);

	const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		if (!viewRef.current) return;

		viewRef.current.measure(
			(
				x: number,
				y: number,
				width: number,
				height: number,
				pageX: number,
				pageY: number
			) => {
				const { contentOffset, layoutMeasurement } = event.nativeEvent;
				const screenHeight = layoutMeasurement.height - headerHeight;
				const viewTop = pageY - contentOffset.y - headerHeight; // Adjust for header offset
				const viewBottom = viewTop + height;

				// Check if the view is within the visible bounds of the screen
				setIsVisible(viewTop >= 0 && viewBottom <= screenHeight);
			}
		);
	};

	return { isVisible, viewRef, handleOnScroll };
};

export default useIsVisibleOnScroll;
