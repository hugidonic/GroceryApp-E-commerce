import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import Block from '../../../components/Block';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import colors from './../../../utils/colors';
import RText from '../../../components/RText';

type Props = {
	title: string;
	iconType: 'SimpleLineIcons' | 'Ionicons';
	iconName:
		| 'ios-receipt-outline'
		| 'person-outline'
		| 'location-pin'
		| 'ios-card-outline'
		| 'md-gift-outline'
		| 'notifications-outline'
		| 'question'
		| 'exclamation';
	func: () => void;
};
const ICONSIZE = 26;

const ProfileListItem = ({ title, iconName, iconType, func }: Props) => {
	return (
		<TouchableOpacity onPress={() => func()}>
			<Block row align="center" style={styles.container}>
				{iconType == 'Ionicons' ? (
					<Ionicons
					// @ts-ignore
					name={iconName}
					size={ICONSIZE}
					color={colors.black}
					style={{ marginRight: 15 }}
					/>
					) : (
						<SimpleLineIcons
						// @ts-ignore
						name={iconName}
						size={ICONSIZE}
						color={colors.black}
						style={{ marginRight: 15 }}
					/>
				)}
				<RText bold medium>
					{title}
				</RText>
				<Ionicons name="chevron-forward" size={ICONSIZE} color={colors.black} style={styles.icon} />
			</Block>
		</TouchableOpacity>
	);
};

export default ProfileListItem;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: colors.secondary,
		position: "relative"
	},
	icon: {
		position: 'absolute',
		top: 12,
		right: 20,
	}
});
