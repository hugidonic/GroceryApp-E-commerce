import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Block from '../../components/Block';
import RText from '../../components/RText';
import data from '../../utils/data';
import CartItem from '../cart/components/CartItem';
import colors from '../../utils/colors';
import PrimaryBtn from './../../components/PrimaryBtn';
import CartList from '../../components/CartList';

type Props = {};

const FavoriteScreen = (props: Props) => {
	return (
		<Block flex color={colors.white}>
			<Block justify="center" row style={{ marginVertical: 30 }}>
				<RText black title>
					My Cart
				</RText>
			</Block>

			<CartList />

			<Block
				justify="center"
				row
				style={{ position: 'absolute', bottom: 25, right: 0, left: 0 }}
			>
				<PrimaryBtn title="Add all item to cart" func={() => {}} />
			</Block>
		</Block>
	);
};

export default FavoriteScreen;

const styles = StyleSheet.create({});

const cartData = data.fruits.map((f) => {
	return {
		item: f,
		count: 1
	};
});
