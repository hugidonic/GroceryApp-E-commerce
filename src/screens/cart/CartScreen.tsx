import { StyleSheet } from 'react-native';
import React from 'react';
import Block from '../../components/Block/Block';
import RText from '../../components/RText';
import colors from '../../utils/colors';
import PrimaryBtn from '../../components/PrimaryBtn';
import CartList from '../../components/CartList';

type Props = {};

const CartScreen = (props: Props) => {
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
				<PrimaryBtn title="Go to checkout" func={() => {}} />
			</Block>
		</Block>
	);
};

export default CartScreen;

const styles = StyleSheet.create({});


