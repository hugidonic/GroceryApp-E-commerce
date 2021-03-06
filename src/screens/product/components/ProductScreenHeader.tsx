import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Block from '../../../components/Block';
import { Entypo } from '@expo/vector-icons';
import colors from '../../../utils/colors';

type Props = {
	goBack: () => void
}

const ItemScreenHeader = ({goBack}: Props) => {
	return (
		<Block
			style={styles.container}
			row
			justify="space-between"
			align="center"
      color={colors.white}
		>
			<Pressable onPress={goBack}>
				<Entypo name="chevron-left" size={30} color={colors.black} />
			</Pressable>

			<Pressable>
				<Entypo
					name="dots-three-horizontal"
					size={30}
					color={colors.black}
				/>
			</Pressable>
		</Block>
	);
};

export default ItemScreenHeader;

const styles = StyleSheet.create({
	container: {
    marginTop: 25,
		paddingHorizontal: 20,
		paddingVertical: 5
	}
});
