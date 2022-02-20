import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import RText from './RText';
import colors from './../utils/colors';

type Props = {
	title: string;
	func: () => void;
};

const OutlineBtn = ({ title, func }: Props) => {
	return (
		<Pressable onPress={func} style={styles.container}>
			<RText large bold color={colors.primary}>
				{title}
			</RText>
		</Pressable>
	);
};

export default OutlineBtn;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#e1e1e1",
		paddingVertical: 14,
		paddingHorizontal: 16,

		justifyContent: 'center',
		alignItems: 'center',

		width: '80%',
    borderRadius: 10,
	}
});
