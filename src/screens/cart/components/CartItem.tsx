import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { ProductI } from '../../../redux/reduxTypes';
import Block from '../../../components/Block';
import RText from '../../../components/RText';
import OperationButton from './OperationButton';
import colors from './../../../utils/colors';

type Props = {
	cartItem: {
		product: ProductI;
		count: number;
	};
};

const CartItem = ({ cartItem }: Props) => {
	const [ count, setCount ] = React.useState<number>(cartItem.count);
	const decrement = () => {
		setCount((count) => count - 1);
	};
	const increment = () => {
		setCount((count) => count + 1);
	};

	return (
		<Block row color='#fff' shadow bRadius={20} style={styles.container}>
			<Image
				source={cartItem.product.picture}
				style={{
					width: 100,
					height: 100,
					resizeMode: 'contain',
					marginRight: 20
				}}
			/>
			<Block>
				<Block style={{ marginBottom: 8 }}>
					<RText black large>
						{cartItem.product.name}
					</RText>
					<RText color={colors.secondary}>{cartItem.product.description}</RText>
				</Block>
				<Block row>
					<OperationButton func={decrement} type="Decrement" />
					<Block
						style={{ width: 40, height: 40 }}
						justify="center"
						align="center"
					>
						<RText bold large>
							{count}
						</RText>
					</Block>
					<OperationButton func={increment} type="Increment" />
				</Block>
			</Block>

			<Pressable style={styles.deleteIcon}>
				<Entypo name="cross" size={36} color="black" />
			</Pressable>
		</Block>
	);
};

export default CartItem;

const styles = StyleSheet.create({
	container: {
    position: "relative",
    padding: 15,
    marginHorizontal: 20,
  },
  deleteIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
  }
});
