import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import BlockProps from './Block.props';

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
	color,

	padding,
	margin,

	marginHorizontal,
	marginVertical,

	paddingHorizontal,
	paddingVertical
}: BlockProps) => {
	const styles: ViewStyle = StyleSheet.flatten([
		style,

		flex !== undefined && { flex: 1 },
		border !== undefined && { borderWidth: 1 },
		bRadius !== undefined && { borderRadius: bRadius },
		justify !== undefined && { justifyContent: justify },
		align !== undefined && { alignItems: align },
		color !== undefined && { backgroundColor: color },
		row !== undefined && { flexDirection: 'row' },

		padding !== undefined && {
			paddingTop: padding[0],
			paddingRight: padding[1],
			paddingBottom: padding[2],
			paddingLeft: padding[3]
		},
		margin !== undefined && {
			marginTop: margin[0],
			marginRight: margin[1],
			marginBottom: margin[2],
			marginLeft: margin[3]
		},

		paddingHorizontal !== undefined && { paddingHorizontal },
		marginHorizontal !== undefined && { marginHorizontal },
		paddingVertical !== undefined && { paddingVertical },
		marginVertical !== undefined && { marginVertical },

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
