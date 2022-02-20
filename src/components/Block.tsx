import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
	children?: React.ReactNode;
	style?: ViewStyle;

	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
	align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';

	bRadius?: number;

	row?: boolean;
	flex?: boolean;
	shadow?: boolean;
	border?: boolean;

	color?: string;
};

const Block = ({
	children,
	style,
	justify,
	shadow,
	align,
	row,
	flex,
	bRadius,
	border,
	color
}: Props) => {
	const styles = StyleSheet.flatten([
		style,
		row !== undefined && { flexDirection: 'row' },

		flex !== undefined && { flex: 1 },
		border !== undefined && { borderWidth: 1 },
		bRadius !== undefined && { borderRadius: bRadius },
		justify !== undefined && { justifyContent: justify },
		align !== undefined && { alignItems: align },
		color !== undefined && { backgroundColor: color },
		shadow !== undefined && {
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 4
			},
			shadowOpacity: 0.2,
			shadowRadius: 4.65,

			elevation: 8
		}
	]);

	return <View style={styles}>{children}</View>;
};

export default Block;
