import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// Custom components
import Block from './Block';
import RText from './RText';
// Components
import colors from '../utils/colors';
import Item from './Item';
// Types
import { ItemI } from '../redux/reduxTypes';

const { width } = Dimensions.get('screen');

type Props = {
	title: string,
	data: ItemI[]
};

const ItemList = ({title, data}: Props) => {
	return (
		<Block>
			<Block row justify="space-between" align="center" style={{ marginVertical: 8 }}>
				<RText black large>
					{title}
				</RText>
				{/* TODO: Make this a Link comoponent */}
				<RText color={colors.primary}>See more</RText>
			</Block>

			<FlatList
				data={data}
				renderItem={({ item }) => <Item item={item} />}
				keyExtractor={(item, idx) => idx.toString()}
				horizontal
				style={{
					marginLeft: -20,
					width
				}}
				ListHeaderComponent={() => <Block style={{ width: 20 }} />}
				ListFooterComponent={() => <Block style={{ width: 20 }} />}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <Block style={{ marginHorizontal: 10 }} />}
			/>
		</Block>
	);
};

export default ItemList;

const styles = StyleSheet.create({});
