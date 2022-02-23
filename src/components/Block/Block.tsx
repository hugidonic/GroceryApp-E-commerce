import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import BlockProps from './Block.props'

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
	marginHorizontal,
	marginVertical,
	paddingHorizontal,
	paddingVertical,
}: BlockProps) => {
	const styles: ViewStyle = StyleSheet.flatten([
		style,

		flex !== undefined && { flex: 1 },
		border !== undefined && { borderWidth: 1 },
		bRadius !== undefined && { borderRadius: bRadius },
		justify !== undefined && { justifyContent: justify },
		align !== undefined && { alignItems: align },
		color !== undefined && { backgroundColor: color },
		row !== undefined && { flexDirection: 'row', },


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
