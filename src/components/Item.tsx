import { Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import Block from './Block';
import RText from './RText';
import colors from './../utils/colors';
import { ItemI } from '../redux/reduxTypes';
import { useNavigation } from '@react-navigation/native';
import { ItemScreenProps } from '../routes/routeTypes';

type Props = {
	item: ItemI;
};

const Item = ({ item }: Props) => {
	const nav = useNavigation<ItemScreenProps['navigation']>();

	const handleNavigation = () => {
		console.log("Asdas");
		
		nav.navigate('Item', { item });
	};
	
	return (
		<Block shadow color="#fff" bRadius={20} style={styles.container}>
			<TouchableOpacity
				onPress={handleNavigation}
				style={{ flex: 1, padding: 12 }}
			>
				<Image
					source={item.picture}
					style={{ resizeMode: 'contain', width: 120, height: 120 }}
				/>

				<Block style={{ marginVertical: 8 }}>
					<RText black medium>
						{item.name}
					</RText>
					<RText color="#999" bold>
						{item.description}
					</RText>
				</Block>

				<Block row align="center" justify="space-between">
					<RText black medium>
						$ {item.price}
					</RText>
					<AddBtn />
				</Block>
			</TouchableOpacity>
		</Block>
	);
};

const AddBtn = () => {
	return (
		<Block color={colors.primary} bRadius={18} style={styles.btn}>
			<Feather name="plus" size={32} color="#fff" />
		</Block>
	);
};

export default Item;

const styles = StyleSheet.create({
	container: {
		// padding: 12,
		marginVertical: 20
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.2,
		shadowRadius: 4.65,
		borderWidth: 1,

		elevation: 8
	},
	btn: {
		padding: 8
	}
});
