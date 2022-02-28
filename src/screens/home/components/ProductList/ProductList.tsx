import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// Custom components
import Block from '../../../../components/Block';
import RText from '../../../../components/RText';
// Components
import Product from '../../../../components/Product';
// Types
import ProductListProps from './ProductList.props';
import colors from '../../../../utils/colors';

const { width } = Dimensions.get('screen');

const ProductList = ({title, data}: ProductListProps) => {
	return (
		<Block >
			<Block row justify="space-between" align="center" style={{ marginVertical: 8 }}>
				<RText black large>
					{title}
				</RText>
				{/* TODO: Make this a Link comoponent */}
				<RText color={colors.primary}>See more</RText>
			</Block>

			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Product product={item} />
				)}
				keyExtractor={(item, idx) => idx.toString()}
				horizontal
				style={{
					marginLeft: -20,
					width
				}}
				ListHeaderComponent={() => <Block style={{ width: 10 }} />}
				ListFooterComponent={() => <Block style={{ width: 10 }} />}
				showsHorizontalScrollIndicator={false}
				// ItemSeparatorComponent={() => <Block style={{ marginHorizontal: 10 }} />}
			/>
		</Block>
	);
};

export default ProductList;

const styles = StyleSheet.create({});
