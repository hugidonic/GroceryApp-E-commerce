import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Block from './../../../components/Block';
import RText from '../../../components/RText';
import colors from '../../../utils/colors';

type Props = {};

const ProfileHeader = (props: Props) => {
	return (
		<Block
			row
			style={{
				borderBottomWidth: 1,
				borderBottomColor: colors.secondary,
				paddingHorizontal: 20,
				height: 140
			}}
			align="center"
		>
			<Block
				style={{ width: 80, height: 80 }}
				bRadius={50}
				color={colors.secondary}
			/>

			<Block style={{ marginLeft: 15 }}>
				<RText black large style={{ marginBottom: 4 }}>
					Aminev Vadim
				</RText>
				<RText color={colors.secondary}>hugidonic@ya.ru</RText>
			</Block>
		</Block>
	);
};

export default ProfileHeader;

const styles = StyleSheet.create({});
