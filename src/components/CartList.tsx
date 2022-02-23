import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import data from '../utils/data';
import CartItem from '../screens/cart/components/CartItem';
import Block from './Block/Block';

type Props = {};

const CartList = (props: Props) => {
	return (
		<FlatList
			data={cartData}
			renderItem={({ item }) => <CartItem cartItem={item} />}
			keyExtractor={(item) => item.item.name}
			showsVerticalScrollIndicator={false}
			ListHeaderComponent={() => <Block style={{ height: 20 }} />}
			ListFooterComponent={() => <Block style={{ height: 300 }} />}
			ItemSeparatorComponent={() => (
				<Block
					style={{
						marginVertical: 10
					}}
				/>
			)}
		/>
	);
};

export default CartList;

const styles = StyleSheet.create({});

const cartData = data.fruits.map((f) => {
	return {
		item: f,
		count: 1
	};
});