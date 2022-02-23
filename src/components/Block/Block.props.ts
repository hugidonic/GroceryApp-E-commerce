import { StyleProp, ViewStyle } from "react-native";
import React from "react";

interface BlockProps {
	children?: React.ReactNode;
	style?: StyleProp<ViewStyle>;

	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
	align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';

	bRadius?: number;

	row?: boolean;
	flex?: boolean;
	shadow?: boolean;
	border?: boolean;

	paddingHorizontal?: number;
	paddingVertical?: number;
	
	marginHorizontal?: number;
	marginVertical?: number;

	color?: string;
};

export default BlockProps;