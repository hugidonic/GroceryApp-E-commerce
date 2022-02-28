import React from "react";
import { TextProps, TextStyle } from "react-native";

interface RTextProps extends TextProps {
	style?: TextStyle | TextStyle[];

	light?: boolean;
	bold?: boolean;
	black?: boolean;

	title?: boolean;
	large?: boolean;
	medium?: boolean;
	small?: boolean;

	color?: string;
	children?: React.ReactNode | React.ReactElement;
};

export default RTextProps;