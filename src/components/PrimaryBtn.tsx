import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RText from './RText';
import colors from '../utils/colors';

type Props = {
	title: string;
	func: () => void;
};

const PrimaryBtn = ({ title, func }: Props) => {
	return (
		<Pressable onPress={func} style={styles.container}>
			<RText color={colors.white} medium bold>
				{title}
			</RText>
		</Pressable>
	);
};

export default PrimaryBtn;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		width: '80%',
		paddingVertical: 14,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.6,
		shadowRadius: 4.65,

		elevation: 8
	}
});
