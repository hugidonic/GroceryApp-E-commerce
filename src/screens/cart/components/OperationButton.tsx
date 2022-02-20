import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import Block from './../../../components/Block';
import colors from './../../../utils/colors';

type Props = {
	type: 'Decrement' | 'Increment';
	func: () => void;
};

const OperationButton = ({ type, func }: Props) => {
	return (
		<Pressable style={styles.btn} onPress={func}>
			<Feather
				name={type == 'Decrement' ? 'minus' : 'plus'}
				size={26}
				color={type == 'Decrement' ? colors.secondary : colors.primary}
			/>
		</Pressable>
	);
};

export default OperationButton;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 14,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
